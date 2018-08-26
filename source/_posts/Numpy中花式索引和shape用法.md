---
title: Numpy中花式索引和shape用法
date: 2018/8/20 16:33:09
description: 对矩阵或者数组的花式索引，以及shape的用法
categories: Python
tags: 
- Numpy
- python
keywords: python,Numpy
---

总结一下最近学习中容易出现问题的地方❗️ ❗️ ❗️ 

## 代码

```python
from numpy import *

randMat = random.randint(0, 10, (4, 3))
print("原矩阵:\n", randMat)
# 索引从0开始计数
print("输出第一行的所有数据:\n", randMat[0, :])
print("输出第二列的所有数据:\n", randMat[:, 1])
print("输出矩阵第1和第3行的所有数据:\n", randMat[[0, 2], :])
print("行数:\n",randMat.shape[0])
print("列数:\n",randMat.shape[1])
print("维数:\n",randMat.shape)
```

## 运行结果

```python
原矩阵:
 [[3 5 1]
 [1 3 0]
 [0 2 1]
 [0 2 9]]
输出第一行的所有数据:
 [3 5 1]
输出第二列的所有数据:
 [5 3 2 2]
输出矩阵第1和第3行的所有数据:
 [[3 5 1]
 [0 2 1]]
行数:
 4
列数:
 3
维数:
 (4, 3)
```

<!--more-->

<div class="note info"><p>2018年8月22日 21:40:54更新，新增：使用shape和reshape调整数组大小</p></div>

## 代码

```python
import numpy as np
a = np.array([[1,2,3],[4,5,6]]) 
a.shape = (3,2)
b = a.reshape(2,3)
print(a)
print(b)
```

## 运行结果

```python
[[1 2]
 [3 4]
 [5 6]]
[[1 2 3]
 [4 5 6]]
```

