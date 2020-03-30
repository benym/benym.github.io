---
title: LeetCode-498-对角线遍历
date: 2020/3/26 14:25:12
description: 对角线遍历
categories: 二维数组
tags: 
- 二维数组
- Java
- python
- Medium
keywords: 二维数组,Java,python,Medium
---

## LeetCode-498-对角线遍历

给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/image_loop.png)

 <!--more-->

**示例:**

```
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]
```

**说明:**

1. 给定矩阵中的元素总数不会超过 100000 。

### 解题思路

方法1、模拟路径，观察图可以知道对角线位置的横纵坐标之和等于第一行的该对角线元素索引号，以第一行为例，奇数往右上走，偶数往左下走，对于越界的不添加，将他按左下或右上移动，直到到矩阵位置里面进行添加。这种方法的缺点是遍历了很多没有用的位置，浪费了时间，运行时间`93ms`

方法2、简化问题，直接遍历每个对角线，翻转奇数对角线数值即可，外层循环为所有对角线初始点。运行时间`7ms`

还有一些其他更简单的方法，时间和空间上消耗都比较少，可以右转leetcode看看~

### Java代码1

```java
public static int[] findDiagonalOrder(int[][] matrix) {
        if (matrix == null || matrix.length == 0) {
            return new int[0];
        }
        int row = matrix.length;
        int col = matrix[0].length;
        int[] out = new int[row * col];
        int k =0;
        List<Integer> in = new ArrayList<>();
        for (int i = 0; i < row + col - 1; i++) {
            in.clear();
            // 找到对角线坐标点
            int r = i < col ? 0 : i - col + 1;
            int c = i < col ? i : col - 1;
            // 遍历对角线元素
            while (r < row && c > -1) {
                in.add(matrix[r][c]);
                ++r;
                --c;
            }
            if (i % 2 == 0) {
                Collections.reverse(in);
            }
            // 将一个对角线元素赋值
            for (int j = 0; j < in.size(); j++) {
                out[k++] = in.get(j);
            }
        }
        return out;
    }
```

### Java代码2

```java
public static int[] findDiagonalOrder(int[][] matrix) {
    // 按索引坐标分为奇数和偶数情况，奇数右上走，偶数左下走，当前行数+当前列数=索引值
    // 越界的不管到边界里面再加入
    if (matrix.length == 0) {
        return new int[0];
    }
    int rowlen = matrix.length;
    int collen = matrix[0].length;
    List<Integer> list = new ArrayList<>(rowlen * collen);
    int[] out = new int[rowlen * collen];
    rowlen--;
    collen--;
    for (int sum = 0; sum < rowlen + collen + 1; sum++) {
        if (sum % 2 == 0) { // 偶数情况
            int row = rowlen;
            int col = sum - row;
            while (row >= 0 && col <= collen) {
                if (col < 0) {
                    col += 1;
                    row -= 1;
                    continue;
                }
                list.add(matrix[row][col]);
                row -= 1;
                col += 1;
            }
        } else { // 奇数情况
            int row = 0;
            int col = sum - row;
            while (row <= rowlen && col >= 0) {
                if (col > collen) {
                    col -= 1;
                    row += 1;
                    continue;
                }
                list.add(matrix[row][col]);
                row = row + 1;
                col = col - 1;
            }
        }
    }
    for (int i = 0; i < list.size(); i++) {
        out[i] = list.get(i);
    }
    return out;
}
```

### Python代码

```python
class Solution:
    def findDiagonalOrder(self, matrix):
        if not matrix or not matrix[0]:
            return []
        N, M = len(matrix), len(matrix[0])
        result, intermediate = [], []
        for d in range(N + M - 1):
            intermediate.clear()
            r, c = 0 if d < M else d - M + 1, d if d < M else M - 1
            while r < N and c > -1:
                intermediate.append(matrix[r][c])
                r += 1
                c -= 1
            if d % 2 == 0:
                result.extend(intermediate[::-1])
            else:
                result.extend(intermediate)
        return result
```

