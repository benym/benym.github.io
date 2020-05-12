---
title: LeetCode-面试题53-2-0到n-1中缺失的数字
date: 2020/5/12 16:10:46
description: 0到n-1中缺失的数字
categories: 剑指Offer
tags:
- 数组
- Java
- Easy
- 剑指Offer
keywords: 数组,Java,Easy,剑指Offer
---

## LeetCode-面试题53-2-0到n-1中缺失的数字 

一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

 <!--more-->

**示例1：**

```
输入: [0,1,3]
输出: 2
```

**示例2：**

```
输入: [0,1,2,3,4,5,6,7,9]
输出: 8
```

- **限制：**

  `1 <= 数组长度 <= 10000`

### 解题思路

二分查找：

递增且数字范围在0~n-1的数组，数字和它对应的下标一定是相等的，缺失的数子会造成，该数字之后的数组下标在原本相等的情况下+1

可以利用二分查找，在当前位置数字不等于index的时候，考虑特殊情况2种

- 当前位置==0
- 当前位置的前一个位置nums[mid-1]==mid-1，即前一个数字不缺失

这两种情况说明该位置就是缺失数字的位置，直接返回mid

如果不符合特殊情况，则需要在mid左半边查找，end=mid-1

如果该位置和下标相等，则表示mid左边不存在缺失，需要在右半边查找，start=mid+1

如果找完了前面所有的都没有发现缺失的数字，说明缺失数字在数组末尾，此时start=mid+1=nums.length，缺失的数字即是num.length

### Java代码

```java
class Solution {
    public int missingNumber(int[] nums) {
        if(nums==null||nums.length==0)
            return -1;
        int start = 0;
        int end = nums.length-1;
        while(start<=end){
            int mid = (start+end)/2;
            if(nums[mid]!=mid){
                if(mid==0||nums[mid-1]==mid-1){
                    return mid;
                }
                end = mid-1;
            }
            else
                start = mid+1;
        }
        if(start==nums.length)
            return nums.length;
        // 无效输入，比如数组不是排序的
        // 或者有数字不在0-n-1范围内
        return -1;
    }
}
```
