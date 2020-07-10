---
title: LeetCode-33-搜索旋转排序数组
date: 2020/7/10 09:30:50
description: 搜索旋转排序数组
categories: LeetCode
tags: 
- Java
- 数组
- Medium
keywords: Java,数组,Medium,LeetCode
---

## LeetCode-33-搜索旋转排序数组

假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

<!--more-->

**示例1：**

```
输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
```

**示例2：**

```
输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1
```

### 解题思路

**方法1、双指针+根据规则的if-else：**

这种方法应该是不符合本题的时间复杂度，但又不同于直接顺序遍历

用于铺垫二分查找解法。

根据旋转的规则，旋转点可能出现在数组中间，也可能出现旋转后数组不变的情况

**假设旋转点出现在数组中间：**

- 数组分成2部分有序，可以通过判断target和low、high之间的大小来确定target可能在哪一半数组中

- 其次，定义旋转边界，左半边数组升序排列，右半边数组从右向左降序排列

  如果从low开始向右遍历，则满足`nums[i]-num[i-1]>0`，当小于0时，则为旋转边界。如果到达边界都没有找到，说明查找的数不在数组中，此时返回-1，如果查找过程中找到target则返回数组下标。

  从high开始向左遍历情况类似。

**假设旋转点出现在数组之外：**

- 则数组直接有序，这时候线性遍历或者进行二分查找均可，这里简单写了线性遍历

**特例判断：**

- 当target等于low和high的时候，返回对应下标
- 当target>low时，进行左子数组遍历
- 当target<high时，进行右子数组遍历
- 如果数组为空或者数组长度为0，返回-1
- 如果数组长度为1，比较数组值是否等于target，等于则返回该值，不等于则返回-1

**方法2、二分查找：**

在上面一个方法中，虽然划分了数组，但比较过程仍然只是线性遍历

我们可以进一步利用二分查找来进行搜索

- 如果中间的数小于最右边的数，则右半段是有序的

- 如果中间的数大于最右边的数，则左半段是有序的

- 我们只需要在有序的半段里用首尾两个数来判断目标值是否在这个区域中，就可以确定保留哪半边数组

- ### Java代码1


```java
class Solution {
    public int search(int[] nums, int target) {
        int len = nums.length;
        if(nums==null||len==0) return -1;
        int low = nums[0];
        int high = nums[len-1];
        if(target==low) return 0;
        if(target==high) return len-1;
        if(len==1) return nums[0]==target?nums[0]:-1;
        if(low<high){
            for(int i=0;i<len-1;i++){
                if(target==nums[i]) return i;
            }
        }else{
            if(target>low){
                for(int i=1;i<len-1;i++){
                    if(target==nums[i]) return i;
                    if(nums[i]-nums[i-1]>0){
                        continue;
                    }else{
                        break;
                    }
                }
            }else if(target<high){
                for(int i=len-1;i>=0;i--){
                    if(target==nums[i]) return i;
                    if(nums[i]-nums[i-1]>0){
                        continue;
                    }else{
                        break;
                    }
                }
            }
        }
        return -1;
    }
}
```

### Java代码2

```java
class Solution {
    public int search(int[] nums, int target) {
        int len = nums.length;
        int left = 0, right = len-1;
        while(left<=right){
            int mid = (left+right)/2;
            if(nums[mid]==target)
                return mid;
            else if(nums[mid]<nums[right]){ // 如果中间数小于右边，说明右边有序
                if(nums[mid]<target && target<=nums[right])
                    left = mid+1; // 缩小左边查找区间
                else
                    right = mid-1;
            }
            else{// 如果中间数大于右边，说明左边有序
                if(nums[left]<=target && target<nums[mid]) 
                    right = mid-1; // 缩小右边查找区间
                else
                    left = mid+1;
            }
        }
        return -1;
    }
}
```

