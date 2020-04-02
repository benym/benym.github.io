---
title: LeetCode-面试题03-数组中重复的数字
date: 2020/4/2 22:08:11
description: 数组中重复的数字
categories: 剑指Offer
tags: 
- 数组
- 剑指Offer
- Java
- python
- Easy
keywords: 数组,Java,python,Easy,剑指Offer
---

## LeetCode-面试题03-数组中重复的数字

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

<!--more-->

**示例 1：**

```
输入：

[2, 3, 1, 0, 2, 5, 3]

输出：2 或 3 

限制：

2 <= n <= 100000
```

### 解题思路

方法1、利用一个hash表，从头到尾扫描每个数字，不在表内的数字会成功添加，在表内的数字添加的时候会告诉已经存在，这个已经存在的数字就是要返回的数字了

方法2、这个思想很巧妙，也是剑指offer上的最优解，数组的数字都在`0~n-1`的范围内。如果这个数组中没有重复的数字，那么当数组排序之后数字`i`将会出现在下标为i的位置。从头到尾依次扫描这个数组中的数字，当扫描到下标为`i`的数字时，首先比较这个数字(用`m`表示)是不是等于`i`。如果是，则接着扫描下一个数字；如果不是，则再拿它和第`m`个数字进行比较。如果它和第`m`个数字相等，就找到了第一个重复的数字(该数字在下标为`i`和`m`的位置都出现了)；如果它和第`m`个数字不相等，就把第`i`个数字和第`m`个数字交换，把`m`放到属于它的位置。接下来再重复这个比较、交换的过程，直到发现一个重复的数字。

### Java代码

```java
class Solution {
    public int findRepeatNumber(int[] nums) {
        Set<Integer> s = new HashSet<>();
        int result = -1;
        for (int i : nums) {
            if (!s.add(i)) {
                result = i;
                break;
            }
        }
        return result;
    }
}
```

### Python代码

```python
class Solution(object):
    def findRepeatNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        for index, i in enumerate(nums):
            while (index != i):
                if (i == nums[index]):
                    return i
                temp = i
                i = nums[i]
                nums[i] = temp
```

