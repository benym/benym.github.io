---
title: LeetCode-面试题04-二维数组中的查找
date: 2020/4/3 14:59:24
description: 二维数组中的查找
categories: 剑指Offer
tags: 
- 数组
- 剑指Offer
- Java
- Python
- Easy
keywords: 数组,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题04-二维数组中的查找

在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

 <!--more-->

**示例:**

```
现有矩阵 matrix 如下：
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

给定 target = 5，返回 true。
给定 target = 20，返回 false。

限制：
0 <= n <= 1000
0 <= m <= 1000
```

### 解题思路

这个问题本身有一定的规律，从左到右数字是递增的，从上到下数字也是递增的。可以从第一行的最大数开始与目标数target比较，如果第一行的最大数比target大的话，这一列就可以排除不是要找的位置了，因为第一行也是一列的最小数，只有当target比第一行某一列大的时候，才需要往下面找，找到一个数之后，target的位置可能是向左或者向下的，但不可能向右了，因为右边已经被排除。整个过程一直重复下去就能找到目标数，没有就返回false

### Java代码

```java
class Solution {
    public boolean findNumberIn2DArray(int[][] matrix, int target) {
        boolean falg = false;
        if (matrix == null || matrix.length == 0) {
            return falg;
        }
        int collen = matrix[0].length - 1;
        int rowlen = 0;
        while (rowlen < matrix.length && collen >= 0) {
            if (target < matrix[rowlen][collen]) {
                collen--;
            } else if (target == matrix[rowlen][collen]) {
                falg = true;
                break;
            } else if (target > matrix[rowlen][collen]) {
                rowlen++;
            }
        }
        return falg;
    }
}
```

### Python代码

```python
class Solution(object):
    def findNumberIn2DArray(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        falg = False
        if (matrix==None or len(matrix) == 0):
            return falg
        collen = len(matrix[0]) - 1
        rowlen = 0
        while (rowlen < len(matrix) and collen >= 0):
            if target < matrix[rowlen][collen]:
                collen -= 1
            elif target == matrix[rowlen][collen]:
                falg = True
                break
            elif target > matrix[rowlen][collen]:
                rowlen += 1
        return falg
```

