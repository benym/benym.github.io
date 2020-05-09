---
title: LeetCode-归并排序
date: 2020/5/9 18:16:01
description: 归并排序
categories: 算法
tags: 
- 排序算法
- Java
- Easy
keywords: 排序,JavaEasy
---

## LeetCode-归并排序

归并排序算法回顾

 <!--more-->

**示例1**

```
输入: nums = [4,0,1,2,0,5]
输出: [0,0,1,2,4,5]
```

### 解题思路

归并排序算法采用分治的思想

把原本的数组不断进行二分，直到分为数组元素是单个的时候，之后开始排序合并

### Java代码

```java
public class Solution{
    public static void main(String[] args) {
        int[] arr = {9, 8, 7, 6, 5, 4, 3, 2, 1};
        // 创建临时数组避免重复开辟空间
        int[] temp = new int[arr.length];
        MergerSort(arr, 0, arr.length - 1, temp);
        for(int i : arr){
            System.out.print(i);
        }
    }

    private static void MergerSort(int[] arr, int left, int right, int[] temp) {
        if (left < right) {
            int mid = (left + right) / 2;
            MergerSort(arr, left, mid, temp); // 左边归并排序，使得左子序列有序
            MergerSort(arr, mid + 1, right, temp); // 右边归并排序，使得右子序列有序
            Merge(arr, left, mid, right, temp); // 将两个有序子数组合并
        }
    }

    private static void Merge(int[] arr, int left, int mid, int right, int[] temp) {
        int i = left; // 左序列指针
        int j = mid + 1; // 右序列指针
        int t = 0; // 临时数组指针
        while (i <= mid && j <= right) {
            if (arr[i] < arr[j]) {
                temp[t++] = arr[i++];
            } else {
                temp[t++] = arr[j++];
            }
        }
        // 将左边剩余元素填充进temp中
        while (i <= mid) {
            temp[t++] = arr[i++];
        }
        // 将右边剩余元素填充进temp中
        while (j <= right) {
            temp[t++] = arr[j++];
        }
        t = 0;
        // 拷贝回原数组
        while (left <= right) {
            arr[left++] = temp[t++];
        }
    }
}
```

