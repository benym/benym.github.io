---
title: python中的序列以及切片的解释
date: 2018年7月7日 17:07:39
categories: 
- Python
tags: 
- 基本教程
---

### python中的序列以及切片的解释

## 切片：

有一种切片（Slicing）运算
符，它能够允许我们序列中的某段切片——也就是序列之中的一部分。

## 序列

```bash
# 序列  跑一下看看

shoplist = ['apple', 'mango', 'carrot', 'banana']
name = 'swaroop'

# Indexing or 'Subscription' operation #
# 索引或“下标（Subcription）”操作符 #
print('Item 0 is', shoplist[0])
print('Item 1 is', shoplist[1])
print('Item 2 is', shoplist[2])
print('Item 3 is', shoplist[3])
print('Item -1 is', shoplist[-1])
print('Item -2 is', shoplist[-2])
print('Character 0 is', name[0])

# Slicing on a list #
print('Item 1 to 3 is', shoplist[1:3])
print('Item 2 to end is', shoplist[2:])
print('Item 1 to -1 is', shoplist[1:-1])
print('Item start to end is', shoplist[:])

# 从某一字符串中切片 #
print('characters 1 to 3 is', name[1:3])
print('characters 2 to end is', name[2:])
print('characters 1 to -1 is', name[1:-1])
print('characters start to end is', name[:])

'''
你会注意到当步长为 2 时，我们得到的是第 0、2、4…… 位项目。当步长为 3 时，我们得到
的是第 0、3……位项目。
'''
print(shoplist[::1])
print(shoplist[::2])
print(shoplist[::3])
print(shoplist[::-1])
```