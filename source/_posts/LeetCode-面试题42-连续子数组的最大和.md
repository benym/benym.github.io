---
title: LeetCode-面试题42-连续子数组的最大和
date: 2020/5/5 18:08:46
description: 连续子数组的最大和
categories: 剑指Offer
tags: 
- 数组
- Java
- Python
- DP
- Easy
- 剑指Offer
keywords: 数组,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题42-连续子数组的最大和 

输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

 <!--more-->

**示例1：**

```
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

**限制：**

- `1 <= arr.length <= 10^5`
- `-100 <= arr[i] <= 100`

### 解题思路

方法1、找规律：

- 当累和小于等于0时，则curSum从当前数开始，如果不小于0就开始累加
- 如果当前和大于最大的和，就把curSum的值给maxSum

方法2、动态规划：

- dp[i] = dp[i-1] + nums[i]   # if i != 0 and dp[i-1] > 0
- dp[i] = nums[i]             # if i == 0 or dp[i-1] < 0

公式的意义在于，当第i-1个数字结尾的子数组中 所有数字的和小于0时，如果把这个负数与第i个数累加，则得到的结果比第i个数字本身还要小，所以这个情况下第i个数字结尾的子数组就是第i个数字本身。

如果i-1个数字结尾的子数组中所有数字的和大于0，则与第i个数字累加就得到以第i个数字结尾的子数组中所有数字的和

在这里因为dp[i]只与dp[i-1]和nums[i]有关系，因此可以将原数组nums用做dp列表，即直接在nums上修改

### Java代码

```java
class Solution {
    public int maxSubArray(int[] nums) {
        if(nums.length==0||nums==null)
            return 0;
        int maxSum = Integer.MIN_VALUE;
        int curSum = 0;
        for(int i = 0;i< nums.length;i++){
            if(curSum<=0)
                curSum = nums[i];
            else
                curSum+=nums[i];
            if(curSum>maxSum){
                maxSum = curSum;
            }
        }
        return maxSum;
    }
}
```

### Python代码

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if not nums or len(nums)==0: return 0
        maxSum = nums[0]
        for i in range(1,len(nums)):
            if nums[i-1]>0:
                nums[i]+=nums[i-1]
            maxSum = max(maxSum,nums[i])
        return maxSum
```