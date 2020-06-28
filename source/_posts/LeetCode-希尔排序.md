---
title: LeetCode-希尔排序
date: 2020/6/28 17:16:04
description: 希尔排序
categories: 算法
tags: 
- 排序算法
- Java
keywords: 排序,Java
---

## LeetCode-希尔排序

希尔排序算法回顾

 <!--more-->

**示例1**

```
输入: nums = [4,0,1,2,0,5]
输出: [0,0,1,2,4,5]
```

### 解题思路

希尔排序算法回顾

希尔排序是插入排序的一种又称"缩小增量排序"

它是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止

希尔排序是不稳定的排序算法，时间复杂度O(n^1.3)-O(n^2)

### Java代码

```java
public class ShellSort {
    public static void main(String[] args) {
        int[] arr = {4, 0, 1, 2, 0, 5};
        shellSort(arr);
        for (Integer i : arr) {
            System.out.print(i);
        }
    }

    public static void shellSort(int[] arr) {
        //当前正在比较的数字
        int current;
        //初始增量
        int gap = arr.length / 2;
        //gap==1的时候，数组已经有序
        while (gap > 0) {
            for (int i = gap; i < arr.length; i++) {//内部就是一个插入排序
                current = arr[i];
                // 与current同组的前一个数字
                int preIndex = i - gap;
                // 找到同组内比current小的数字
                while (preIndex >= 0 && current < arr[preIndex]) {
                    // 向后移动同组内已排好序的，大于current的数字
                    arr[preIndex + gap] = arr[preIndex];
                    preIndex -= gap;
                }
                //插入current到相应的位置
                arr[preIndex + gap] = current;
            }
            //缩小增量
            gap /= 2;
        }
    }
}
```

