---
title: LeetCode-62-不同路径
date: 2020/8/6 13:19:12
description: 不同路径
categories: LeetCode
tags: 
- 矩阵
- DP
- Java
- Medium
keywords: 矩阵,DP,Java,Medium,LeetCode
---

## LeetCode-62-不同路径

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？

<!--more-->

**示例1：**

```
输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右
```

**示例2：**

```
输入: m = 7, n = 3
输出: 28
```

**提示：**

- `1 <= m, n <= 100`
- 题目数据保证答案小于等于 `2 * 10 ^ 9`

### 解题思路

**方法1、动态规划：**

这道题是个经典的动态规划问题，初始化矩阵大小的dp数组保存数字，由于只能往右或者往下走所以第1行和第1列都是1

`dp[i][j]`状态定义为：有多少条路径到i，j这一格

状态转移方程：

- 当i==0或者j==0时，`dp[i][j]=1`
- 其余位置，`dp[i][j]`的值依赖于左边位置的路径+上边位置的路径，即`dp[i - 1][j] + dp[i][j - 1]`

最后返回右下角的值即可

**方法2、动态规划(空间优化)：**

由于每格的值仅与左侧和上方的值有关，所以只需要维护一行的值即可，空间复杂度可以降到O(N)

### Java代码1

```java
class Solution {
    public int uniquePaths(int m, int n) {
        int[][] dp = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
                }
            }
        }
        return dp[n - 1][m - 1];
    }
}
```

### Java代码2

```java
class Solution {
    public int uniquePaths(int m, int n) {
        int[] dp = new int[m];
        Arrays.fill(dp, 1);
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                dp[j] += dp[j - 1];
            }
        }
        return dp[m - 1];
    }
}
```



