---
title: LeetCode-1143-最长公共子序列
date: 2020/8/14 10:02:20
description: 最长公共子序列
categories: LeetCode
tags: 
- 字符串
- DP
- Java
- Medium
keywords: 字符串,DP,Java,Medium,LeetCode
---

## LeetCode-1143-最长公共子序列

给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。

若这两个字符串没有公共子序列，则返回 0。

<!--more-->

**示例1：**

```
输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace"，它的长度为 3。
```

**示例2：**

```
输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc"，它的长度为 3。
```

**示例3：**

```
输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0。
```

**提示:**

- `1 <= text1.length <= 1000`
- `1 <= text2.length <= 1000`
- 输入的字符串只含有小写英文字符。

### 解题思路

**方法1、动态规划：**
详见大佬解析https://leetcode-cn.com/problems/longest-common-subsequence/solution/dong-tai-gui-hua-zhi-zui-chang-gong-gong-zi-xu-lie/

初始化DP表

第0列和第0行均为空串，对应位置为0

状态`dp[i][j]`表示：对于text1[1...i]和text2[1...j]，他们的LCS的长度为`dp[i][j]`

状态转移方程：根据DP表得到，是前一列的LCS长度和上一行的LCS长度的最大值

### Java代码

```java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int lenT1 = text1.length();
        int lenT2 = text2.length();
        int[][] dp = new int[lenT1+1][lenT2+1];
        for(int i=1;i<=lenT1;i++){
            for(int j=1;j<=lenT2;j++){
                if(text1.charAt(i-1)==text2.charAt(j-1)){
                    dp[i][j] = dp[i-1][j-1]+1;
                }else{
                    dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
                }
                
            }
        }
        return dp[text1.length()][text2.length()];
    }
}
```

