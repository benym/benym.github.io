---
title: LeetCode-198-打家劫舍
date: 2020/6/6 15:03:23
description: 打家劫舍
categories: LeetCode
tags: 
- DP
- 数组
- Java
- Python
- Easy
- LeetCode
keywords: DP,数组,Java,Python,Easy,LeetCode
---

## LeetCode-198-打家劫舍

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

 <!--more-->

**示例 1:**

```
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

**示例2：**

```
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

**提示：**

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

### 解题思路

动态规划：

题目和{% post_link LeetCode-面试题17.16-按摩师 %}是基本上一样的

dp数组的状态：当前位置前相隔数据的最大值

初始化：dp[0] = nums[0] ,dp[1] = Math.max(nums[0],nums[1])

转移方程：索引从2开始，由于dp[i-1]存储前面相隔数据的最大值，所以需要比较，当前位置的num[i]和前面间隔位置的数值最大值dp[i-2]之和，与dp[i-1]之间的大小关系，即`dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])`

双指针：

多加一间房子，这个解法是经过分析之后简化的，原文来源[这里](https://leetcode-cn.com/problems/house-robber/solution/da-jia-jie-she-dong-tai-gui-hua-jie-gou-hua-si-lu-/)

### Java代码

```java
class Solution {
    public int rob(int[] nums) {
        int len = nums.length;
        if(nums==null||len==0) return 0;
        if(len<2)
            return nums[0];
        int[] dp = new int[len];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0],nums[1]);
        for(int i=2;i<len;i++){
            dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i]);
        }
        return dp[len-1];
    }
}
```

### Python代码

```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        cur , pre = 0,0
        for i in nums:
            cur,pre = max(pre+i,cur),cur
        return cur;
```





