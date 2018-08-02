---
title: python对象的实例化
date: 2018/7/23 19:03:33
categories: 
- Python
tags: 
- python面向对象
---

### python对象的实例化

## 代码

```python
'''
__init__ 方法会在类的对象被实例化（Instantiated）时立即运行。这一方法可以对任何你想
进行操作的目标对象进行初始化（Initialization）操作。
'''
class Person:
    def __init__(self, name):
        self.name = name

    def say_hi(self):
        print('Hello,my name is', self.name)


p = Person('Swaroop')
p.say_hi()
```

## 运行结果

>Hello,my name is Swaroop