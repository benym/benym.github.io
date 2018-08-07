---
title: 正则表达式中的compile函数(二)
date: 2018/8/7 21:16:21
description: compile函数(二)
categories:
- Python
tags:
- python正则表达式
---

接着上一篇文章的compile函数实例

## 代码

```python
import re

pattern = re.compile(r'([a-z]+) ([a-z]+)', re.I)  # re.I 表示忽略大小写
m = pattern.match('Hello World Wide Web')
print(m)  # 匹配成功，返回一个Match 对象
print(m.group(0))  # 返回匹配成功的整个子串
print(m.span(0))  # 返回匹配成功整个子串的索引
print(m.group(1))  # 返回第一个分组匹配成功的子串
print(m.span(1))  # 返回第一个分组匹配成功的子串的索引
print(m.group(2))  # 返回第二个分组匹配成功的子串
print(m.span(2))  # 返回第二个分组匹配成功的子串的索引
print(m.groups())  # 等价于(m.group(1),m.group(2), ...)
print(m.group(3))  # 不存在第三个分组
```

<!--more-->

## 运行结果

```python
Traceback (most recent call last):
<_sre.SRE_Match object; span=(0, 11), match='Hello World'>
  File "E:/PythonProject/more/test.py", line 13, in <module>
Hello World
    print(m.group(3))  # 不存在第三个分组
(0, 11)
IndexError: no such group
Hello
(0, 5)
World
(6, 11)
('Hello', 'World')
```

