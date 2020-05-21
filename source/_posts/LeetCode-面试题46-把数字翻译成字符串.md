---
title: LeetCode-面试题46-把数字翻译成字符串
date: 2020/5/7 15:56:27
description: 把数字翻译成字符串
categories: 剑指Offer
tags:
- DP
- 回溯
- 数组
- Java
- Python
- Medium
- 剑指Offer
keywords: DP,回溯,数组,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题46-把数字翻译成字符串 

给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

 <!--more-->

**示例1：**

```
输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
```

**限制：**

- `0 <= num < 2^31`

### 解题思路

**动态规划：**

初始化dp[0]=dp[1]=1，即翻译"无数字"和"第1位数字"的翻译方法数量均为1

当num的第1，2位的组成的数字属于[10,25]时，dp[2]=dp[1]+dp[0]=2，有2种翻译方法，显然dp[1]=1，所以dp[0]=1

- 当1个数被翻译为1个字母时，剩下的方案即dp[i-1]，dp[i]=dp[i-1]
- 当2个数组合在[10,25]的范围时，方案有2种，一是翻译1个数，二是翻译2个组合的数，dp[i] = dp[i-1]+dp[i-2]

为了优化空间，这里使用2个变量，分别代表dp[i]和dp[i-1]，当i从2开始时，dp[2]就可以通过dp0+dp1得到，之后顺序递推这两个数值

**递归(回溯)：**

想象成一棵二叉树，可以选择翻译1个数，也可以选择翻译1个组合数

当二叉树走的深度没有达到字符串长度时，就要进行判断

- 如果组合数符合[10,25]，则翻译的可能性有使用1个数字`i+1`和使用2个数字`i+2`两种可能，开启2种可能的递归调用。
- 如果不符合，则翻译只有一种可能，即`i+1`深度下的可能性

### Java代码

```java
class Solution {
    public int translateNum(int num) {
        if(num<0)
            return 0;
        String s = String.valueOf(num);
        int dp0 = 1;
        int dp1 = 1;
        for(int i=2;i<=s.length();i++){
            String temp = s.substring(i-2,i);
            int res = temp.compareTo("10")>=0&&temp.compareTo("25")<=0 ? dp0 + dp1 : dp1;
            dp0 = dp1;
            dp1 = res;
        }
        return dp1;
    }
}
```

### Python代码

```python
class Solution:
    def translateNum(self, num: int) -> int:
        s = str(num)
        length = len(s)-1
        return self.Sum(s,0,length)
    
    def Sum(self,s,i,length):
        if i >=length:
            return 1
        if i<=length-1:
            nsum = int(s[i])*10+int(s[i+1])
            if nsum>=10 and nsum<=25:
                return self.Sum(s,i+1,length)+self.Sum(s,i+2,length)
            else:
                return self.Sum(s,i+1,length)
```
