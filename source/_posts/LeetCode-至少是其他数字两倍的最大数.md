---
title: LeetCode-至少是其他数字两倍的最大数
date: 2020/3/19 19:00:16
description: 至少是其他数字两倍的最大数
categories: 数组
tags: 
- 数组
- Java
- python
- Easy
keywords: 数组,Java,python,Easy
---

## LeetCode-至少是其他数字两倍的最大数

在一个给定的数组`nums`中，总是存在一个最大元素 。

查找数组中的最大元素是否至少是数组中每个其他数字的两倍。

如果是，则返回最大元素的索引，否则返回-1。

<!--more-->

**示例 1:**

```
输入: nums = [3, 6, 1, 0]
输出: 1
解释: 6是最大的整数, 对于数组中的其他整数,
6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
```

 

**示例 2:**

```
输入: nums = [1, 2, 3, 4]
输出: -1
解释: 4没有超过3的两倍大, 所以我们返回 -1.
```

 

**提示:**

1. `nums` 的长度范围在`[1, 50]`.
2. 每个 `nums[i]` 的整数范围在 `[0, 100]`.

### 解题思路

想要找最大数至少大于所有其他数的两倍，只需要知道最大数比次大数大两倍就可以了，一次遍历用两个参数分别记录最大数和次大数，在当前索引比最大数大的时候，次大数的数值也应该变为原本的最大数，比最大数小的时候判断是否大于次大数即可

### Java代码

```java
class Solution {
    public int dominantIndex(int[] nums) {
        int max = 0;
        int sec_max = 0;
        int max_index = -1;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                sec_max = max;
                max = nums[i];
                max_index = i;
            } else if (nums[i] > sec_max) {
                sec_max = nums[i];
            }
        }
        return max >= (2 * sec_max) ? max_index : -1;
    }
}
```

### Python代码

```python
class Solution(object):
    def dominantIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max, sec_max, max_index = 0, 0, 0
        for index, i in enumerate(nums):
            if i > max:
                sec_max = max
                max = i
                max_index = index
            elif i > sec_max:
                sec_max = i
        return (max_index if (max >= 2 * sec_max) else -1)
```

