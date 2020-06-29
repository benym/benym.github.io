---

title: Java反射获取类对象的三种方式
date: 2020/6/29 19:36:09
description: 总结
categories: Java
tags: 
- 反射
- Java
keywords: 反射,Java
---

## Java反射获取类对象的三种方式

简单了解Java获取类的3种方式

 <!--more-->

**1、Class.forName("全类名")**

将字节吗文件加载进内存，返回Class对象，多用于配指文件，将类名定义在配置文件中，便于利用java的反射机制生成类对象，加载类。

```java
//加载一个用户实体类UserBean
Class c1 = Class.forName(``"com.test.UserBean"``)；
```

**2、类名.class**

通过类名的属性class获取，多用于传递参数。

```java
Class c2 = UserBean.class;
```

**3、对象.getClass()**

多用于对象获取字节码的方式。

```java
UserBean user = new UserBean();
Class c3 = user.getClass();
```

对于三种方式获取到的类对象都指向堆内存中同一个地址，所以三种方式获取的类对象都是同一个，根据实际应用环境选择使用。







