---
title: Redis实现共享Session
date: 2020/6/25 16:30:43
description: 使用总结
categories: Java
tags: 
- Redis
- Java
keywords: Redis,Java
---

## Redis实现共享Session

Session共享，一般有一个这样的场景。以往单机的项目，数据请求都是在一个服务器上，session保存在这个服务器上自然是没有问题的。但是如果项目需要部署在多台服务器上的时候，session就会存在共享的问题

 <!--more-->

举一个例子：

假如现在有两台服务器同时运行，分别是ServerA和ServerB。

假设第一次请求(登陆请求)被分配到了A进行处理，A收到请求之后会生成一个sessionId并保存到内存中，然后返回给用户(浏览器)，浏览器会把sessionId保存到cookie中，第一次请求完成。如果之后每一次请求还是由A来进行处理，那么一切正常。如果A服务器挂掉了，这时候请求被分配到B，B拿到的sessionId是由A生成的，两边就对不上了。于是用户会发现，需要重新登陆了。

那么这样的问题应该怎么样去解决呢？

首先，问题的根源出在sessionId无法共享上，想要把sessionId共享，一个简单的思路就是把sessionId保存到数据库中(这里选择redis)，这样验证的时候就不再从当前服务器获取sessionId了，而改为了从redis中获取

实现思路如下：

1. 登陆页面提交用户名密码
2. 登陆成功之后生成token。Token相当于原来的sessionId，字符串等，可以使用UUID
3. 把用户信息保存到redis中。Key就是token，value就是userId
4. 设置key的过期时间。模拟Session的过期时间
5. 拦截器请求校验sessionId

### 代码实现

登陆成功，生成sessionId存入redis

```java
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private SysUserMapper sysUserMapper;

    @Autowired
    private RedisService redisService;

    @Override
    public LoginRespVo login(LoginReqVo vo) {
        SysUser sysUser = sysUserMapper.selectByUsername(vo.getUsername());
        if(sysUser==null){
            throw new BusinessException(4001005,"不存在该用户,请先注册");
        }
        if(sysUser.getStatus()==2){
            throw new BusinessException(4001006,"该帐号已被禁用");
        }
        if(!PasswordUtils.matches(sysUser.getSalt(),vo.getPassword(),sysUser.getPassword())){
            throw new BusinessException(4001007,"用户名密码不匹配");
        }
        String token = UUID.randomUUID().toString();
        LoginRespVo respVo = new LoginRespVo();
        respVo.setUserId(sysUser.getId());
        respVo.setToken(token);
        redisService.set(token,sysUser.getId(),60, TimeUnit.MINUTES);
        redisService.set(sysUser.getId(),token,60,TimeUnit.MINUTES);
        return respVo;
    }
}
```

其中LoginRespVo类为

```java
package com.cqupt.lesson.vo.req;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class LoginReqVo {
    @ApiModelProperty(value = "用户名")
    private String username;

    @ApiModelProperty(value = "密码")
    private String password;
}
```

SessionInterceptor拦截器校验sessionId

```java
package com.cqupt.lesson.interceptor;

import com.cqupt.lesson.exception.BusinessException;
import com.cqupt.lesson.service.RedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TokenInterceptor implements HandlerInterceptor {

    @Autowired
    private RedisService redisService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("token");
        if(StringUtils.isEmpty(token)){
            throw new BusinessException(4001002,"用户凭证不能为空");
        }else {
            if(!redisService.hasKey(token)){
                throw new BusinessException(4001002,"用户凭证无效");
            }
            String userId = (String) redisService.get(token);
            if(redisService.hasKey(userId)&&!token.equals(redisService.get(userId))){
                throw new BusinessException(4001002,"帐号已在异地登陆");
            }
        }
        return true;
    }
}

```

```java
package com.cqupt.lesson.config;

import com.cqupt.lesson.interceptor.TokenInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebAppConfig implements WebMvcConfigurer {
    @Bean
    public TokenInterceptor tokenInterceptor(){
        return new TokenInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(tokenInterceptor()).addPathPatterns("/api/**").excludePathPatterns("/api/user/login","/api/user/register","/api/user/code/*");
    }
}

```

