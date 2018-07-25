---
title: python中字符串的一些方法回顾
date: 2018年7月25日 21:29:40
categories:
- Python
tags:
- 基本教程
---

### python中字符串的一些方法回顾

## 代码

```python
hello_str = "hello world"

# 1、统计字符串长度
print(len(hello_str))
# 2、统计某一个小字符串出现的次数
print(hello_str.count("llo"))
# 3、某一个子字符串出现的位置
print(hello_str.index("llo"))
# 4、输出数学的平方
num_str = "\u00b2"
print(num_str)
# 5、判断是否以指定字符串开始
print(hello_str.startswith("hello"))
# 6、判断是否以指定字符串结束
print(hello_str.endswith("world"))
# 7、查找指定字符串
# 在index方法中，如果指定的字符串不存在，会直接报错
# 在find方法中，如果指定的字符串不存在，会返回-1
print(hello_str.find("llo"))
print(hello_str.find("CCC"))
# 8、替换字符串
# replace方法执行完成之后会返回一个新的字符串，但是不会修改原有字符串的内容
hh = hello_str.replace("world", "python")
print(hh)
print(hello_str)
```

## 运行结果

```
11
1
2
²
True
True
2
-1
hello python
hello world
```

