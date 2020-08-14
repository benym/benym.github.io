---
title: LeetCode-279-完全平方数
date: 2020/8/14 13:38:52
description: 完全平方数
categories: LeetCode
tags: 
- 数组
- DP
- Java
- Medium
keywords: 数组,DP,Java,Medium,LeetCode
---

## LeetCode-279-完全平方数

给定正整数 *n*，找到若干个完全平方数（比如 `1, 4, 9, 16, ...`）使得它们的和等于 *n*。你需要让组成和的完全平方数的个数最少。

<!--more-->

**示例1：**

```
输入: n = 12
输出: 3 
解释: 12 = 4 + 4 + 4.
```

**示例2：**

```
输入: n = 13
输出: 2
解释: 13 = 4 + 9.
```

### 解题思路

**方法1、动态规划：**

详见https://leetcode-cn.com/problems/perfect-squares/solution/hua-jie-suan-fa-279-wan-quan-ping-fang-shu-by-guan/

首先初始化长度为n+1的数组dp，每个位置都为0
如果n为0，则结果为0
对数组进行遍历，下标为i，每次都将当前数字先更新为最大的结果，即dp[i]=i，比如i=4，最坏结果为4=1+1+1+1即为4个数字
动态转移方程为：dp[i] = MIN(dp[i], dp[i - j * j] + 1)，i表示当前数字，`j*j`表示平方数

### Java代码

```java
class Solution {
    public int numSquares(int n) {
        int[] dp = new int[n + 1]; // 默认初始化值都为0
        for (int i = 1; i <= n; i++) {
            dp[i] = i; // 最坏的情况就是每次+1
            for (int j = 1; i - j * j >= 0; j++) { 
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
            }
        }
        return dp[n];
    }
}
```

