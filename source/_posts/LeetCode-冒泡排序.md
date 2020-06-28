---
title: LeetCode-冒泡排序
date: 2020/6/28 16:02:20
description: 冒泡排序
categories: 算法
tags: 
- 排序算法
- Java
keywords: 排序,Java
---

## LeetCode-冒泡排序

冒泡排序算法回顾

 <!--more-->

**示例1**

```
输入: nums = [4,0,1,2,0,5]
输出: [0,0,1,2,4,5]
```

### 解题思路

冒泡排序算法回顾，列表中两个相邻的数比较大小，如果前面的比后面的大，则交换位置

整个过程像冒泡一样，时间复杂度O(n^2)，是稳定的排序算法

### Java代码

```java
public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {4, 0, 1, 2, 0, 5};
        bubbleSort(arr, arr.length - 1);
        for (Integer i : arr) {
            System.out.print(i);
        }
    }

    public static void bubbleSort(int[] arr, int len) {
        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
}
```

