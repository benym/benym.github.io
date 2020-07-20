---
title: LeetCode-494-目标和
date: 2020/7/20 09:52:58
description: 目标和
categories: LeetCode
tags: 
- 数组
- Java
- 回溯
- DP
- Medium
keywords: 数组,Java,回溯,DP,Medium,LeetCode
---

## LeetCode-494-目标和

给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

<!--more-->

**示例1：**

```
输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
```

**提示：**

- 数组非空，且长度不会超过 20 。
- 初始的数组的和不会超过 1000 。
- 保证返回的最终结果能被 32 位整数存下。

### 解题思路

**方法1、回溯：**

每一步选择都有该位置数的正负2种选择方案，画成树状图可以知道需要DFS遍历2棵树

1棵树以第1位数**为正**开始寻找，1棵树以第1位数**为负**开始寻找，找到符合要求的答案。

类似于暴力穷举。

当遍历的深度达到数组长度，且路径和等于S的时候，说明找到了一条路径，count++

当不满足路径和要求时，返回上一层，进行回溯，撤销上一次的选择。

**方法2、动态规划：**

详见https://leetcode-cn.com/problems/target-sum/solution/494-mu-biao-he-by-ming-zhi-shan-you-m9rfkvkdad/

### Java代码1

```java
class Solution {
    int res = 0;
    int count = 0;
    public int findTargetSumWays(int[] nums, int S) {
        int len = nums.length;
        backtrack(0,nums,S,len);
        return count;
    }

    public void backtrack(int i,int[] nums,int S,int len){
        if(i==len){
            if(res==S){
                count++;
            }
            return;
        }
        // 选择正号
        res+=nums[i];
        backtrack(i+1,nums,S,len);
        // 撤销选择
        res-=nums[i];
        
        // 选择负号
        res-=nums[i];
        backtrack(i+1,nums,S,len);
        // 撤销选择
        res+=nums[i];
    }
}
```

### Java代码2

```java

class Solution{
    public int findTargetSumWays(int[] nums, int S){
        if(nums.length == 0) return 0;
        int sum = 0;
        for(int i = 0; i < nums.length; i++) sum += nums[i];
        if (Math.abs(S) > Math.abs(sum)) return 0;
        int[][] dp = new int[nums.length][sum*2+1];
        if(nums[0] == 0) dp[0][sum] = 2;
        else{
            dp[0][sum+nums[0]] = 1;
            dp[0][sum-nums[0]] = 1;
        }
        
        for(int i = 1; i<nums.length; i++){
            for(int j = 0; j<(sum*2+1);j++){
                int l = (j - nums[i]) >= 0 ? j - nums[i] : 0;
                int r = (j + nums[i]) < (sum*2+1) ? j + nums[i] : 0;
                dp[i][j] = dp[i-1][l] + dp[i-1][r];
            }
        }
        return dp[nums.length-1][sum+S];
    }
}
```

