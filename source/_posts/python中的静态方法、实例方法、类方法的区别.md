---
title: python中的静态方法、实例方法、类方法的区别
date: 2018/8/8 20:34:25
description: 静态方法，实例方法，类方法的区别
categories: Python
tags: python面向对象
keywords: python,静态方法,实例方法,类方法
---

**实例方法**

​	定义：第一个参数必须是实例对象，该参数名一般约定为“self”，通过它来传递实例的属性和方法（也可以传类的属性和方法）；

​	调用：只能由实例对象调用。

**类方法**

​	定义：使用装饰器@classmethod。第一个参数必须是当前类对象，该参数名一般约定为“cls”，通过它来传递类的属性和方法（不能传实例的属性和方法）；

​	调用：实例对象和类对象都可以调用。

**静态方法**

​	定义：使用装饰器@staticmethod。参数随意，没有“self”和“cls”参数，但是方法体中不能使用类或实例的任何属性和方法；

​	调用：实例对象和类对象都可以调用。

<!--more-->

## 代码

```python
import time


class Tool(object):
    count = 0

    def __init__(self, name):
        self.name = name
        Tool.count += 1

    # 定义一个实例方法，有self参数
    def action(self):
        print("挥动{}".format(self.name))

    # 定义一个类方法，有cls参数
    @classmethod
    def shou_tool_count(cls):
        print("工具对象的数量{}".format(cls.count))

    # 定义一个静态方法，初始没有任何参数
    @staticmethod
    def showTime():
        print(time.strftime("%H:%M:%S", time.localtime()))


# 创建工具对象
tool = Tool("斧头")
too2 = Tool("榔头")
# 调用类方法,逻辑上类方法一般由类自身调用，其实实例对象和类对象都可以调用
Tool.shou_tool_count()

# 调用实例方法,只能由实例对象调用
tool.action()

# 调用静态方法,实例对象和类对象均可调用
too2.showTime()
Tool.showTime()
```

## 运行结果

```
工具对象的数量2
挥动斧头
20:30:46
20:30:46
```

