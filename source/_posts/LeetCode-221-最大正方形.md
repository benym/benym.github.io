---
title: LeetCode-221-最大正方形
date: 2020/8/11 11:22:30
description: 最大正方形
categories: LeetCode
tags: 
- 矩阵
- DP
- Java
- Medium
keywords: 矩阵,DP,Java,Medium,LeetCode
---

## LeetCode-221-最大正方形

在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

<!--more-->

**示例1：**

```
输入: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

输出: 4
```

### 解题思路

**方法1、暴力破解：**

引用链接https://leetcode-cn.com/problems/maximal-square/solution/zui-da-zheng-fang-xing-by-leetcode-solution/

暴力法是最简单直观的做法，具体做法如下：

- 遍历矩阵中的每个元素，每次遇到 1，则将该元素作为正方形的左上角；

- 确定正方形的左上角后，根据左上角所在的行和列计算可能的最大正方形的边长（正方形的范围不能超出矩阵的行数和列数），在该边长范围内寻找只包含 1 的最大正方形；

- 每次在下方新增一行以及在右方新增一列，判断新增的行和列是否满足所有元素都是 1。


**方法2、动态规划：**

- 状态`dp[i][j]`表示以第`i`行第`j`列为右下角所能构成的最大正方形边长

则当`i==0`或者`j==0`，最大正方形边长始终为1，则`dp[i][j]=1`

右下角的正方形的最大边长，最多比它的上方，左方，左上方为右下角的正方形边长+1

最好的情况是这三个方向的正方形大小都一样，这样加上右下角这个点就可以构成更大的正方形。但是如果其中某一个方向形成的正方形大小不一样，合起来就会缺少某个点，这时候的正方形大小只能取3个正方形中，最小的正方形边长+1了。

- 状态转移方程为：`dp[i][j] = Math.min(dp[i-1][j-1],Math.min(dp[i-1][j],dp[i][j-1]))+1`

### Java代码1

```java
int maxSide = 0;
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return maxSide;
        }
        int rows = matrix.length, columns = matrix[0].length;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                if (matrix[i][j] == '1') {
                    // 遇到一个 1 作为正方形的左上角
                    maxSide = Math.max(maxSide, 1);
                    // 计算可能的最大正方形边长
                    int currentMaxSide = Math.min(rows - i, columns - j);
                    // 遍历可能的最大正方形内的每个元素
                    for (int k = 1; k < currentMaxSide; k++) {
                        // 判断新增的一行一列是否均为 1
                        // 先判断对角线是否为0
                        boolean flag = true;
                        if (matrix[i + k][j + k] == '0') {
                            break;
                        }
                        // 再判断左上角点的右边和下边是否为0
                        for (int m = 0; m < k; m++) {
                            if (matrix[i + k][j + m] == '0' || matrix[i + m][j + k] == '0') {
                                flag = false;
                                break;
                            }
                        }
                        // 如果flag仍然为true则说明矩阵中全部是1，更新最大边长
                        if (flag) {
                            maxSide = Math.max(maxSide, k + 1);
                        } else {
                            break;
                        }
                    }
                }
            }
        }
        return maxSide * maxSide;
```

### Java代码2

```java
class Solution {
    public int maximalSquare(char[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        }
        int row = matrix.length;
        int col = matrix[0].length;
        int matLen = 0;
        int[][] dp = new int[row][col];
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                if (matrix[i][j] == '1') {
                    if(i==0||j==0){
                        dp[i][j] = 1;
                    }else{
                        dp[i][j] = Math.min(dp[i-1][j-1],Math.min(dp[i-1][j],dp[i][j-1]))+1;
                    }
                    matLen = Math.max(dp[i][j],matLen);
                }
            }
        }
        return matLen*matLen;
    }
}
```



