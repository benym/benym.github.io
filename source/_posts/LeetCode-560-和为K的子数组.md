---
title: LeetCode-560-和为K的子数组
date: 2020/7/31 17:52:50
description: 和为K的子数组
categories: LeetCode
tags: 
- 数组
- Java
- Medium
keywords: 数组,Java,Medium,LeetCode
---

## LeetCode-560-和为K的子数组

给定一个整数数组和一个整数 **k，**你需要找到该数组中和为 **k** 的连续的子数组的个数。

<!--more-->

**示例1：**

```
输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
```

**说明 :**

1. 数组的长度为 [1, 20,000]。
2. 数组中元素的范围是 [-1000, 1000] ，且整数 **k** 的范围是 [-1e7, 1e7]。

### 解题思路

**方法1、暴力累加：**

以数组中每一个数字作为起点，不断向后累加，找到一个累加和为k的就让count++

当以下一个数字为起点时，重置sum为0，即可得到最终结果

**方法2、哈希表：**

更好的题解https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y/

方法1的瓶颈在于对于每个数字i，需要枚举所有的j来判断是否符合条件

这一步其实是可优化的

我们定义`sum[i]` 为 `[0..i]` 里所有数的和，则 `sum[i] `可以由`sum[i−1] `递推而来，即：`sum[i]=sum[i−1]+nums[i]`

那么`[j..i] `这个子数组和为 `k`这个条件我们可以转化为`sum[i]−sum[j−1]==k`

简单移项可得符合条件的下标`j`需要满足`sum[j−1]==sum[i]−k`

所以我们考虑以`i`结尾的和为`k `的连续子数组个数时只要统计有多少个前缀和为 `sum[i]−k `的 `sum[j] `即可。我们建立哈希表 `mp`，以和为键，出现次数为对应的值，记录 `sum[i] `出现的次数，从左往右边更新 `mp `边计算答案，那么以 `i`结尾的答案 `mp[sum[i]−k]` 即可在 `O(1) `时间内得到。最后的答案即为所有下标结尾的和为 `k `的子数组个数之和。

需要注意的是，从左往右边更新边计算的时候已经保证了`mp[sum[i]−k] `里记录的 `sum[j] `的下标范围是 `0≤j≤i` 。同时，由于`sum[i] `的计算只与前一项的答案有关，因此我们可以不用建立 `sum `数组，直接用`sum `变量来记录 `sum[i−1]` 的答案即可。

### Java代码1

```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            int sum = 0;
            for (int j = i; j < nums.length; j++) {
                sum += nums[j];
                if (sum == k) {
                    count++;
                }
            }
        }
        return count;
    }
}
```

### Java代码2

```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        int count = 0;
        int sum = 0;
        Map<Integer,Integer> map = new HashMap<>();
        map.put(0,1);
        for(int i=0;i<nums.length;i++){
            sum+=nums[i];
            // 如果sum-k这个数值之前存在，则需要统计在这个区间内之前的前缀和
            if(map.containsKey(sum-k)){
                count+=map.get(sum-k);
            }
            // 存储当前的sum值，如果没有就是1，有则获取sum值出现的次数，次数再+1
            map.put(sum,map.getOrDefault(sum,0)+1);
        }
        return count;
    }
}
```



