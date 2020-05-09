---
title: LeetCode-面试题51-数组中的逆序对
date: 2020/5/9 18:33:02
description: 数组中的逆序对
categories: 剑指Offer
tags:
- 数组
- 分治
- Java
- Python
- Hard
- 剑指Offer
keywords: 数组,分治,Java,Python,Hard,剑指Offer
---

## LeetCode-面试题51-数组中的逆序对 

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

 <!--more-->

**示例1：**

```
输入: [7,5,6,4]
输出: 5
```

**说明：**

0 <= 数组长度 <= 50000

### 解题思路

方法1、暴力破解(超时)：

两个指针循环判断后面的数是不是小于前面的数，是就+1，但这样超时了。算一个没办法的解法吧

方法2、归并排序：

基本上代码就是归并排序的思想，但递归的终止条件有了变化，因为分裂区间需要判断是否有逆序数的关系

当区间的left==right的时候，说明这个区间只有一个数字了，一个数字不能组成逆序数，因此这个区间的逆序数为0

在跨区间逆序数计算时，如果左边区间比较小就需要先把左边区间的数放入temp数组中，这个时候代表左边的数比又边的数小，**但此时不是逆序的关系，不需要统计逆序对**；只有当右边区间比左边区间小的时候，需要统计逆序对个数，此时的逆序对个数为，左边区间还剩下的数的个数即`mid-left+1`

### Java代码

```java
class Solution {
    public int reversePairs(int[] nums) {
        int len = nums.length;
        if (len < 2) {
            return 0;
        }
        int[] copy = new int[len];
        for (int i = 0; i < len; i++) {
            copy[i] = nums[i];
        }
        int[] temp = new int[len];
        return MergeSort(copy, 0, len - 1, temp);

    }

    private int MergeSort(int[] nums, int left, int right, int[] temp) {
        // 当这个区间只剩一个元素时，这个子区间就不存在逆序数，返回0
        if (left == right) {
            return 0;
        }
        // int mid = (left+right)/2;
        // 防止int溢出
        int mid = left + (right - left) / 2;
        int leftPairs = MergeSort(nums, left, mid, temp);
        int rightPairs = MergeSort(nums, mid + 1, right, temp);
        // 如果分出来的数组本身有序，则返回左边+右边
        if (nums[mid] <= nums[mid + 1]) {
            return leftPairs + rightPairs;
        }
        int crossPairs = mergeAndCount(nums, left, mid, right, temp);
        return leftPairs + rightPairs + crossPairs;
    }

    private int mergeAndCount(int[] nums, int left, int mid, int right, int[] temp) {
        for (int i = left; i <=right; i++) {
            temp[i] = nums[i];
        }
        int i = left;
        int j = mid + 1;
        int count = 0;
        for (int k = left; k <= right; k++) {
            // 如果左边数组遍历完了，就直接把右边拷贝回去
            if (i == mid + 1) {
                nums[k] = temp[j];
                j++;
            } else if (j == right + 1) {
                // 如果右边数组遍历完了，就直接把左边拷贝回去
                nums[k] = temp[i];
                i++;
            } else if (temp[i] <= temp[j]) {
                nums[k] = temp[i];
                i++;
            } else {
                nums[k] = temp[j];
                j++;
                count += (mid - i + 1);
            }
        }
        return count;
    }
}
```

### Python代码

暴力破解失败.....

```python
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        i,j,count = 0,0,0
        for i in range(len(nums)):
            for j in range(1,len(nums)):
                if(nums[j]<nums[i]):
                    count+=1
        return count
```