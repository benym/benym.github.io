---
title: python中对列表和元组的切片操作
date: 2018年7月26日 20:04:26
categories:
- Python
tags:
- 基本教程
---

### python中对列表和元组的切片操作

## 代码

```python
# 切片方法用于列表、元组,切片方法不能用于字典
list_tmp = [0, 1, 2, 3, 4]
tuple_tmp = (4, 3, 2, 1, 0)
# 列表输出
print([0, 1, 2, 3, 4][1:3])
print(list_tmp[1:3])
# 元组输出
print((4, 3, 2, 1, 0)[1:3])
print(tuple_tmp[1:3])
```

## 运行结果

```
[1, 2]
[1, 2]
(3, 2)
(3, 2)
```

