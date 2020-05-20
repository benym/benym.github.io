---
title: LeetCode-面试题61-扑克牌中的顺子
date: 2020/5/20 15:46:36
description: 扑克牌中的顺子
categories: 剑指Offer
tags:
- 数组
- Java
- Easy
- 剑指Offer
keywords: 数组,Java,Easy,剑指Offer
---

## LeetCode-面试题61-扑克牌中的顺子

从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

 <!--more-->

**示例1：**

```
输入: [1,2,3,4,5]
输出: True
```

**示例2:**

```
输入: [0,0,1,2,5]
输出: True
```

**限制：**

数组长度为 5 

数组的数取值为 [0, 13] 

### 解题思路

先给数组排序，统计0的个数，如果数组欠缺的几个数字个数正好等于0的个数，则数组可以变成连续的

如果从越过0开始的地方，出现两个数值相等，则说明数组不可能连续

### Java代码

```java
class Solution {
    public boolean isStraight(int[] nums) {
        if(nums==null||nums.length<=0)
            return false;
        Arrays.sort(nums);
        int zeroCount = 0;
        int gapCount = 0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]==0)
                zeroCount++;
        }
        int start = zeroCount;
        int end = start+1;
        while(end<nums.length){
            if(nums[start]==nums[end])
                return false;
            gapCount+=nums[end]-nums[start]-1;
            start=end;
            end++;
        }
        return (gapCount>zeroCount)?false:true;
    }
}
```

