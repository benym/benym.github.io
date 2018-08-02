---
title: assert语句的运用
date: 2018/7/24 18:41:28
categories: 
- Python
tags: 
- 基本教程
---

### assert语句的运用

## 代码

```python
# assert语句
# pop() 函数用于移除列表中的一个元素（默认最后一个元素），并且返回该元素的值。
mylist = ['item']
assert len(mylist) >= 1
print(mylist.pop())
assert len(mylist) >= 1
```

## 运行结果

```python
item
Traceback (most recent call last):
  File "E:/PythonProject/more/more_assert.py", line 6, in <module>
    assert len(mylist) >= 1
AssertionError
```

