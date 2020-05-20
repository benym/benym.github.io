---
title: LeetCode-面试题65-不用加减乘除做加法
date: 2020/5/20 20:06:48
description: 不用加减乘除做加法
categories: 剑指Offer
tags:
- 位运算
- Java
- Easy
- 剑指Offer
keywords: 位运算,Java,Easy,剑指Offer
---

## LeetCode-面试题65-不用加减乘除做加法

写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

 <!--more-->

**示例1：**

```
输入: a = 1, b = 1
输出: 2
```

**限制：**

- `a`, `b` 均可能是负数或 0
- 结果不会溢出 32 位整数

### 解题思路

不能使用加减乘除，就只能用位运算了

按照3步走：

- 不算进位相加
- 计算进位
- 两数相加

其中最后一步可以整合到第一步，不算进位相加符合异或逻辑，进位需要两个位置都为1，其余为0，符合与运算。之后左移一位就是进位位置。当进位不为0时，一直计算直到进位为0得到最后数值

### Java代码

```java
class Solution {
    public int add(int a, int b) {
        int sum = 0;
        int carry = 0;
        do{
            sum = a^b; // 两数相加,且不考虑进位
            carry = (a&b)<<1; //得到进位
            a = sum;
            b = carry;
        }while(b!=0);
        return a;
    }
}
```

