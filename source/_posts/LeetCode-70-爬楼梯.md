---
title: LeetCode-70-爬楼梯
date: 2020/6/20 20:58:35
description: 爬楼梯
categories: LeetCode
tags: 
- 数组
- DP
- Java
- Easy
keywords: 数组,DP,Java,Easy
---

## LeetCode-70-爬楼梯

假设你正在爬楼梯。需要 *n* 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 *n* 是一个正整数。

<!--more-->

**示例 1:**

```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

**示例 2:**

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

### 解题思路

**方法1、动态规划：**

当n等于1的时候，只需要跳一次即可，只有一种跳法，记f(1)=1

当n等于2的时候，可以先跳一级再跳一级，或者直接跳二级，共有2种跳法，记f(2)=2

当n等于3的时候，他可以从一级台阶上跳两步上来，也可以从二级台阶上跳一步上来，所以总共有f(3)=f(2)+f(1)；

所以当等于n(n>2)的时候，总共有f(n)=f(n-1)+f(n-2)种跳法

此时的状态:   为n的时候，可能的跳法有多少种

状态转移方程：`f(n)=f(n-1)+f(n-2)`

**方法2、优化的动态规划：**

上一个方法需要开辟一个n的数组，其实可以直接用双指针完成状态的转移，不再需要开辟多余的空间

### Java代码

```java
class Solution {
    public int climbStairs(int n) {
        if (n <= 1)
            return 1;
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}
```

### Java代码2

```java
class Solution {
    public int climbStairs(int n) {
        int[] result = new int[]{1, 1};
        if (n < 2) {
            return result[n];
        }
        int sum = 0;
        int f1 = 1;
        int f2 = 1;
        for (int i = 2; i <= n; i++) {
            sum = (f1 + f2);
            f1 = f2;
            f2 = sum;
        }
        return sum;
    }
}
```
