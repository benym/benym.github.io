---
title: 自定义RedisTemplate
date: 2020/6/25 15:36:22
description: 使用总结
categories: Java
tags: 
- Redis
- Java
keywords: Redis,Java
---

## 自定义RedisTemplate

在Spring Data Redis中，有一个高度封装的`RedisTemplate`类，实现了对Redis客户端的操作，其中提供了针对数据的`StringRedisSerializer`序列化方式，但这只能序列化String类型的Key和Value。在日常的数据处理中，通常会面对存储一个对象数据的任务，所以需要定义一个自己的序列化和反序列化方法。

 <!--more-->

### Redis基本数据结构

RedisTemplate中定义了对应的redis五种数据结构操作：

- opsForValue();//操作字符串
- opsForHash();//操作hash
- opsForList();  //操作list
- opsForSet();  //操作set
- opsForZSet();//操作有序set

RedisTemplate可以直接通过@Autowired获取对象引用，**为什么能够直接声明获取引用呢**？

- 在spring boot启动后会向spring 注入两个bean RedisTemplate、StringRedisTemplate
- 源码中StringRedisTemplate继承自RedisTemplate
- RedisTemplate是一个泛型类，而StringRedisTemplate则不是
- StringRedisTemplate只能对key=String，value=String的键值对进行操作，RedisTemplate可以对任何类型的key-value键值对操作
- 他们各自序列化的方式不同，但最终都是得到了一个字节数组，殊途同归，StringRedisTemplate使用的是
  StringRedisSerializer类；RedisTemplate使用的是JdkSerializationRedisSerializer类。反序列化，则是一个得到String，一个得到Object

RedisTemplate在操作数据的时候，存入数据会将数据先序列化成**字节数组**然后在存入Redis数据库(默认
JdkSerializationRedisSerializer:这个序列化方法就是Jdk提供的了,首先要求我们要被序列化的类继承自Serializeable接口，然后通过Jdk对象序列化的方法保存)，这个时候打开Redis查看的时候，你会看到你的数据不是以可读的形式，展现的，而是以字节数组显示。

而StringRedisSerializer在操作数据的时候就是通过String.getBytes()来实现的。而且在Redis中，所有存储的值都是字符串类型的。所以这种方法保存后，通过Redis-cli控制台或者Redis-Desktop-Manager图形化工具，是可以清楚的查看到我们保存了什么key,value是什么。

如当我们从以前的项目升级为RedisTemplate在不指定序列化方式的时候取不到原来的值

```java
@Autowired
  private RedisTemplate  redisTemplate;
  @Test
  public void testRedisTemplate() {
    System.out.println(redisTemplate.opsForValue().get("username"));
 }
 
 输出：null
```

这是因为升级成RedisTemplate他的默认使用序列化是JdkSerializationRedisSerializer，所以当需要获取数据的时候就找不到数据了(因为拿key去匹配的时候两种序列化得到的byte数组是不一样的)。

我们把RedisTemplate序列化方式设置成StringRedisSerializer看看效果

```java
@Autowired
  @Test
  public void testRedisTemplate() {
    stringRedisTemplate.opsForValue().set("username","张三");
    StringRedisSerializer stringRedisSerializer=new StringRedisSerializer();
    redisTemplate.setKeySerializer(stringRedisSerializer);
    redisTemplate.setValueSerializer(stringRedisSerializer);
    System.out.println(redisTemplate.opsForValue().get("username"));
 }
输出：张三
```

当我们指定使用StringRedisSerializer做value的序列化时，StringRedisSerializer的泛型指定的是String，传其他对象就会报类不能转换为String的异常

我们希望redis能够保存对象数据，就应该要自定义StringRedisSerializer

在StringRedisSerializer的源码中，它继承了`RedisSerializer<String>`，如下所示：

```java
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//
package org.springframework.data.redis.serializer;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import org.springframework.lang.Nullable;
import org.springframework.util.Assert;
public class StringRedisSerializer implements RedisSerializer<String> {
  private final Charset charset;
  public static final StringRedisSerializer US_ASCII;
  public static final StringRedisSerializer ISO_8859_1;
  public static final StringRedisSerializer UTF_8;
  public StringRedisSerializer() {
    this(StandardCharsets.UTF_8);
 }
  public StringRedisSerializer(Charset charset) {
    Assert.notNull(charset, "Charset must not be null!");
    this.charset = charset;
 }
  public String deserialize(@Nullable byte[] bytes) {
    return bytes == null ? null : new String(bytes, this.charset);
 }
  public byte[] serialize(@Nullable String string) {
    return string == null ? null : string.getBytes(this.charset);
 }
  static {
    US_ASCII = new StringRedisSerializer(StandardCharsets.US_ASCII);
    ISO_8859_1 = new StringRedisSerializer(StandardCharsets.ISO_8859_1);
    UTF_8 = new StringRedisSerializer(StandardCharsets.UTF_8);
 }
}
```

### 自定义redis序列化工具类

将传入的Object对象转化为JSON字符串，之后再变为字节数组

```java
package com.cqupt.lesson.serializer;

import com.alibaba.fastjson.JSON;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.SerializationException;
import org.springframework.util.Assert;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

public class MyStringRedisSerializer implements RedisSerializer<Object> {

    private final Charset charset;

    public MyStringRedisSerializer() {
        this(StandardCharsets.UTF_8);
    }

    public MyStringRedisSerializer(Charset charset) {
        Assert.notNull(charset, "Charset must not be null!");
        this.charset = charset;
    }

    @Override
    public byte[] serialize(Object object) throws SerializationException {
        if(object==null){
            return new byte[0];
        }
        if(object instanceof String){
            return object.toString().getBytes(charset);
        }else{
            String string = JSON.toJSONString(object);
            return string.getBytes(charset);
        }
    }

    @Override
    public Object deserialize(byte[] bytes) throws SerializationException {
        return (bytes == null ? null : new String(bytes, charset));
    }
}
```

同时需要加入fastjson依赖，创建一个`RedisConfig`配置类，设置2种key-value的序列化方式

```java
package com.cqupt.lesson.config;

import com.cqupt.lesson.serializer.MyStringRedisSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
public class RedisConfig {

    @Bean
    public RedisTemplate<String,Object> redisTemplate(RedisConnectionFactory redisConnectionFactory){
        RedisTemplate<String,Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(new MyStringRedisSerializer());
        redisTemplate.setHashValueSerializer(new MyStringRedisSerializer());
        return redisTemplate;
    }
}
```

之后自定义一个RedisService类，接管RedisTemplate的功能，并在此基础上进行一点判空修改(代码过长，只贴一部分)

```java
@Service
public class RedisService {
    @Autowired
    private RedisTemplate<String,Object> redisTemplate;
    /** -------------------key相关操作--------------------- */

    /**
     * 是否存在key
     * @Author:      YuanMing
     * @UpdateUser:
     * @Version:     0.0.1
     * @param key
     * @return       java.lang.Boolean
     * @throws
     */
    public Boolean hasKey(String key) {
        if (null==key){
            return false;
        }
        return redisTemplate.hasKey(key);
    }

    /**
     * 删除key
     * @Author:      YuanMing
     * @UpdateUser:
     * @Version:     0.0.1
     * @param key
     * @return       Boolean  成功返回true 失败返回false
     * @throws
     */
    public Boolean delete(String key) {
        if (null==key){
            return false;
        }
        return redisTemplate.delete(key);
    }
}
```

