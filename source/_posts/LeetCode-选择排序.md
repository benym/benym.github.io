---
title: LeetCode-选择排序
date: 2020/6/28 16:16:47
description: 选择排序
categories: 算法
tags: 
- 排序算法
- Java
keywords: 排序,Java
---

## LeetCode-选择排序

选择排序算法回顾

 <!--more-->

**示例1**

```
输入: nums = [4,0,1,2,0,5]
输出: [0,0,1,2,4,5]
```

### 解题思路

选择排序算法回顾

选择排序是指每一趟从待排序的数据元素中选出最大（或最小）的一个元素，顺序放在已排好序的数列的最后，直到全部待排序的数据元素排完。时间复杂度O(n^2)，是不稳定的排序算法。

### Java代码

```java
public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = {4, 0, 1, 2, 0, 5};
        selectionSort(arr);
        for (Integer i : arr) {
            System.out.print(i);
        }
    }

    public static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int min = i;
            for (int j = min + 1; j < arr.length; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            if (min != i) {
                int temp = arr[min];
                arr[min] = arr[i];
                arr[i] = temp;
            }
        }
    }
}

```

