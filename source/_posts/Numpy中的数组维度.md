---
title: Numpy中的数组维度
date: 2018/8/22 22:15:17
description: reshape方法定义维度
categories: Numpy
tags: 
- Numpy
- python
keywords: Numpy,python,维度
---

在对 np.arange(24)(0, 1, 2, 3, ..., 23) 进行重新的排列时，在多维数组的多个轴的方向上，先分配最后一个轴（对于二维数组，即先分配行的方向，对于三维数组即先分配平面的方向） 

## 代码

```python
import numpy as np

# 一维数组
a = np.arange(24)
print("a的维度:\n",a.ndim)
# 现在调整其大小,2行3列4个平面
b = np.reshape(np.arange(24), (2, 3, 4))
# b 现在拥有三个维度
print("b(也是三维数组):\n",b)
# 分别看看每一个平面的构成
print("b的每一个平面的构成：\n")
print(b[:, :, 0])
print(b[:, :, 1])
print(b[:, :, 2])
print(b[:, :, 3])
```

## 运行结果

```python
a的维度:
 1
b(也是三维数组):
 [[[ 0  1  2  3]
  [ 4  5  6  7]
  [ 8  9 10 11]]

 [[12 13 14 15]
  [16 17 18 19]
  [20 21 22 23]]]
b的每一个平面的构成：

[[ 0  4  8]
 [12 16 20]]
[[ 1  5  9]
 [13 17 21]]
[[ 2  6 10]
 [14 18 22]]
[[ 3  7 11]
 [15 19 23]]
```

