---
title: LeetCode-55-跳跃游戏
date: 2020/7/6 17:18:19
description: 跳跃游戏
categories: LeetCode
tags: 
- 数组
- 贪心算法
- Java
- Medium
keywords: 数组,贪心算法,Java,Medium,LeetCode
---

## LeetCode-55-跳跃游戏

给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

<!--more-->

**示例1：**

```
输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
```

**示例2：**

```
输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
```

### 解题思路

**方法1、贪心：**

对于数组中任意的一个位置y，如何判断是否可达

根据题意，只要存在一个位置x，它本身可达，并且它跳跃的最大长度为x+nums[x]，这个值>=y，即x+nums[x]>=y，那么位置y也可达

换句话说，对于每个可达的位置x，它使得x+1，x+2，......，x+nums[x]这些连续的位置都可以到达

于是我们可以动态记录**最远可以到达的位置**，对于每一个起跳点，更新对应的**最远可以到达的位置**

即把每个能起跳的点都试一次，使用max表示最远能够到达的点，超过max就不能跳了，直接进行返回

### Java代码

```java
class Solution {
    public boolean canJump(int[] nums) {
        boolean falg = true;
        if(nums.length<2) return falg;
        int max = 0;
        for(int i=0;i<nums.length;i++){
            if(i>max)
                falg = false;
            max = Math.max(max,i+nums[i]);
        }
        return falg;
    }
}
```

