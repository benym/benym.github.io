---
title: LeetCode-快速排序
date: 2020/5/4 16:33:58
description: 快速排序
categories: 算法
tags: 
- 排序
- Java
- Easy
keywords: 排序,JavaEasy
---

## LeetCode-快速排序

快速排序算法回顾

 <!--more-->

**示例1**

```
输入: nums = [4,0,1,2,0,5]
输出: [0,0,1,2,4,5]
```

### 解题思路

快速排序算法回顾，左右两个指针进行操作，判断基准数和指针位置的大小关系，使得基准数左边的数字比它小，右边的数字比它大。递归进行求解

### Java代码

```java
public class Solotion {
    public static void main(String[] args) {
        int[] arr = {4, 0, 1, 2, 0, 5};
        quickSort(arr, 0, arr.length - 1);
        for (Integer i : arr) {
            System.out.print(i);
        }
    }

    public static void quickSort(int[] list, int left, int right) {
        if (left < right) {
            // 分割数组，找到分割点
            int point = partition(list, left, right);
            // 对左子数组进行快排
            quickSort(list, left, point - 1);
            // 对右子数组进行快排
            quickSort(list, point + 1, right);
        }
    }

    public static int partition(int[] list, int left, int right) {
        // 用数组的第一个元素作为基准数
        int first = list[left];
        while (left < right) {
            while (left < right && list[right] >= first) {
                right--;
            }
            swap(list, left, right);
            while (left < right && list[left] <= first) {
                left++;
            }
            swap(list, left, right);
        }
        // 返回分割点所在的位置
        return left;
    }

    public static void swap(int[] list, int left, int right) {
        int temp;
        if (list != null && list.length > 0) {
            temp = list[left];
            list[left] = list[right];
            list[right] = temp;
        }
    }
}
```

