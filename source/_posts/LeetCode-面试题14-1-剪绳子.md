---
title: LeetCode-面试题14-1-剪绳子
date: 2020/4/13 14:56:35
description: 剪绳子
categories: 剑指Offer
tags: 
- DP
- 贪心算法
- Java
- Python
- Medium
- 剑指Offer
keywords: 动态规划,贪心算法,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题14-1-剪绳子

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m] 。请问 k[0]k[1]...k[m] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

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

- `2 <= n <= 58`

### 解题思路

方法1、动态规划

整体目标为最大化f(n)=max(f(i) x f(n-i))，可以看成递归自顶向下解决，但是这样会有很多重复计算。一个更好的方法是自底向上，把小的子问题最优解，然后再往上计算，子问题要存储起来，避免重复的计算过程。对于f(0)~f(3)，最优解的值是n-1，对于n>=4的数，比如4，可以切分为1，2，3的数字组合，于是dp[1]，dp[2]，dp[3]分别等于1，2，3。这里的dp[3]不等于最优解2，因为切分4并不需要对数字3再次切分。

另外一种解释是把线切的方法分为切成2段或者切成很多段，切成2段的乘积可以表示为第一段长度j，第二段长度i-j。切成多段的乘积可以表示为第一段长度为j，第二段长度为f(j-i)。到底是切2段大还是切多段大，用max函数比较一下。同时与现存的dp[i]的值比较，取最大的值。如Java代码2所示，也能够解决。

方法2、贪心算法

切的时候尽可能的使乘积最大，当n>=5时，尽可能多切长度为3的绳子；当剩下的长度为4时，切成2段长度为2的绳子，之后乘积就是切成3的次数*切成2的次数

### Java代码1

```java
class Solution {
    public int cuttingRope(int n) {
        // 此处计算f(0)~f(3)的最优解
        if(n < 4)
            return n-1;
        int[] dp = new int[n+1];
        // 当n>=4时，切分的长度有1，2，3的可能，dp[3]并不是代表f(3)的最优解
        // 因为长度为1、2、3的线是4的子集，不需要再切分
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 3;
        for(int i=4;i<=n;i++){
            for(int j=1;j<=i/2;j++){
                dp[i] = Math.max((dp[j]*dp[i-j]),dp[i]);
            }
        }
        return dp[n];
    }
}
```

### Java代码2

```java
class Solution {
    public int cuttingRope(int n) {
        int[] dp = new int[n + 1];
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j < i; j++) {
                dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
            }
        }
        return dp[n];
    }
}
```

### Python代码

```python
class Solution:
    def cuttingRope(self, n: int) -> int:
        if(n<=3): return n-1
        # 尽可能多的剪去长度为3的绳子
        count3 = n//3
        # 当绳子剩下的长度为4时，不再剪去长度为3的绳子，因为2x2>3x1，剪为3的次数减少1次
        if(n-count3*3): count3-=1
        # 重新计算差值，计算剪为2的次数
        count2 = (n-count3*3)//2
        return int(math.pow(3,count3)*math.pow(2,count2))
```

