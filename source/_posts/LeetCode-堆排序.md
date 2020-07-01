---
title: LeetCode-堆排序
date: 2020/7/1 15:23:25
description: 堆排序
categories: 算法
tags: 
- 排序算法
- Java
keywords: 排序,Java
---

## LeetCode-堆排序

堆排序算法回顾

 <!--more-->

**示例1**

```
输入: nums = [1, 4, 3, 100, 323, 53, 13, 559230, 123, 20, 43, 12]
输出: [1,3,4,12,13,20,43,53,100,123,323,559230]
```

### 解题思路

一个不错的堆排序讲解，[出处在这](https://www.cnblogs.com/chengxiao/p/6129630.html)

了解堆排序首先需要了解堆

**堆**是一种具有如下性质的完全二叉树：**每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆；或者每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆**

大顶堆满足：arr[i]>=arr[2i+1]&&arr[i]>=arr[2i+2]

小顶堆满足：arr[i]<=arr[2i+1]&&arr[i]<=arr[2i+2]

**堆排序**的基本思想是： 

- **将待排序序列构造成一个大顶堆/小顶堆，此时，整个序列的最大值就是堆顶的根节点。**
- **将其与末尾元素进行交换，此时末尾就为最大/小值。**
- **然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。**
- **如此反复执行，便能得到一个有序序列了**

堆排序是一种选择排序，整体主要由构建初始堆+交换堆顶元素和末尾元素并重建堆两部分组成。

其中构建初始堆的复杂度为O(n)，在交换并重建堆的过程中，需交换n-1次，而重建堆的过程中，根据完全二叉树的性质

[log2(n-1),log2(n-2),....,1]逐步递减，所以**时间复杂度近似为O(nlogn)**，堆排序是一种不稳定的排序算法

### Java代码

```java
public class HeapSort {
    public static void main(String[] args) {
        int[] array = {1, 4, 3, 100, 323, 53, 13, 559230, 123, 20, 43, 12};
        sort(array);
        for (Integer i : array) {
            System.out.print(i + " ");
        }
    }

    public static void sort(int[] arr) {
        // 构建大顶堆
        for (int i = arr.length / 2 - 1; i >= 0; i--) {
            //从第一个非叶子节点从下至上，从右至左调整结构
            adjustHeap(arr, i, arr.length);
        }
        // 调整堆结构+交换堆顶元素与末尾元素
        for (int j = arr.length - 1; j > 0; j--) {
            swap(arr, 0, j);// 将堆顶元素和末尾元素进行交换
            adjustHeap(arr, 0, j);// 重新对堆进行调整
        }
    }

    // 调整大顶堆(仅是调整过程，建立在大顶堆已构建的基础上)
    private static void adjustHeap(int[] arr, int i, int length) {
        int temp = arr[i];// 先取出当前元素i
        for (int k = i * 2 + 1; k < length; k = k * 2 + 1) {// 从i节点的左子节点开始，也就是2i+1处开始
            if (k + 1 < length && arr[k] < arr[k + 1]) {// 如果左子节点小于右子节点，k指向右子节点
                k++;
            }
            if (arr[k] > temp) {// 如果子节点大于父节点，将子节点值赋给父节点(不用进行交换)
                arr[i] = arr[k];
                i = k;
            } else {
                break;
            }
        }
        arr[i] = temp;// 将temp值放到最终的位置
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```



