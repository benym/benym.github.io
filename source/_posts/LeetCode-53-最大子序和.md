---
title: LeetCode-53-最大子序和
date: 2020/5/30 10:28:18
description: 最大子序和
categories: LeetCode
tags: 
- DP
- 贪心算法
- Java
- Python
- Easy
- LeetCode
keywords: DP,贪心算法,Java,Python,Easy,LeetCode
---

## LeetCode-53-最大子序和

给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 <!--more-->

**示例 1:**

```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

**进阶:**

如果你已经实现复杂度为 O(*n*) 的解法，尝试使用更为精妙的分治法求解。

### 解题思路

方法1、DP：

当前元素存储前一个元素和当前元素之和与当前元素之间的最大值，每个位置均可以由此规则计算得出，最后返回数组的最大值即可

方法2、贪心：

如果当前元素之前的和小于0，就丢弃之前的数列，即dp[i] = num[i]，如果大于0就累加

方法3、更清楚的版本：

实际上是一样的，只是代码看得清楚点

当前和小于0，就把nums[i]赋值，如果当前值>最大值

交换最大值

### Java代码

```java
class Solution {
    public int maxSubArray(int[] nums) {
        if(nums==null||nums.length==0) return 0;
        int[] dp = new int[nums.length];
        dp[0] = nums[0];
        int max = nums[0];
        for(int i=1;i<nums.length;i++){
            dp[i] = Math.max(nums[i],dp[i-1]+nums[i]);
            max = Math.max(max,dp[i]);
        }
        return max;
    }
}
```

### Python代码

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if not nums or len(nums)==0: return 0
        for i in range(1,len(nums)):
            nums[i] = nums[i]+max(nums[i-1],0)
        return max(nums)
```
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

