---
title: Python中的正则表达式match和search
date: 2018/8/7 20:16:00
description: re.match和re.search方法的区别
categories:
- Python
tags:
- python正则表达式
---

***re.match只匹配字符串的开始，如果字符串开始不符合正则表达式，则匹配失败，函数返回None；而re.search匹配整个字符串，直到找到一个匹配*** 

## 代码

```python
import re
'''
re.match只匹配字符串的开始，如果字符串开始不符合正则表达式，
则匹配失败，函数返回None；而re.search匹配整个字符串，直到找到一个匹配。
'''
line = "Cats are smarter than dogs";

matchObj = re.match(r'dogs', line, re.M | re.I)
if matchObj:
    print("match --> matchObj.group() : ", matchObj.group())
else:
    print("No match!!")

matchObj = re.search(r'dogs', line, re.M | re.I)
if matchObj:
    print("search --> matchObj.group() : ", matchObj.group())
else:
    print("No match!!")
```

<!--more-->

## 运行结果

```
No match!!
search --> matchObj.group() :  dogs
```

