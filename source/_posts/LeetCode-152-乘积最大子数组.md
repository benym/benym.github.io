---
title: LeetCode-152-乘积最大子数组
date: 2020/7/12 10:15:54
description: 乘积最大子数组
categories: LeetCode
tags: 
- Java
- 数组
- DP
- Medium
keywords: Java,数组,DP,Medium,LeetCode
---

## LeetCode-152-乘积最大子数组

给你一个整数数组 `nums` ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

<!--more-->

**示例1：**

```
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
```

**示例2：**

```
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
```

### 解题思路

**方法1、动态规划：**

遍历数组的时候不断计算当前的最大值

同时还需要记录之前的最小值，当遍历的到的nums[i]为负数的时候

最大值*负数：会导致最大值变为最小

最小值*负数：会导致最小值变为最大

所以需要维护当前的最大值和当前的最小值

最大值可由`curMax = Math.max(curMax*nums[i],nums[i]);`计算

最小值可由`curMin = Math.min(curMin*nums[i],nums[i]);`计算

最大值和最小值会发生互换，导致结果不对

既然这样当遇到负数nums[i]的时候，提前将最大值和最小值互换，就可以维持原本的最大最小值

一个更好的题解来自https://leetcode-cn.com/problems/maximum-product-subarray/solution/dpfang-fa-xiang-jie-by-yang-cong-12/

### Java代码


```java
class Solution {
    public int maxProduct(int[] nums) {
        int max = Integer.MIN_VALUE;
        int curMax = 1;
        int curMin = 1;
        for(int i=0;i<nums.length;i++){
            if(nums[i]<0){
                int temp = curMax;
                curMax = curMin;
                curMin = temp;
            }
            curMax = Math.max(curMax*nums[i],nums[i]);
            curMin = Math.min(curMin*nums[i],nums[i]);
            max = Math.max(max,curMax);
        }
        return max;
    }
}
```

dp数组版本

### Java代码

```java
class Solution {
    public int maxProduct(int[] nums) {
        int[] dp_max = new int[nums.length+1];
        int[] dp_min = new int[nums.length+1];
        if(nums.length == 0) return 0;
        int max = Integer.MIN_VALUE;
        // 由于存在负数，所以需要维护两个数组
        // dp_max[i] 指的是以第 i 个数结尾的 乘积最大 的连续子序列
        // dp_min[i] 指的是以第 i 个数结尾的 乘积最小 的连续子序列
        dp_max[0] = 1;
        dp_min[0] = 1;
        for (int i = 1;i <= nums.length;i++){
            // 如果数组的数是负数，那么会导致 max 变成 min，min 变成 max
            // 故需要交换dp 
            if(nums[i-1] < 0){
                int temp = dp_min[i-1];
                dp_min[i-1] = dp_max[i-1];
                dp_max[i-1] = temp;
            }
            dp_min[i] = Math.min(nums[i-1],dp_min[i-1]*nums[i-1]);
            dp_max[i] = Math.max(nums[i-1],dp_max[i-1]*nums[i-1]);
            max = Math.max(max,dp_max[i]);
        }
        return max;
    }
}
```