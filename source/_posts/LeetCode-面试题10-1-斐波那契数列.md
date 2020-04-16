---
title: LeetCode-面试题10-1-斐波那契数列
date: 2020/4/8 21:51:39
description: 斐波那契数列
categories: 剑指Offer
tags: 
- 数据结构
- Java
- Python
- Easy
- 剑指Offer
keywords: 数据结构,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题10-1-斐波那契数列

写一个函数，输入 `n` ，求斐波那契（Fibonacci）数列的第 `n` 项。斐波那契数列的定义如下：

```
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```

斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

`一定记得取余!`

 <!--more-->

**示例1**

```
输入：n = 2
输出：1
```

**示例2**

```
输入：n = 5
输出：5
```

**提示：**

- `0 <= n <= 100`

### 解题思路

斐波那契数列是一个非常熟悉的问题了，基本思路有2种方法

方法1、循环累加：按照`f(0)+f(1)=f(2)`的公式，循环累加到n即可求得

方法2、递归：递归的解法看上去很简洁，但是实际运行的时候效率特别慢，还会遇到重复计算和超出系统栈的问题，不推荐使用。基本思想是按照公式`f(n)=f(n-1)+f(n-2)`递归

### Java代码

```java
class Solution {
    public int fib(int n) {
        int[] result = new int[]{0, 1};
        if (n < 2) {
            return result[n];
        }
        int sum = 0;
        int f1 = 0;
        int f2 = 1;
        for (int i = 2; i <= n; i++) {
            // 防止大数情况下超过int范围
            sum = (f1 + f2) % 1000000007;
            f1 = f2;
            f2 = sum;
        }
        return sum;
    }
}
```

### Python代码1

递归超时

```python
class Solution(object):
    def fib(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n <= 0: return 0
        if n == 1: return 1
        return (self.fib(n - 1) + self.fib(n - 2)) % 1000000007
```

### Python代码2

```python
class Solution(object):
    def fib(self, n):
        """
        :type n: int
        :rtype: int
        """
        f0, f1 = 0, 1
        for _ in range(n):
            f0, f1 = f1, f0 + f1
        return f0 % 1000000007
```

