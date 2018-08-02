---
title: python中字符串的一些基本操作
date: 2018/7/7 17:04:05
categories: 
- Python
tags: 
- 基本教程
---

### python字符串的一些基本操作

在这里，我们会看见一此操作中包含了好多字符串方法。 startwith  方法用于查找字符串是
否以给定的字符串内容开头。 in  运算符用以检查给定的字符串是否是查询的字符串中的一
部分。
find  方法用于定位字符串中给定的子字符串的位置。如果找不到相应的子字符串， find
会返回 -1。 str  类同样还拥有一个简洁的方法用以  联结（Join）  序列中的项目，其中字符串
将会作为每一项目之间的分隔符，并以此生成并返回一串更大的字符串。

<!--more-->

```bash
# 这是一个字符串对象
name = 'Swaroop'

if name.startswith('Swa'):
    print('Yes, the string starts with "Swa"')

if 'a' in name:
    print('Yes, it contains the string "a"')

if name.find('war') != -1:
    print('Yes,it contains the string "war"')

delimiter = '_*_'
mylist = ['Brazil', 'Russia', 'India', 'China']
print(delimiter.join(mylist))
```

