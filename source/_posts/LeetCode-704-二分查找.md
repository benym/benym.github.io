---
title: LeetCode-704-二分查找
date: 2020/4/10 15:44:53
description: 二分查找
categories: 算法
tags: 
- 查找
- Java
- Python
- Easy
keywords: 查找,Java,Python,Easy
---

## LeetCode-704-二分查找

给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

 <!--more-->

**示例1**

```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

**示例2**

```
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

**提示：**

- 你可以假设 `nums` 中的所有元素是不重复的。
- `n` 将在 `[1, 10000]`之间。
- `nums` 的每个元素都将在 `[-9999, 9999]`之间。`

### 解题思路

二分查找是一个基本算法，简单来说就是头尾2个指针，看中间数比查找数大还是小，大的话说明要在右边范围找，小的话就要在左边范围找。

**注意：**防止直接相加int溢出，取中点mid时，可采用`start+(end-start)/2`的方式

### Java代码

```java
class Solution {
    public int search(int[] nums, int target) {
        if (nums.length == 0) {
            return -1;
        }
        int start = 0;
        int end = nums.length - 1;
        while (start <= end) {
            // 防止int溢出
            // int mid = start + (end - start) / 2;
            int middle = (start + end) / 2;
            if (target == nums[middle])
                return middle;
            else if (target < nums[middle])
                end = middle - 1;
            else
                start = middle + 1;
        }
        return -1;
    }
}
```

### Python代码

```python
class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if (len(nums)==0):
            return -1
        start,end = 0,len(nums)-1
        while(start<=end):
            middle = (start+end)/2
            if target==nums[middle]:
                return middle
            elif target<nums[middle]:
                end = middle-1
            else:
                start = middle+1
        return -1
```

