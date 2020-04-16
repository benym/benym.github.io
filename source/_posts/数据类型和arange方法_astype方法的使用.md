---
title: 数据类型和arange方法、astype方法的使用
date: 2018/8/22 20:55:17
description: Numpy中的数据类型
categories: Numpy
tags: 
- Numpy
- Python
keywords: Numpy,Python,arange,astype
---

Numpy支持比Python更多的数字类型

| 数据类型   | 描述                                                       |
| ---------- | ---------------------------------------------------------- |
| `bool_`    | 布尔（True或False），存储为一个字节                        |
| `int_`     | 默认整数类型（与C`long`相同；通常是`int64`或`int32`）      |
| INTC       | 与C`int`（通常为`int32`或`int64`）相同                     |
| INTP       | 用于索引的整数（与C`ssize_t`相同；通常是`int32`或`int64`） |
| INT8       | 字节（-128至127）                                          |
| INT16      | 整数（-32768至32767）                                      |
| INT32      | 整数（-2147483648至2147483647）                            |
| Int64的    | 整数（-9223372036854775808至9223372036854775807）          |
| UINT8      | 无符号整数（0到255）                                       |
| UINT16     | 无符号整数（0到65535）                                     |
| UINT32     | 无符号整数（0到4294967295）                                |
| UINT64     | 无符号整数（0到18446744073709551615）                      |
| float_     | `float64`的简写。                                          |
| float16    | 半精度浮点：符号位，5位指数，10位尾数                      |
| FLOAT32    | 单精度浮点数：符号位，8位指数，23位尾数                    |
| float64    | 双精度浮点：符号位，11位指数，52位尾数                     |
| complex_   | `complex128`的简写。                                       |
| complex64  | 复数，由两个32位浮点数（实部和虚部）                       |
| complex128 | 复数，由两个64位浮点数（实部和虚部）                       |

除了`intc`之外，还定义了平台相关的C整数类型`short`，`long`，`longlong`。

<div class="note info"><p>arange函数用于创建等差数组，使用频率非常高，arange非常类似range函数 ,两者的区别仅仅是arange返回的是一个数据，而range返回的是list 。要转换数组的类型，请使用.astype()方法（首选）或类型本身作为函数</p></div>

<!--more-->

## 代码

```python
import numpy as np

z = np.arange(5)
print(z)
print(z.dtype)
print(50*'*')
# 转化数据类型为float64
floar_arr = z.astype(np.float64)
print(floar_arr)
print(floar_arr.dtype)
print(50*'*')
# 如果将浮点数转换为整数，则小数部分会被截断
z2 = np.array([5.1,9.2,8.3,7.4,3.3214])
print(z2)
print(z2.astype(np.int32))
print(50*'*')
# arange的用法
print(np.arange(1, 5))
print(np.arange(0, 10, 2))
```

## 运行结果

```python
[0 1 2 3 4]
int32
**************************************************
[0. 1. 2. 3. 4.]
float64
**************************************************
[5.1    9.2    8.3    7.4    3.3214]
[5 9 8 7 3]
**************************************************
[1 2 3 4]
[0 2 4 6 8]
```

