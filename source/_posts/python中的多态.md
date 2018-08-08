---
title: python中的多态
date: 2018/8/8 19:41:53
description: 多态的一个基本实例
categories:
- Python
tags:
- 多态
---

当子类和父类都存在相同的 game()方法时，子类的 game() 覆盖了父类的 game()，在代码运行时，会调用子类的 game()。

这样，我们就获得了继承的另一个好处：**多态**。 

　　　　多态的好处就是，当我们需要传入更多的子类，例如新增 XX Dog、YY Dog 等时，我们只需要继承 Dog 类型就可以了，而game()方法既可以直不重写（即使用Dog的），也可以重写一个特有的。这就是多态的意思。调用方只管调用，不管细节，而当我们新增一种Dog的子类时，只要确保新方法编写正确，而不用管原来的代码。这就是著名的“开闭”原则：

- 对扩展开放（Open for extension）：允许子类重写方法函数
- 对修改封闭（Closed for modification）：不重写，直接继承父类方法函数

<!--more-->

## 代码

```python
class Dog(object):

    def __init__(self, name):
        self.name = name

    def game(self):
        print("{}跳".format(self.name))


class XiaoTianDog(Dog):

    # 方法重写
    def game(self):
        print("{}飞".format(self.name))


class Person(object):

    def __init__(self, name):
        self.name = name

    def game_with_dog(self, dog):
        print("{}和{}玩耍".format(self.name, dog.name))


# 创建Dog对象
Peter = Dog("皮特")
# 创建XiaoTianDog对象
wangcai = XiaoTianDog("旺财")
# 调用Dog里面的game方法
Peter.game()
# 调用XiaoTianDog里面的game方法
wangcai.game()
xiaoming = Person("小明")
xiaoming.game_with_dog(wangcai)
```

## 运行结果

```
皮特跳
旺财飞
小明和旺财玩耍
```

