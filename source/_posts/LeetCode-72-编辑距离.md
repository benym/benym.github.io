---
title: LeetCode-72-编辑距离
date: 2020/7/27 09:53:31
description: 编辑距离
categories: LeetCode
tags: 
- 字符串
- Java
- DP
- Hard
keywords: 字符串,Java,Hard,DP,LeetCode
---

## LeetCode-72-编辑距离

给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

1. 插入一个字符
2. 删除一个字符
3. 替换一个字符

<!--more-->

**示例1：**

```
输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
```

**示例2：**

```
输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
```

### 解题思路

**方法1、动态规划：**

编辑距离是大厂面试的常考题目，是用作机器翻译和语音识别评价的基本算法

详解见官方https://leetcode-cn.com/problems/edit-distance/solution/bian-ji-ju-chi-by-leetcode-solution/

### Java代码

```java
public int minDistance(String word1, String word2) {
        int n1 = word1.length();
        int n2 = word2.length();
        int[][] dp = new int[n1 + 1][n2 + 1];
        // 边界状态初始化
        for (int i = 0; i < n1 + 1; i++) {
            dp[i][0] = i;
        }
        for (int j = 0; j < n2 + 1; j++) {
            dp[0][j] = j;
        }
        for (int i = 1; i < n1 + 1; i++) {
            for (int j = 1; j < n2 + 1; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(Math.min(dp[i - 1][j - 1], dp[i][j - 1]), dp[i - 1][j]);
                }
            }
        }
        return dp[n1][n2];
    }
```

