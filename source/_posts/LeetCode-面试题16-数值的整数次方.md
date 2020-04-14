---
title: LeetCode-面试题16-数值的整数次方
date: 2020/4/14 17:15:23
description: 数值的整数次方
categories: 剑指Offer
tags: 
- 位运算
- Java
- python
- Medium
- 剑指Offer
keywords: 位运算,Java,python,Medium,剑指Offer
---

## LeetCode-面试题16-数值的整数次方

实现函数double Power(double base, int exponent)，求base的exponent次方。不得使用库函数，同时不需要考虑大数问题。

 <!--more-->

**示例1**

```
输入: 2.00000, 10
输出: 1024.00000
```

**示例2**

```
输入: 2.10000, 3
输出: 9.26100
```

**示例3**

```
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
```

**说明:**

- -100.0 < *x* < 100.0
- *n* 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

### 解题思路

特殊值，x为0，n为0，没有意义返回1。n<0的时候要变换符号，但是这道题有个特殊的测试用例超出了int范围，拿一个long类型的作为中间变量存储

传统的思路就是n多大就循环多少次，累乘一起就是结果，这种方法超时了。说明需要一个更加有效率的解法

于是上了递归.....栈溢出了emmmm不知道是不是写错了，又换了一个写法。具体思路如下，对于一个次方数比如32，只需要求得16，8，4，2次方的数值即可获得32次方的数值，2次方的平方是4次方，4次方的平方是8次方，8次方的平方是16次方，16次方的平方是32次方。这是偶数的情况，奇数的情况会多乘一次x本身。

奇数有一个特点就是%2==1，也可以算成与运算&1==1，做除法/2也可以等价于移位>>1，位运算本身要更快一些。

### Java代码

```java
class Solution {
    public double myPow(double x, int n) {
        double result = 1.0;
        if (x == 0.0 && n == 0.0)
            return 1.0;
        long num = n;
        if (num < 0) {
            num = -num;
            x = 1 / x;
        }
        while (num > 0) {
            if ((num & 1) == 1) result *= x;
            x *= x;
            num >>= 1;
        }
        return result;
    }
}
```

### Python代码

```python
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if x == 0: return 0
        res = 1
        if n < 0: x, n = 1 / x, -n
        while n:
            if n & 1: res *= x
            x *= x
            n >>= 1
        return res
```

