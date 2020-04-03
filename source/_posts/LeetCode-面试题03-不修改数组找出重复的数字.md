---
title: LeetCode-面试题03-不修改数组找出重复的数字
date: 2020/4/3 11:18:56
description: 不修改数组找出重复的数字
categories: 剑指Offer
tags: 
- 数组
- 剑指Offer
- Java
- python
- Easy
keywords: 数组,Java,python,Easy,剑指Offer
---

## LeetCode-面试题03-不修改数组找出重复的数字

在一个长度为n+1的数组里的所有数字都在1~n的范围内，所以数组中至少有一个数字是重复的。请找出数组中任意一个重复的数字，但不能修改输入的数组。

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

这个题和上一个题类似，但是不能修改输入的数组，可以沿用上一个题的方法，创建一个数组来复制原数组。代价是需要O(n)的辅助空间。这里主要尝试避免使用O(n)辅助空间的解法。

方法1、利用一个hash表，从头到尾扫描每个数字，不在表内的数字会成功添加，在表内的数字添加的时候会告诉已经存在，这个已经存在的数字就是要返回的数字了

方法2、假如没有重复的数组，那么在从1~n的范围里只有n个数字。由于数组里包含超过n个数字，所以一定包含了重复的数字。把从1~n的数字从中间的数字m分为两部分，前面一半为1~m，后面一半为m+1~n，如果1~m的数字的数目超过m，那么这一半的区间里一定包含重复的数字；否则，另一半m+1~n的区间里一定包含重复的数字。我们可以继续把包含重复数字的区间一分为二，直到找到一个重复的数字。这个过程和二分查找算法类似，只是多了一步统计区间里数字的数目。

### Java代码

```java
class Solution {
    public static int findRepeatNumber(int[] nums) {
        if (nums == null || nums.length == 0) {
            return -1;
        }
        int start = 1;
        int end = nums.length - 1;
        // 先划区域，在统计次数
        while (end >= start) {
            int middle = ((end - start) >> 1) + start;
            int count = countRange(nums, nums.length, start, middle);
            if (end == start) {
                if (count > 1)
                    return start;
                else
                    break;
            }
            if (count > (middle - start + 1))
                end = middle;
            else
                start = middle + 1;
        }
        return -1;
    }

    public static int countRange(int[] nums, int length, int start, int end) {
        if (nums == null) {
            return 0;
        }
        int count = 0;
        for (int i : nums) {
            if (i >= start && i <= end)
                ++count;
        }
        return count;
    }
}
```
