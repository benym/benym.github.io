---
title: LeetCode-34-在排序数组中查找元素的第一个和最后一个位置
date: 2020/7/25 15:33:38
description: 在排序数组中查找元素的第一个和最后一个位置
categories: LeetCode
tags: 
- 数组
- Java
- Medium
keywords: 数组,Java,Medium,LeetCode
---

## LeetCode-34-在排序数组中查找元素的第一个和最后一个位置

给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

<!--more-->

**示例1：**

```
输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
```

**示例2：**

```
输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]
```

### 解题思路

**方法1、双指针暴力法(low)：**

特例判断：

- 当数组为空或数组长度为0时，直接返回[-1,1]
- 当数组长度为1时，判断第一个数字是否等于target，等于则返回[0,0]，否则返回[-1,-1]

初始化头尾指针

移动头指针，直到找到第一个等于target的位置，如果找完了都没有找到，返回[-1,-1]

移动尾指针，直到找到最后一个等于target的位置，如果找完了都没有找到，返回[-1,-1]

当头尾指针相同时，说明只有一个target，返回当前位置[start,start]或[end,end]

反之，返回头尾指针区间[start,end]

**方法2、二分查找(fast)：**

通过判断mid位置的数值，决定左右边界的移动

当`nums[mid]<target`时，说明target在mid右方，`start = mid+1`

当`nums[mid]>target`时，说明target在mid左方，`end = mid-1`

当`nums[mid]==target`时，说明左右边界有一个地方等于target，这时候只需要查找另外一个边界等于target的即可，可以进行循环移动查找，最后返回[start,end]即可

如果没有找到，返回[-1,-1]

**方法3、递归分治(low)：**

通过二分查找切分数组寻找左右子数组的target位置，迭代到只有一个，判断是否是目标值，返回一个都是当前index的数组，然后进行合并即可

**方法4、二次二分找左右边界(fast)：**

第一次二分找左边界，第二次二分找右边界，找左边界时向右逼近，找右边界时向左逼近

### Java代码1

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int len = nums.length;
        if(nums==null||len==0) return new int[]{-1,-1};
        if(len==1) return nums[0]==target? new int[]{0,0}: new int[]{-1,-1};
        int start = 0;
        int end = len-1;
        while(nums[start]!=target){
            if((start+1)>len-1){
                return new int[]{-1,-1};
            }
            start++;
        }
        while(nums[end]!=target){
            if((end-1)<0){
                return new int[]{-1,-1};
            }
            end--;
        }
        if(start==end) return new int[]{start,start};
        return new int[]{start,end};
    }
}
```

### Java代码2

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int len = nums.length;
        if(nums==null||len==0) return new int[]{-1,-1};
        if(len==1) return nums[0]==target? new int[]{0,0}: new int[]{-1,-1};
        int start = 0;
        int end = len-1;
        while(start<=end){
            int mid = start+(end-start)/2;
            if(nums[mid]<target){
                start = mid+1;
            }else if(nums[mid]>target){
                end = mid-1;
            }else{
                while(nums[start]!=target) start++;
                while(nums[end]!=target) end--;
                return new int[]{start,end};
            }
        }
        return new int[]{-1,-1};
    }
}
```

### Java代码3

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        if(nums.length == 0) return new int[]{-1,-1};
        return subSearch(nums,target,0,nums.length-1);
    }

    public int[] subSearch(int[] nums,int target,int left, int right){
        if(nums[left]>target || nums[right]<target) return new int[]{-1,-1};
        if(left==right){
            if(nums[left] == target) return new int[]{left,left};
            else return new int[]{-1,-1};
        }
        int mid = (left+right)/2;
        int[] leftRe = subSearch(nums,target,left,mid);
        int[] rightRe = subSearch(nums,target,mid+1,right);
        if(leftRe[0] >=0 && rightRe[0] >=0) return new int[]{leftRe[0],rightRe[1]};
        if(leftRe[0] >=0) return leftRe;
        else return rightRe;
    }
}
```

### Java代码4

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] result = new int[2];
        result[0] = binarySearchLeftBound(nums, target);
        result[1] = binarySearchRightBound(nums, target);
        return result;
        
    }
    public int binarySearchLeftBound(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = l + ((r - l) >> 1);
            if (nums[mid] < target)  {
                l = mid + 1;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else if (nums[mid] == target) {
                r = mid - 1;
            }
        }        
        if (l >= nums.length || nums[l] != target) return -1;
        return l;
    }
    public int binarySearchRightBound(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = l + ((r - l) >> 1);
            if (nums[mid] < target)  {
                l = mid + 1;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else if (nums[mid] == target) {
                l = mid + 1;
            }
        }
        if (r < 0 || nums[r] != target) return -1;
        return r;
    }
}
```

