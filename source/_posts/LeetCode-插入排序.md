---
title: LeetCode-插入排序
date: 2020/6/28 16:46:47
description: 插入排序
categories: 算法
tags: 
- 排序算法
- Java
keywords: 排序,Java
---

## LeetCode-插入排序

插入排序算法回顾

 <!--more-->

**示例1**

```
输入: nums = [4,0,1,2,0,5]
输出: [0,0,1,2,4,5]
```

### 解题思路

插入排序算法回顾

插入排序是一种简单直观的排序算法，其基本原理是通过构建有序序列，对未排序的数组，需要在已排序的序列中从后向前进行扫描，找到相应位置并插入。在从后向前扫描的过程中，需要反复把已排序的元素向后移动，为新元素提供插入的空间。

插入排序是稳定的排序算法，时间复杂度O(n^(1-2))

### Java代码

```java
public class InsertSort {
    public static void main(String[] args) {
        int[] arr = {4, 0, 1, 2, 0, 5};
        insertSort(arr, arr.length - 1);
        for (Integer i : arr) {
            System.out.print(i);
        }
    }

    public static void insertSort(int arr[], int len) {
        for (int i = 1; i < len; i++) {
            int temp = arr[i];
            int left = i - 1;
            while (left >= 0 && arr[left] > temp) {
                arr[left + 1] = arr[left];
                left--;
            }
            arr[left + 1] = temp;
        }
    }
}
```

