---
title: LeetCode-448-找到所有数组中消失的数字
date: 2020/8/3 09:52:29
description: 找到所有数组中消失的数字
categories: LeetCode
tags: 
- 数组
- Java
- Easy
keywords: 数组,Java,Easy,LeetCode
---

## LeetCode-448-找到所有数组中消失的数字

给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

<!--more-->

**示例1：**

```
输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
```

### 解题思路

**方法1、哈希表：**

排序后的复杂度不符合要求，写一个需要空间要求的。利用一个O(n)空间的哈希表进行数据存储，之后进行数组的遍历，判断是否有`i`这个值在哈希表内，如果不在则就是消失的数字。

**方法2、原地修改：**

原地修改具有技巧性，不容易想到，详见https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/solution/zhao-dao-suo-you-shu-zu-zhong-xiao-shi-de-shu-zi-2/

### Java代码1

```java
class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> res = new ArrayList<>();
        if (nums == null || nums.length == 0) return res;
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            map.put(num, 1);
        }
        for (int i = 1; i <= nums.length; i++) {
            if (!map.containsKey(i)) {
                res.add(i);
            }
        }
        return res;
    }
}
```

### Java代码2

```java
    /**
     *
     * 找出 1 - n 中没有出现的数字。不能使用额外的空间，两次循环时间复杂度为 2O(n)，即为 O(n)。
     *
     * 解题思路：使用数组的下标来标记数字的出现于否，通过一遍遍历即可标记出全部已经出现的数组
     *
     * [4,3,2,7,8,2,3,1] 初始数据
     *
     * [4,3,2,-7,8,2,3,1] 第一个数据 4 出现，将数组的第四个也就是下标 3 的数据修改为负数。-7 计算时，通过绝对值处理一下即可不影响数据的计算
     * [4,3,-2,-7,8,2,3,1]
     * [4,-3,-2,-7,8,2,3,1]
     * [4,-3,-2,-7,8,2,-3,1]
     * [4,-3,-2,-7,8,2,-3,-1]
     * [4,-3,-2,-7,8,2,-3,-1]
     * [4,-3,-2,-7,8,2,-3,-1]
     * [-4,-3,-2,-7,8,2,-3,-1]
     *
     * 计算结束，数组的第五个，第六个依然为整数，证明 5,6 没有出现
     *
     * @param nums
     * @return
     */
class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> results = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            if (nums[Math.abs(nums[i]) - 1] > 0) {
                nums[Math.abs(nums[i]) - 1] *= -1;
            }
        }
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                results.add(i + 1);
            }
        }
        return results;
    }
}
```

