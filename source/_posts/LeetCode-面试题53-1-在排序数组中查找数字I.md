---
title: LeetCode-面试题53-1-在排序数组中查找数字I
date: 2020/5/12 14:24:43
description: 在排序数组中查找数字I
categories: 剑指Offer
tags:
- 数组
- Java
- Easy
- 剑指Offer
keywords: 数组,Java,Easy,剑指Offer
---

## LeetCode-面试题53-1-在排序数组中查找数字I 

统计一个数字在排序数组中出现的次数。

 <!--more-->

**示例1：**

```
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
```

**示例2：**

```
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
```

- **限制：**

  `0 <= 数组长度 <= 50000`

### 解题思路

在有序的数组中二分查找，确定第一个k出现的位置和最后一个k出现的位置，然后两个位置相减即是出现次数

### Java代码

```java
class Solution {
    public int search(int[] nums, int target) {
        int len = nums.length;
        int count = 0;
        if(nums!=null&&len>0){
            int first = GetFristK(nums,len,target,0,len-1);
            int last = GetLastK(nums,len,target,0,len-1);
            if(first>-1&&last>-1){
                count = last-first+1;
            }
        }
        return count;
    }
    public int GetFristK(int[] nums,int len,int target,int start,int end){
        if(start>end)
            return -1;
        int mid = (start+end)/2;
        int midData = nums[mid];
        if(midData==target){
            // 找到第一个k的位置
            if(mid>0&&nums[mid-1]!=target||mid==0)
                return mid;
            else // 如果前面还有k，缩小范围继续找
                end = mid-1;
        }else if(midData>target)
            end = mid-1;
        else
            start = mid+1;
        return GetFristK(nums,len,target,start,end);
    }
    public int GetLastK(int[] nums,int len,int target,int start,int end){
        if(start>end)
            return -1;
        int mid = (start+end)/2;
        int midData = nums[mid];
        if(midData==target){
            // 找到最后一个k的位置
            if(mid<len-1&&nums[mid+1]!=target||mid==len-1)
                return mid;
            else
                start = mid+1;
        }else if(midData<target)
            start = mid+1;
        else
            end = mid-1;
        return GetLastK(nums,len,target,start,end);
    }
}
```
