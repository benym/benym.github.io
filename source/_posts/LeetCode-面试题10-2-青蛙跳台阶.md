---
title: LeetCode-面试题10-2-青蛙跳台阶
date: 2020/4/8 22:34:29
description: 青蛙跳台阶
categories: 剑指Offer
tags: 
- 数据结构
- Java
- python
- Easy
- 剑指Offer
keywords: 数据结构,Java,python,Easy,剑指Offer
---

## LeetCode-面试题10-2-青蛙跳台阶

一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

`一定记得取余!`

 <!--more-->

**示例1**

```
输入：n = 2
输出：2
```

**示例2**

```
输入：n = 7
输出：21
```

**提示：**

- `0 <= n <= 100`

### 解题思路

青蛙可以跳1级台阶，也可以跳2级台阶。把跳n级台阶时的跳发看成n的函数，即为f(n)。当n>2时，第一次跳有2种不同的选择：一是第一次只跳1级，此时跳法数目等于后面剩下的n-1级台阶的跳法数目，即为f(n-1)；二是第一次跳2级，此时跳法数目等于后面剩下的n-2级台阶的跳发数目，即f(n-2)。因此n级台阶的不同跳法的总数为f(n)=f(n-1)+f(n-2)。不难看出这是一个斐波那契数列问题

### Java代码

```java
class Solution {
    public int numWays(int n) {
        int[] result = new int[]{1, 1};
        if (n < 2) {
            return result[n];
        }
        int sum = 0;
        int f1 = 1;
        int f2 = 1;
        for (int i = 2; i <= n; i++) {
            // 防止大数情况下超过int范围
            sum = (f1 + f2) % 1000000007;
            f1 = f2;
            f2 = sum;
        }
        return sum;
    }
}
```

### Python代码

```python
class Solution(object):
    def numWays(self, n):
        """
        :type n: int
        :rtype: int
        """
        f0, f1 = 1, 1
        for _ in range(n):
            f0, f1 = f1, f0 + f1
        return f0 % 1000000007
```

