---

title: 利用AOP实现操作日志
date: 2020/6/26 10:54:58
description: 使用总结
categories: Java
tags: 
- AOP
- Java
keywords: AOP,Java
---

## 利用AOP实现操作日志

AOP能够实现一些前置或者后置任务，作为一个切面，来完成例如日志记录、性能统计、安全控制、事务处理、异常处理等任务。这篇文章主要是总结自己利用AOP去实现全局操作日志记录功能的步骤。

 <!--more-->

要完成日志功能的记录和查询首先需要一个数据库表，命名为sysLog

包含id、visitTime、username、ip、url、executionTime、method字段

分别代表主键、访问时间、操作者用户名、访问ip、访问资源url、执行时长、访问方法。

创建一个对应的实体类

```java
public class SysLog {
    private String id;
    private Date visitTime;
    private String visitTimeStr;
    private String username;
    private String ip;
    private String url;
    private Long executionTime;
    private String method;
}
```

创建AOP切面

1. 前置通知：

   开始时间的获取直接new Date()即可

   利用JoinPoint对象的`getTarget()`方法可以获得被代理的对象，之后通过getClass()获取要访问的类

   那么如何去获得类中的方法名称呢？

   JoinPoint中还有一个方法叫`getSignature()`用于获取封装了署名信息的对象，在该对象中可以获取到目标方

   法名，所属类的Class等信息

   除此之外还可以通过`getArgs()`方法获取传入目标方法的参数对象

2. 后置通知：

   结束时间可以直接用new Date().getTime()减去开始时间，即可获得访问时长了

   我们还想要获取Controller中执行注解的url，有一下几个步骤：

   当访问的类、访问的方法不为空且当前的类不是AOP这个类的时候，进行反射url获取

   我们可以通过`getAnnotation(xxx.class)`获取class的注解，并通过`.value()`找到对应的RequesMapping映

   射值，在这里我们分别通过`clazz.getAnnotation`和`method.getAnnotation`获取对应的类和方法上的url

   之后进行字符串拼接即可得到完整的操作路径。

   如何获取IP地址呢？如果我们能够拿到request对象，那么获取ip地址就比较容易，这里采用了Spring提供的

   `org.springframework.web.context.request.RequestContextListener`，在LogAop中我们可以注入一

   个`HttpServletRequest request`，通过`request.getRemoteAddr()`获取ip地址。

   由于当前的用户受到SpringSecurity的控制，所以获取操作用户的对象，也必须从SpringSecurity的上下文中获取

   具体代码如下，获取的User非用户定义，而是SpringSecurity中提供的User；

   或者通过`request.getSession().getAttribute("SPRING_SECURITY_CONTEXT")`也可以获取User对象

   ```java
   SecurityContext context = SecurityContextHolder.getContext();// 从上下文中获取当前登陆的用户
   User user = (User) context.getAuthentication().getPrincipal();
   String username = user.getUsername();
   ```

   之后可以对上面的信息进行数据存储，或者查询操作

```java
@Component
@Aspect
public class LogAop {

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private ISysLogService sysLogService;

    private Date visitTime; // 开始时间
    private Class clazz;// 访问的类
    private Method method;// 访问的方法

    //前置通知 主要是获取开始时间，执行的类是哪一个，执行的是哪一个方法
    @Before("execution(* com.cqupt.lesson.controller.*.*(..))")
    public void doBefore(JoinPoint jp) throws NoSuchMethodException {
        visitTime = new Date();// 当前时间是就是开始访问的时间
        clazz = jp.getTarget().getClass();// 具体要访问的类
        String methodName = jp.getSignature().getName();// 获取访问的方法的名称
        Object[] args = jp.getArgs();// 获取访问的方法的参数
        // 获取具体执行方法的Method对象
        if (args == null || args.length == 0) {
            method = clazz.getMethod(methodName);// 只能获取无参数的方法
        } else {
            // 构建Class[]数组
            Class[] classArgs = new Class[args.length];
            for (int i = 0; i < args.length; i++) {
                classArgs[i] = args[i].getClass();
            }
            clazz.getMethod(methodName, classArgs);// 获取有参的方法
        }
    }

    //后置通知
    //通过反射完成方法体的寻找
    @After("execution(* com.cqupt.lesson.controller.*.*(..))")
    public void doAfter(JoinPoint jp) throws Exception {
        long time = new Date().getTime() - visitTime.getTime();// 获取访问时长

        String url = "";
        // 获取url
        if (clazz != null && method != null && clazz != LogAop.class) {

            //1、获取类上的@RequestMapping("/orders")
            RequestMapping classAnnotation = (RequestMapping) clazz.getAnnotation(RequestMapping.class);
            if (classAnnotation != null) {
                String[] classValue = classAnnotation.value();

                //2、获取方法上的@RequestMapping("/findAll")
                RequestMapping methodAnnotation = method.getAnnotation(RequestMapping.class);
                if (methodAnnotation != null) {
                    String[] methodValue = methodAnnotation.value();
                    url = classValue[0] + methodValue[0];
                    // 获取访问的ip地址
                    String ip = request.getRemoteAddr();

                    // 获取当前操作的用户
                    SecurityContext context = SecurityContextHolder.getContext();// 从上下文中获取当前登陆的用户
                    User user = (User) context.getAuthentication().getPrincipal();
                    String username = user.getUsername();

                    //将日志相关信息封装到SysLog对象
                    SysLog sysLog = new SysLog();
                    sysLog.setExecutionTime(time);//执行时长
                    sysLog.setIp(ip);
                    sysLog.setMethod("[类名] " + clazz.getName() + "[方法名] " + method.getName());
                    sysLog.setUrl(url);
                    sysLog.setUsername(username);
                    sysLog.setVisitTime(visitTime);

                    //调用Service完成操作
                    sysLogService.save(sysLog);
                }
            }
        }
    }
}
```