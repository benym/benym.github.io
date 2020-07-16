---
title: LeetCode-64-最小路径和
date: 2020/7/16 14:16:19
description: 最小路径和
categories: LeetCode
tags: 
- 数组
- 矩阵
- DP
- Java
- Python
- Medium
keywords: 数组,矩阵,DP,Java,Python,Medium,LeetCode
---

## LeetCode-64-最小路径和

给定一个包含非负整数的 *m* x *n* 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

**说明：**每次只能向下或者向右移动一步。

<!--more-->

**示例：**

```
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
```

### 解题思路

**方法1、动态规划：**

特例判断：当行或者列为空，行列其中一个为0的时候，数组没有意义，直接返回0

由于只能往下或者往右走，所以第一行和第一列的值始终是由单个方向移动得到

这一部分的值可以先通过循环累加得到

剩下的位置，以i=1，j=1的位置，数字5为例，数字5位置的最小值可以由，Min(上方位置的值+5，左方位置的值+5)计算得到

所以当前的**状态**可以定义为：从左方和右方计算得到的当前位置的路径最小值

不难看出，数值可以在原本的数组中原地改变且不影响结果。

**状态转移方程**为：

`grid[i][j] = Math.min(grid[i-1][j]+grid[i][j],grid[i][j-1]+grid[i][j]);`

由于当前位置始终存储到达该位置的路径最小值，则最后到达右下角时，就是该矩阵中到达右下角总和最小的路径和

横向按顺序遍历的方法类似，这里不再重复介绍，详见Python代码

### Java代码

```java
class Solution {
    public int minPathSum(int[][] grid) {
        int rowlen = grid.length;
        int collen = grid[0].length;
        if(grid==null||rowlen==0||grid[0]==null||collen==0){
            return 0;
        }
        for(int i=1;i<collen;i++){
            grid[0][i] += grid[0][i-1];
        }
        for(int j=1;j<rowlen;j++){
            grid[j][0] += grid[j-1][0];
        }
        for(int i=1;i<rowlen;i++){
            for(int j=1;j<collen;j++){
                grid[i][j] = Math.min(grid[i-1][j]+grid[i][j],grid[i][j-1]+grid[i][j]);
            }
        }
        return grid[rowlen-1][collen-1];
    }
}
```

### Python代码

```python
class Solution:
    def minPathSum(self, grid: [[int]]) -> int:
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if i == j == 0: continue
                elif i == 0:  grid[i][j] = grid[i][j - 1] + grid[i][j]
                elif j == 0:  grid[i][j] = grid[i - 1][j] + grid[i][j]
                else: grid[i][j] = min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
        return grid[-1][-1]
```





