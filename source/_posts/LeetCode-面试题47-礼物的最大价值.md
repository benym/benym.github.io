---
title: LeetCode-面试题47-礼物的最大价值
date: 2020/5/7 21:12:39
description: 礼物的最大价值
categories: 剑指Offer
tags:
- DP
- 数组
- Java
- Python
- Medium
- 剑指Offer
keywords: DP,数组,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题47-礼物的最大价值 

在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

 <!--more-->

**示例1：**

```
输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
```

### 解题思路

**动态规划：**

由于只能向右和向下移动，所以对于第一行和第一列而言，可能的最大值就是直接向右和向下移动

设置二维dp矩阵

- 第一列表示为i不等于0时，`dp[i][0]`仅与`dp[i-1][0]`有关，于是可以在原矩阵直接进行修改

- 第一行表示为j不等于0时，`dp[0][j]`仅与`dp[0][j-1]`有关

  对于一行和一列可以先计算出来，避免循环中重复的判断

- 当i和j都不等于0时，`dp[i][j]`应该等于其左边格子的累和以及上边格子累和的最大值+当前格子的值

  即`dp[i][j]=Max(dp[i-1][j],dp[i][j-1])+gift(i,j)`

### Java代码

```java
class Solution {
    public int maxValue(int[][] grid) {
        if (grid == null||grid.length == 0||grid[0].length == 0) {
            return 0;
        }
        int m = grid.length;
        int n = grid[0].length;
        for(int i=1;i<m;i++){
            grid[i][0]+=grid[i-1][0];
        }
        for(int j=1;j<n;j++){
            grid[0][j]+=grid[0][j-1];
        }
        for(int i=1;i<m;i++){
            for(int j=1;j<n;j++){
                grid[i][j] += Math.max(grid[i-1][j],grid[i][j-1]);
            }
        }
        return grid[m-1][n-1];
    }
}
```

### Python代码

```python
class Solution:
    def maxValue(self, grid: List[List[int]]) -> int:
        if not grid or len(grid)==0 or len(grid[0])==0:
            return 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if i==0 and j==0: continue
                if i!=0 and j==0: grid[i][j]+=grid[i-1][j]
                if i==0 and j!=0: grid[i][j]+=grid[i][j-1]
                if i!=0 and j!=0: grid[i][j]+=max(grid[i-1][j],grid[i][j-1])
        return grid[len(grid)-1][len(grid[0])-1]
```