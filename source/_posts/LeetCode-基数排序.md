---
title: LeetCode-基数排序
date: 2020/7/1 15:23:25
description: 基数排序
categories: 算法
tags: 
- 排序算法
- Java
keywords: 排序,Java
---

## LeetCode-基数排序

基数排序算法回顾

 <!--more-->

**示例1**

```
输入: nums = [1, 4, 3, 100, 323, 53, 13, 559230, 123, 20, 43, 12]
输出: [1,3,4,12,13,20,43,53,100,123,323,559230]
```

### 解题思路

​        基数排序也是非比较的排序算法，对每一位进行排序，从最低位开始排序，复杂度为O(kn),为数组长度，k为数组中的数的最大的位数；

​        基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。基数排序基于分别排序，分别收集，所以是稳定的。

​        时间复杂度：设待排序列为n个记录，d个关键码，关键码的取值范围为radix，则进行链式基数排序的时间复杂度为O(d(n+radix))，其中，一趟分配时间复杂度为O(n)，一趟收集时间复杂度为O(radix)，共进行d趟分配和收集。

​        基数排序是稳定的排序算法

```java
import java.util.*;

public class RadixSort {
    public static void main(String[] args) {
        int[] array = {1, 4, 3, 100, 323, 53, 13, 559230, 123, 20, 43, 12};
        sort(array);
        for (Integer i : array) {
            System.out.print(i+" ");
        }
    }

    // 基数排序，注意这里只能排序正整数
    public static void sort(int[] array) {
        // 找到数组中最大数max，并计算它的位数maxDig
        int max = array[0];
        for (int maxTemp : array) {
            max = Math.max(max, maxTemp);
        }
        int maxDig = String.valueOf(max).length();
        // 创建从0-9的基数数据集
        Map<Integer, List<Integer>> map = new HashMap<>();
        for (int i = 0; i < 10; i++) {
            map.put(i, new ArrayList<Integer>());
        }
        // 从低位baseDig开始到高位maxDig进行指定位的基数排序
        int baseDig = 1;
        while (baseDig <= maxDig) {
            // 第一阶段，遍历目标数组，将数组元素放入指定的基数数据集中
            for (int temp : array) {
                String strVal = String.valueOf(temp);
                // 获取元素baseDig位的数字，放入相对的基数数据集中
                // 如果不存在，将该元素放入0基数数据集中
                Integer key = null;
                if (strVal.length() < baseDig) {
                    key = 0;
                } else {
                    // 获取指定位上的字符，并转化成目标基数key
                    char bitNum = strVal.charAt(strVal.length() - baseDig);
                    key = Integer.valueOf(String.valueOf(bitNum));
                }
                map.get(key).add(temp);
            }
            int j = 0;
            // 第二阶段，将0-9基数数据集中的数据，放回到数组中
            // 表示当前baseDig位的基数排序完成
            for (int i = 0; i < 10; i++) {
                Iterator<Integer> it = map.get(i).iterator();
                while (it.hasNext()) {
                    array[j++] = it.next();
                }
                map.get(i).clear();
            }
            baseDig++;
        }
    }
}
```

