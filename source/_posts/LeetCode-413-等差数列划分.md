---
title: LeetCode-413-等差数列划分
date: 2020/6/18 20:13:57
description: 判断子序列
categories: LeetCode
tags: 
- DP
- 数组
- Java
- Medium
- LeetCode
keywords: DP,数组,Java,Medium,LeetCode
---

## LeetCode-413-等差数列划分

如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。

例如，以下数列为等差数列:

```
1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
```

以下数列不是等差数列

```
1, 1, 2, 5, 7
```

 <!--more-->

数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。

如果满足以下条件，则称子数组(P, Q)为等差数组：

元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。

函数要返回数组 A 中所有为等差数组的子数组个数。

**示例 1:**

```
A = [1, 2, 3, 4]

返回: 3, A 中有三个子等差数组: [1, 2, 3], [2, 3, 4] 以及自身 [1, 2, 3, 4]。
```

### 解题思路

**方法1、动态规划：**

**状态定义**为：当前的等差数组数量

如果前一个状态是等差数组，则只需要判断后一个数字前两个的差值是否满足等差数组，如果满足则+1

如1，2，3是等差数组，指针后移到4时仍然满足等差数组的条件，此时不需要往前判断到1，只需要判断到前2位即可，2，3，4是等差数组，之前的1，2，3，4同样也是

所以**状态转移方程**为：dp[i]=dp[i-1]+1

之后返回dp数组的和就是等差数组的数量

**方法2、暴力破解：**

### Java代码

```java
class Solution {
    public int numberOfArithmeticSlices(int[] A) {
        int len = A.length;
        if(A==null||len==0) return 0;
        int[] dp = new int[len];
        int sum = 0;
        for(int i=2;i<len;i++){
            if(A[i-1]-A[i-2]==A[i]-A[i-1]){
                dp[i]=dp[i-1]+1;
                sum+=dp[i];
            }
        }
        return sum;
    }
}
```

### Java代码

```java
class Solution {
    public int numberOfArithmeticSlices(int[] A) {
        int sum = 0;
        int len = A.length;
        for(int i=0;i<len-2;i++){
            int distance = A[i+1]-A[i];
            for(int j=i+2;j<len;j++){
                if(A[j]-A[j-1]==distance){
                    sum++;
                }else{
                    break;
                }
            }
        }
        return sum;
    }
}
```





