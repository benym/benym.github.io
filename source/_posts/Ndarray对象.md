---
title: Ndarray对象
date: 2018/8/22 20:55:17
description: Numpy中的array
categories: Numpy
tags: 
- Numpy
- Python
keywords: Numpy,Python,array
---

NumPy 中定义的最重要的对象是称为  ndarray  的 N 维数组类型。 它描述相同类型的元素集合。 可以使用基于零的索引访问集合中的项目。ndarray  中的每个元素在内存中使用相同大小的块。基本
的 ndarray  是使用 NumPy 中的数组函数创建的，如：`numpy.array`

它从任何暴露数组接口的对象，或从返回数组的任何方法创建一个ndarray。

`numpy.array(object,dtype=None,copy=True,order=None,subok=False,ndmin=0`

上面的构造器接受以下参数：

| 序号 | 参数及描述                                                   |
| ---- | ------------------------------------------------------------ |
| 1.   | `object` 任何暴露数组接口方法的对象都会返回一个数组或任何（嵌套）序列。 |
| 2.   | `dtype` 数组的所需数据类型，可选。                           |
| 3.   | `copy` 可选，默认为`true`，对象是否被复制。                  |
| 4.   | `order` `C`（按行）、`F`（按列）或`A`（任意，默认）。        |
| 5.   | `subok` 默认情况下，返回的数组被强制为基类数组。 如果为`true`，则返回子类。 |
| 6.   | `ndimin` 指定返回数组的最小维数。                            |

<!--more-->

## 代码

```python
import numpy as np

a = np.array([1,2,3])
print(a,"\n")
# 当维度比一维高时
b = np.array([[1,2],[3,4]])
print(b,"\n")
# zeros(shape)将创建一个用指定形状用0填充的数组
print(np.zeros((2,3)),"\n")
# ones(shape)将创建一个用1填充的数组
print(np.ones((3,3)),"\n")
# 最小维度
c = np.array([1,2,3,4,5],ndmin=2)
print(c,"\n")
# dtype参数
a = np.array([1,2,3],dtype=complex)
print(a,"\n")
```

## 运行结果

```python
[1 2 3] 

[[1 2]
 [3 4]] 

[[0. 0. 0.]
 [0. 0. 0.]] 

[[1. 1. 1.]
 [1. 1. 1.]
 [1. 1. 1.]] 

[[1 2 3 4 5]] 

[1.+0.j 2.+0.j 3.+0.j] 
```

