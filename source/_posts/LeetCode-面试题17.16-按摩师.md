---
title: LeetCode-面试题17.16-按摩师
date: 2020/6/6 13:50:17
description: 按摩师
categories: LeetCode
tags: 
- DP
- 数组
- Java
- Easy
- LeetCode
keywords: DP,数组,Java,Easy,LeetCode
---

## LeetCode-面试题17.16-按摩师

一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

注意：本题相对原题稍作改动

 <!--more-->

**示例 1:**

```
输入： [1,2,3,1]
输出： 4
解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。
```

**示例2：**

```
输入： [2,7,9,3,1]
输出： 12
解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。
```

**示例3：**

```
输入： [2,1,4,5,3,1,1,3]
输出： 12
解释： 选择 1 号预约、 3 号预约、 5 号预约和 8 号预约，总时长 = 2 + 4 + 3 + 3 = 12。
```

### 解题思路

动态规划：

看示例1示例2，以为是奇数位置和偶数位置的动态规划，这样就不需要额外的空间....然后发现示例3不是这样的

于是还是老老实实拿个dp数组吧

dp数组的状态：当前位置前相隔数据的最大值

初始化：dp[0] = nums[0] ,dp[1] = Math.max(nums[0],nums[1])

转移方程：索引从2开始，由于dp[i-1]存储前面相隔数据的最大值，所以需要比较，当前位置的num[i]和前面间隔位置的数值最大值dp[i-2]之和，与dp[i-1]之间的大小关系，即`dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])`

### Java代码

```java
class Solution {
    public int massage(int[] nums) {
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





