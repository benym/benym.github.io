---
title: python中的__new__方法的重写
date: 2018/8/8 20:56:28
description: __new__方法的重写，单例模式前置？
categories: Python
tags: python面向对象
keywords: python
---

new方法重写的步骤比较固定，直接上代码吧

<!--more-->

## 代码

```
class MusicPlayer(object):

    # new方法的重写，是一个静态方法，必须主动传递cls参数
    def __new__(cls, *args, **kwargs):
        # 1.创建对象时，new方法会被自动调用
        print("创建对象，分配空间")

        # 2.为对象分配空间
        instance = super().__new__(cls)
        # 3.返回对象的引用
        return instance

    def __init__(self):
        print("111")


player = MusicPlayer()
print(player)
```

## 运行结果

```
创建对象，分配空间
111
<__main__.MusicPlayer object at 0x0000000003A0D128>
```

