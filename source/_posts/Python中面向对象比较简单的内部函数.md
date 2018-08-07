---
title: Python中面向对象比较简单的内部函数
date: 2018/8/6 21:40:11
description: __init__,__del__,__str__内部方法的使用,私有属性和私有方法的定义
categories:
- Python
tags:
- python面向对象
---

### 比较简单的内部函数

## 代码部分

```python
class Cat:

    def __init__(self, new_name):
        self.name = new_name
        # 定义一个私有属性
        self.__age = 18
        print("{}来了".format(self.name))

    def __del__(self):
        print("%s 我去了" % self.name)

    def __str__(self):
        # 必须返回一个字符串
        # str方法定制变量输出信息，一般用来自定义内容
        return "我是小猫{}".format(self.name)
    # 如果定义为__secret则为私有方法
    def secret(self):
        print("{}的年龄是{}".format(self.name,self.__age))


tom = Cat("Tom")
tom.secret()
print(tom)
```

## 运行结果

```
Tom来了
Tom的年龄是18
我是小猫Tom
Tom 我去了
```

