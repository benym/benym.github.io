---
title: Python中面向对象比较简单的内部函数
date: 2018/8/6 21:40:11
description: __init__,__del__,__str__内部方法的使用
categories:
- Python
tags:
- python面向对象
---

### 比较简单的内部函数

## 代码部分

```python
class Cat:

    def __init__(self,new_name):
        self.name = new_name
        print("{}来了".format(self.name))

    def __del__(self):
        print("%s 我去了"% self.name)

    def __str__(self):
        #必须返回一个字符串
        #str方法定制变量输出信息，一般用来自定义内容
        return "我是小猫{}".format(self.name)

tom = Cat("Tom")
print(tom)
```

## 运行结果

```
Tom来了
我是小猫Tom
Tom 我去了
```

