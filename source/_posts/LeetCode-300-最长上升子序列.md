---
title: LeetCode-300-最长上升子序列
date: 2020/6/9 20:02:29
description: 最长上升子序列
categories: LeetCode
tags: 
- DP
- 数组
- Java
- Medium
- LeetCode
keywords: DP,数组,Java,Medium,LeetCode
---

## LeetCode-300-最长上升子序列

给定一个无序的整数数组，找到其中最长上升子序列的长度。

 <!--more-->

**示例 1:**

```
输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
```

说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

### 解题思路

**动态规划：**

子序列严格上升，不存在中间数字相等的情况，且不要求序列连续

状态定义为：第i个数字为结尾的最长上升子序列的长度，自身也需要统计在其中，每个位置的初始化长度为1

状态转移方程：遍历到索引是i的数字的时候，需要看i前面的i-1个数字是否小于当前的nums[i]的值，如果小于则可以构成一个更长的子序列，但i-1个数字中比nums[i]小的数字有多个，所以dp[i]位置的子序列长度，应该是前面i-1个数字的**最长**的那个加上1，即`dp[i] = Math.max(dp[j]+1,dp[i])`

外层循环到len，控制dp[i]每个位置的初始化为1

内层循环到i，查看从数组开头到i-1个数，最长的子序列分别是多少

最后dp数组中的最大值，就是最长上升子序列的长度

**贪心+二分查找：**

实在是想不到这种解法....[原题题解出处](https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2/)

### Java代码

```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        int len = nums.length;
        if(len<2) return len;
        int[] dp = new int[len];
        int res = 1;
        for(int i=0;i<len;i++){
            dp[i]=1;
            // 看前面i-1个数字
            for(int j=0;j<i;j++){
                if(nums[j]<nums[i]){ //可以构成更长的子序列，所以dp[j]+1
                    dp[i] = Math.max(dp[j]+1,dp[i]);
                }
            }
            if(res<dp[i]) res=dp[i];
        }
        return res;
    }
}
```

### Java代码2

```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        int len = nums.length;
        if(len<2) return len;
        int[] dp = new int[nums.length];
        int maxL = 0;
        for(int num:nums){
            int low = 0;
            int high = maxL;
            while(low<high){
                int mid = low+(high-low)/2;
                if(dp[mid]<num){
                    low = mid+1;
                }
                else{
                    high = mid;
                }
            }
            dp[low]=num;
            if(low==maxL)
                maxL++;
        }
        return maxL;
    }
}
```



