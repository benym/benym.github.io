---
title: LeetCode-面试题11-旋转数组的最小数字
date: 2020/4/10 16:53:08
description: 旋转数组的最小数字
categories: 剑指Offer
tags: 
- 数组
- Java
- python
- Easy
- 剑指Offer
keywords: 数组,Java,python,Easy,剑指Offer
---

## LeetCode-面试题11-旋转数组的最小数字

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。 

 <!--more-->

**示例1**

```
输入：[3,4,5,1,2]
输出：1
```

**示例2**

```
输入：[2,2,2,0,1]
输出：0
```

### 解题思路

方法1、类似于二分查找的方法：

旋转之后的数组实际上可以划分为两个排序的子数组，最小的元素刚好是这两个子数组的分界线。知道这个之后就沿用二分查找的方法，逐渐缩小范围，结合数组的递增规律，当两个指针差值为1的时候，end位置就是最小数。

其次是两个特例：

- 当不需要把元素移动到后面的时候，数组为排序好的数组且是递增的，所以第一个位置就是最小的。
- 当前中后3个位置都是相等的时候，这时用二分查找就行不通了，转化为顺序查找

方法2、循环二分(摘自Leetcode大佬题解)：

分析见[原文](https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/solution/mian-shi-ti-11-xuan-zhuan-shu-zu-de-zui-xiao-shu-3/)，j = j-1厉害了！

### Java代码

```java
class Solution {
    public int minArray(int[] numbers) {
        if (numbers.length == 0) {
            return -1;
        }
        int start = 0;
        int end = numbers.length - 1;
        int middle = start; // 考虑前面0个元素搬到后面，则数组为排序数组，第一个即最小
        while (numbers[start] >= numbers[end]) {
            if (end - start == 1) {
                middle = end;
                break;
            }
            middle = (start + end) / 2;
            // 当前中后相等时，这时候只能顺序搜索
            if (numbers[start] == numbers[end] && numbers[start] == numbers[middle]) {
                return search(numbers, start, end);
            }
            if (numbers[middle] >= numbers[start]) {
                start = middle;
            } else if (numbers[middle] <= numbers[end]) {
                end = middle;
            }
        }
        return numbers[middle];
    }
    public int search(int[] numbers, int start, int end) {
        int result = numbers[start];
        for (int i = start + 1; i <= end; i++) {
            if (result > numbers[i]) {
                result = numbers[i];
            }
        }
        return result;
    }
}
```

### Python代码

```python
class Solution(object):
    def minArray(self, numbers):
        """
        :type numbers: List[int]
        :rtype: int
        """
        i, j = 0, len(numbers) - 1
        while i < j:
            m = (i + j) // 2
            if numbers[m] > numbers[j]: i = m + 1
            elif numbers[m] < numbers[j]: j = m
            else: j -= 1
        return numbers[i]
```

