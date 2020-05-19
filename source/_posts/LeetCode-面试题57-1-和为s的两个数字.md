---
title: LeetCode-面试题57-和为s的两个数字
date: 2020/5/19 09:15:38
description: 和为s的两个数字
categories: 剑指Offer
tags:
- 数组
- Java
- Python
- Easy
- 剑指Offer
keywords: 数组,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题57-和为s的两个数字

输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

 <!--more-->

**示例1：**

```
输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
```

**示例 2:**

```
输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
```

**限制：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`

### 解题思路

查找思想：

一个头指针一个尾指针，在递增排序的数组中，

如果对应位置之和大于target，说明需要取小一点，左移尾指针让数值变小

如果对应位置之和小于target，说明需要取大一点，右移头指针，让数值变大

### Java代码

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        if(nums==null||nums.length<=0)
            return new int[0];
        int start = 0;
        int end = nums.length-1;
        while(start<end){
            if(nums[start]+nums[end]<target)
                start+=1;
            else if(nums[start]+nums[end]>target)
                end-=1;
            else
                return new int[]{nums[start],nums[end]};
        }
        return new int[0];
    }
}
```

### Python代码

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        start,end = 0,len(nums)-1
        while start<end:
            if nums[start]+nums[end]>target:
                end-=1
            elif nums[start]+nums[end]<target:
                start+=1
            else: return nums[start],nums[end]
        return []
```

