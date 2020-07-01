---
title: LeetCode-桶排序
date: 2020/7/1 09:59:15
description: 桶排序
categories: 算法
tags: 
- 排序算法
- Java
keywords: 排序,Java
---

## LeetCode-桶排序

桶排序算法回顾

 <!--more-->

**示例1**

```
输入: nums = [4,0,1,2,0,5]
输出: [0,0,1,2,4,5]
```

### 解题思路

桶排序(Bucket Sort)的原理很简单，它是将数组分到有限数量的桶子里。是一种非比较的排序方法

在了解桶排序之前，先了解**计数排序**

其中计数排序思想如下：

假设待排序的数组a中共有N个整数，并且已知数组a中数据的范围[0, MAX)。在桶排序时，创建容量为MAX的桶数组r，并将桶数组元素都初始化为0；将容量为MAX的桶数组中的每一个单元都看作一个"桶"。
在排序时，逐个遍历数组a，将数组a的值，作为"桶数组r"的下标。当a中数据被读取时，就将桶的值加1。例如，读取到数组a[3]=5，则将r[5]的值+1。

### Java代码1

```java

public class BucketSort2 {
    public static void main(String[] args) {
        int[] arr = {4, 0, 1, 2, 0, 10};
        bucketSort2(arr);
        for (Integer i : arr) {
            System.out.print(i);
        }
    }

    public static void bucketSort2(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            max = Math.max(max, arr[i]);
        }
        int[] bucket = new int[max + 1];
        for (int i = 0; i < arr.length; i++) {
            bucket[arr[i]]++;
        }
        int index = 0;
        for (int j = 0; j < bucket.length; j++) {
            while (bucket[j]-- > 0) {
                arr[index++] = j;
            }
        }
    }
}

```

桶排序可以看做是计数排序的扩展，在计数排序中，每个桶只存储相同的元素

而桶排序中每个桶存储一定范围的元素，通过映射函数，将待排序数组中的元素存储到各个对应的桶中

之后对每个桶中的元素进行排序

最后将非空桶中的元素逐个放入原序列中

桶排序需要尽量保证元素分散均匀，否则当所有数据集中在同一个桶中时，桶排序就会失效

**桶排序的稳定性取决于桶内部使用的排序算法**

### Java代码2

```java
import java.util.ArrayList;
import java.util.Collections;

public class BucketSort {
    public static void main(String[] args) {
        int[] arr = {4, 0, 1, 2, 0, 5};
        bucketSort(arr);
        for (Integer i : arr) {
            System.out.print(i);
        }
    }

    public static void bucketSort(int[] arr) {
        // 计算最大值与最小值
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        for (int i = 0; i < arr.length; i++) {
            max = Math.max(max, arr[i]);
            min = Math.min(min, arr[i]);
        }

        // 计算桶的数量
        int bucketNum = (max - min) / arr.length + 1; //保证每个桶存的区间范围平均，+1代表余数补1个桶
        ArrayList<ArrayList<Integer>> bucketArr = new ArrayList<>(bucketNum);
        for (int i = 0; i < bucketNum; i++) {
            bucketArr.add(new ArrayList<Integer>());
        }

        // 将每个元素放入桶
        for (int i = 0; i < arr.length; i++) {
            int num = (arr[i] - min) / (arr.length); //确定arr[i]存储在哪个桶
            bucketArr.get(num).add(arr[i]);
        }

        // 对每个桶进行排序
        for (int i = 0; i < bucketArr.size(); i++) {
            Collections.sort(bucketArr.get(i)); // 内层排序算法可选择
        }

        // 将桶中的元素赋值到原序列
        int index = 0;
        for (int i = 0; i < bucketArr.size(); i++) {
            for (int j = 0; j < bucketArr.get(i).size(); j++) {
                arr[index++] = bucketArr.get(i).get(j);
            }
        }
    }
}
```

### 时间复杂度

对于待排序序列大小为N，共分为M个桶，主要步骤有：

- N次循环，将每个元素装入对应的桶中
- M次循环，对每个桶中的数据进行排序(平均每个桶有N/M个元素)

一般使用较为快速的排序算法，时间复杂度为O(nlogn)，实际的桶排序过程是以链表形式插入的

整个桶排序的时间复杂度为：

`O(N)+O(M*(N/M*log(N/M)))=O(N*(log(N/M)+1))`

当N=M时，复杂度为O(N)

### 空间复杂度

`O(N+M)`