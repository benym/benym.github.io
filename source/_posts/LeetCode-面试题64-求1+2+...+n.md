---
title: LeetCode-面试题64-求1+2+...+n
date: 2020/5/20 18:20:48
description: 求1+2+...+n
categories: 剑指Offer
tags:
- Java
- Python
- Medium
- 剑指Offer
keywords: Java,Python,Medium,剑指Offer
---

## LeetCode-面试题64-求1+2+...+n

求 `1+2+...+n` ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

 <!--more-->

**示例1：**

```
输入: n = 3
输出: 6
```

**示例2:**

```
输入: n = 9
输出: 45
```

**限制：**

- `1 <= n <= 10000`

### 解题思路

很多运算不能够使用，这道题主要是考察的，能不能多角度的解决问题

不难想到for循环的方式可以有递归的实现，从n走到1就可以了

然而Python不受本题限制....一行搞定

### Java代码

```java
class Solution {
    public int sumNums(int n) {
        if(n==1) return 1;
        return n+sumNums(n-1);
    }
}
```

### Python代码

```python
class Solution:
    def sumNums(self, n: int) -> int:
        return sum(range(1,n+1));
```

