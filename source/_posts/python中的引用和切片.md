---
title: python中的引用和切片
date: 2018年7月7日 16:04:03
categories: 
- Python
tags: 
- 基本教程
---

### 引用和切片造成的不同影响

当你创建了一个对象并将其分配给某个变量时，变量只会查阅（Refer）某个对象，并且它也
不会代表对象本身。也就是说，变量名只是指向你计算机内存中存储了相应对象的那一部
分。这叫作将名称绑定（Binding）给那一个对象。
一般来说，你不需要去关心这个，不过由于这一引用操作困难会产生某些微妙的效果，这是
需要你注意的：

<!-- more -->

```bash
'''如果直接引用对象的话，对mylist操作也会影响到原本的shoplist
如果想要不影响原本的，必须引用的是对象的切片，切片即为副本
'''

print('Simple Assignment')
shoplist = ['apple', 'mango', 'carrot', 'banana']
# mylist 只是指向同一对象的另一种名称
mylist = shoplist

# 我购买了第一项项目，所以我将其从列表中删除
del shoplist[0]

print('shoplist is', shoplist)
print('mylist is', mylist)
# 注意到 shoplist 和 mylist 二者都
# 打印出了其中都没有 apple 的同样的列表，以此我们确认
# 它们指向的是同一个对象

print('Copy by making a full slice')
# 通过生成一份完整的切片制作一份列表的副本
mylist = shoplist[:]
# 删除第一个项目
del mylist[0]

print('shoplist is', shoplist)
print('mylist is', mylist)
# 注意到现在两份列表已出现不同
```