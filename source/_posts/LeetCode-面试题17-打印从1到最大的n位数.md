---
title: LeetCode-面试题17-打印从1到最大的n位数
date: 2020/4/14 18:45:52
description: 打印从1到最大的n位数
categories: 剑指Offer
tags: 
- 大数问题
- Java
- python
- Medium
- 剑指Offer
keywords: 大数问题,Java,python,Medium,剑指Offer
---

## LeetCode-面试题17-打印从1到最大的n位数

输入数字 `n`，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

 <!--more-->

**示例1**

```
输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
```

**说明:**

- 用返回一个整数列表来代替打印
- n 为正整数

### 解题思路

这题本身是个大数问题，先写个不是大数的偷懒版本

### Java代码1

```java
class Solution {
    public int[] printNumbers(int n) {
        int sum = (int)Math.pow(10,n);
        int[] num = new int[sum-1];
        for(int i=0;i<sum-1;i++){
            num[i]=i+1;
        }
        return num;
    }
}
```

### Java代码2

```python

```

