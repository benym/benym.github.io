---
title: LeetCode-16-最接近的三数之和
date: 2020/9/8 10:20:20
description: 最接近的三数之和
categories: LeetCode
tags: 
- 数组
- Java
- Medium
- LeetCode
keywords: 数组,Java,Medium,LeetCode
---

## LeetCode-16-最接近的三数之和

给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

 <!--more-->

**示例 1:**

```
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
```

**提示：**

- `3 <= nums.length <= 10^3`
- `-10^3 <= nums[i] <= 10^3`
- `-10^4 <= target <= 10^4`

### 解题思路

**方法1、回溯：**

回溯穷举所有可能的排列，如果当前深度达到3，且当前sum值更接近target就更新答案res

从deep=0，sum=0，index=0开始遍历

回溯前深度+1，sum加上当前的nums[i]

回溯之后深度-1，sum减去上一轮加入的值

**方法2、排序+双指针：**

详见https://leetcode-cn.com/problems/3sum-closest/solution/zui-jie-jin-de-san-shu-zhi-he-by-leetcode-solution/

### Java代码1

```java
class Solution {
    int res = 0;
    public int threeSumClosest(int[] nums, int target) {
        res = nums[0] + nums[1] + nums[2];
        backtrace(nums, target, 0, 0, 0);
        return res;
    }

    private void backtrace(int[] nums, int target, int deep, int sum,  int index) {
        if (deep == 3) {
            if (Math.abs(target - res) > Math.abs(sum - target)) {
                res = sum;
            }
            return;
        }
        for (int i = index; i < nums.length; i++) {
            sum += nums[i];
            deep++;
            backtrace(nums, target, deep, sum,  i + 1);
            sum -= nums[i];
            deep--;
        }
    }
}
```

### Java代码2

```java
class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int min = Integer.MAX_VALUE;
        int ans = 0;
        int len = nums.length;
        for (int i = 0; i < len; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int start = i + 1;
            int end = len - 1;
            while (start < end) {
                int value = nums[i] + nums[start] + nums[end];
                if (value == target) {
                    return value;
                }
                if (Math.abs(value - target) < min) {
                    min = Math.abs(value - target);
                    ans = value;
                }
                if (value > target) {
                    end--;
                } else {
                    start++;
                }
            }
        }
        return ans;
    }
}
```

