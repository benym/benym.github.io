---
title: LeetCode-面试题14-2-剪绳子(大数)
date: 2020/4/13 14:56:35
description: 剪绳子(大数)
categories: 剑指Offer
tags: 
- DP
- 贪心算法
- Java
- python
- Medium
- 剑指Offer
keywords: 动态规划,贪心算法,Java,python,Medium,剑指Offer
---

## LeetCode-面试题14-2-剪绳子(大数)

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m] 。请问 k[0]k[1]...k[m] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

 <!--more-->

**示例1**

```
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
```

**示例2**

```
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```

**提示:**

- `2 <= n <= 1000`

### 解题思路

这个题和上个题主体一样，但是是求的大数环境下，求指数就超过int的区间了，需要求模。还是尽可能的多切长度为3的，最后把不足3的乘上就是结果，都要求余

### Java代码1

```java
class Solution {
    public int cuttingRope(int n) {
        if(n<=3)
            return n-1;
        long product = 1;
        while(n>4){
            product *=3;
            product = product%1000000007;
            n-=3;
        }
        return (int)(product*n%1000000007);
    }
}
```

### Python代码

```python
class Solution:
    def cuttingRope(self, n: int) -> int:
        if(n<=3): return n-1
        dp = [0 for i in range(n+1)]
        dp[0],dp[1],dp[2],dp[3]= 0,1,2,3
        for i in range(4, n+1):
            for j in range(1, i // 2+1):
                dp[i] = max(dp[i],(dp[j]*dp[i-j]))
        return dp[n] % 1000000007
```

