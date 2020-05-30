---
title: LeetCode-392-判断子序列
date: 2020/5/30 13:13:39
description: 判断子序列
categories: LeetCode
tags: 
- DP
- 字符串
- Java
- Easy
- LeetCode
keywords: DP,字符串,Java,Easy,LeetCode
---

## LeetCode-392-判断子序列

给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

 <!--more-->

**示例 1:**

```
s = "abc", t = "ahbgdc"
```

**示例2：**

```
s = "axc", t = "ahbgdc"
```

后续挑战 :

如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

### 解题思路

方法1、顺序遍历：

固定s的第一位找t中有没有这一位，有就移动s指针，并让len++，当len达到slen的时候说明匹配上了

方法2、DP：

DP不是很快，主要是为了练手该怎么做，[出处来源于这里](https://leetcode-cn.com/problems/is-subsequence/solution/java-dp-by-zxy0917-5/)

状态`dp[i][j]`为s从头开始到i的子字符串是否是t从头开始到j的子字符串的子序列

状态转移公式：

- 当`char[i]==char[j]`时，则字符i一定是j的子序列，如果0~i-1子字符串是0~j-1子字符串的子序列，则`dp[i][j]=true`，也就是说当前的字符匹配上了，前面的也匹配上了，才是子序列，所以`dp[i][j]=dp[i-1][j-1]`
- 当`char[i]!=char[j]`时，即判断当前0~i子字符串是否是0~j-1的子字符串的子序列，即`dp[i][j]=d[i][j-1]`。如ab，eabc，虽然s的最后一个字符串和t中的最后一个字符不相等，但是ab是eab的子序列，所以ab也是eabc的子序列
- 初始化：空字符串一定是t的子字符串的子序列，所以`dp[0][j]=true`

### Java代码

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        if (s.length() != 0 &&t.length() == 0) return false;
        if (s.length()==0&&t.length()!=0) return true;
        if (s.length()==0&&t.length()==0) return true;
        int index = 0;
        int slen = s.length();
        int len = 0;
        for (int i = 0; i < t.length(); i++) {
            if (s.charAt(index) == (t.charAt(i))) {
                index++;
                len++;
            }
            if (len == slen)
                return true;
        }
        return false;
    }
}
```

### Java代码2

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        int slen = s.length(),tlen = t.length();
        if(slen>tlen) return false;
        if(slen==0) return true;
        boolean[][] dp = new boolean[slen+1][tlen+1];
        for(int j = 0;j<tlen;j++){
            dp[0][j] = true;
        }
        for(int i =1;i<=slen;i++){
            for(int j =1;j<=tlen;j++){
                if(s.charAt(i-1)==t.charAt(j-1)){
                    dp[i][j] = dp[i-1][j-1];
                }else{
                    dp[i][j] = dp[i][j-1];
                }
            }
        }
        return dp[slen][tlen];
    }
}
```



