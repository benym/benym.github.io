---
title: LeetCode-724寻找数组的中心索引
date: 2020/3/19 16:33:43
description: 寻找数组的中心索引
categories: 数组
tags: 
- 数组
- Java
- python
- Easy
keywords: 数组,Java,python,Easy
---
## LeetCode-724寻找数组的中心索引
日常学习任务实在是太多，所以很久没有更新博客了，今天开始刷题，从最简单的开始吧！
给定一个整数类型的数组 `nums`，请编写一个能够返回数组**“中心索引”**的方法。

我们是这样定义数组**中心索引**的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

<!--more-->

**示例 1:**

```
输入: 
nums = [1, 7, 3, 6, 5, 6]
输出: 3
解释: 
索引3 (nums[3] = 6) 的左侧数之和(1 + 7 + 3 = 11)，与右侧数之和(5 + 6 = 11)相等。
同时, 3 也是第一个符合要求的中心索引。
```

**示例 2:**

```
输入: 
nums = [1, 2, 3]
输出: -1
解释: 
数组中不存在满足此条件的中心索引。
```

**说明:**
<div class="note info"><p>
nums的长度范围为 [0, 10000]。
任何一个 nums[i]将会是一个范围在 [-1000, 1000]的整数。
</p></div>
###解题思路

计算第i个位置左右两边的和比较一下就行了，右边=总和-当前位置值-当前位置左边的和

### Java代码

```java
public class SearchIndex {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String input = in.nextLine().toString();
        String[] s = input.split(" ");
        int[] array = new int[s.length];
        for (int i = 0; i < array.length; i++) {
            array[i] = Integer.parseInt(s[i]);
        }
        int Output = pivotIndex(array);
        System.out.println(Output);
    }

    public static int pivotIndex(int[] nums) {
        int Left = 0;
        int Right = 0;
        int sum = 0;
        for (int n : nums) {
            sum += n;
        }
        for (int i = 0; i < nums.length; i++) {
            if (i == 0) {
                Left = 0;
            } else {
                Left += nums[i - 1];
            }
            Right = sum - Left - nums[i];
            if (Left == Right) {
                return i;
            }
        }
        return -1;
    }
}
```
### Python代码

```python
def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        Left, Right, sum = 0, 0, 0
        for i in nums:
            sum += i
        for index, j in enumerate(nums):
            if (index == 0):
                Left = 0
            else:
                Left += nums[index - 1]
            Right = sum - Left - nums[index]
            if (Left == Right):
                return index
        return -1
```

