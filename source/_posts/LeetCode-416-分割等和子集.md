---
title: LeetCode-416-分割等和子集
date: 2020/8/5 09:46:41
description: 分割等和子集
categories: LeetCode
tags: 
- 数组
- DP
- Java
- Medium
keywords: 数组,DP,Java,Medium,LeetCode
---

## LeetCode-416-分割等和子集

给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

**注意:**

1. 每个数组中的元素不会超过 100
2. 数组的大小不会超过 200

<!--more-->

**示例1：**

```
输入: [1, 5, 11, 5]

输出: true

解释: 数组可以分割成 [1, 5, 5] 和 [11].
```

**示例2：**

```
输入: [1, 2, 3, 5]

输出: false

解释: 数组不能分割成两个元素和相等的子集.
```

### 解题思路

**方法1、动态规划：**非常好的详解，0-1背包问题https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/0-1-bei-bao-wen-ti-xiang-jie-zhen-dui-ben-ti-de-yo/

做这道题需要做这样一个等价转换：**是否可以从这个数组中挑选出一些正整数，使得这些数的和等于整个数组元素的和的一半。**前提条件是：数组的和一定得是偶数，即数组的和一定得被2整除，这一点是特判。

### Java代码

```java
public class Solution {

    public boolean canPartition(int[] nums) {
        int len = nums.length;
        if (len == 0) {
            return false;
        }

        int sum = 0;
        for (int num : nums) {
            sum += num;
        }

        // 特判：如果是奇数，就不符合要求
        if ((sum & 1) == 1) {
            return false;
        }

        int target = sum / 2;

        // 创建二维状态数组，行：物品索引，列：容量（包括 0）
        boolean[][] dp = new boolean[len][target + 1];

        // 先填表格第 0 行，第 1 个数只能让容积为它自己的背包恰好装满
        if (nums[0] <= target) {
            dp[0][nums[0]] = true;
        }

        // 再填表格后面几行
        for (int i = 1; i < len; i++) {
            for (int j = 0; j <= target; j++) {
                // 直接从上一行先把结果抄下来，然后再修正
                dp[i][j] = dp[i - 1][j];

                if (nums[i] == j) {
                    dp[i][j] = true;
                    continue;
                }
                if (nums[i] < j) {
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
                }
            }
        }
        return dp[len - 1][target];
    }
}
```



