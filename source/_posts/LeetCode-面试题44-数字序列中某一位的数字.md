---
title: LeetCode-面试题44-数字序列中某一位的数字
date: 2020/5/6 15:15:55
description: 数字序列中某一位的数字
categories: 剑指Offer
tags:
- 大数问题
- 数组
- Java
- Python
- Medium
- 剑指Offer
keywords: 大数问题,数组,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题44-数字序列中某一位的数字 

数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

请写一个函数，求任意第n位对应的数字。

 <!--more-->

**示例1：**

```
输入：n = 3
输出：3
```

**示例2：**

```
输入：n = 11
输出：0
```

**限制：**

- `1 <= n < 2^31`

### 解题思路

**找规律：**

首先int类型只能表示2^31-1个数，所以存储的时候需要用long表示

| 数字范围          | 位数       | 数字数量         | 数位数量               |
| ----------------- | ---------- | ---------------- | ---------------------- |
| 数字范围1-9       | 位数=1     | 数字数量=9       | 数位数量=9             |
| 数字范围10-99     | 位数=2     | 数字数量=90      | 数位数量 =180          |
| 数字范围100-999   | 位数=3     | 数字数量=900     | 数位数量=2700          |
| 数字范围start-end | 位数=digit | 数字数量=9xstart | 数位数量=9xstartxdigit |

可以从上规律分析出，可以通过划分数字的范围，去确定输入n位在几位数的区间，之后再几位数的区间中找到这一位数字。

- 剑指offer的解法：

  比如数字序列的1001位，由上表可知1001位的数字范围是100-999，因为1001<2700，1001-180-9=881位，即数字范围100~999中的881位数字，由于这个范围数字是3位数，881/3=270，余1。即在100的基础上走过270个数字之后，再移动1位即是1001位数。可以从数字n开始出发，每排除一种位数的范围，就把n减去这个范围的位数，然后确定n应该在的范围

- 递推的解法：

  观察上面的表格可以看出

  位数递推公式`digit = digit+1`

  起始数字公式 `start=startx10`

  数位数量公式`count=9xstartxdigit`

  求解分为3步：

  - 确定n所在数字的位数，记为digit
  - 确定n所在的数字，记为num
  - 确定n是num中的哪一数位，返回结果

### Java代码

```java
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int out = findNthDigit(n);
        System.out.println(out);
    }

    public static int findNthDigit(int n) {
        if (n < 10) return n;
        int digits = 1; // 代表是几位数
        // 找到n位于几位数的范围中
        while (true) {
            long nums = 0;
            if (digits == 1) nums = 10;
            else nums = 9 * (long) Math.pow(10, digits - 1);
            if (n < nums * digits)
                return digitsN(n, digits);
            n -= digits * nums;
            digits++;
        }
    }

    // 在几位数中找出那一位数字
    // 比如811=270x3+1是从100开始的270个数字的中间1位
    public static int digitsN(int n, int digits) {
        long nums = begin(digits) + n / digits;
        // 求得那个数字中的第几位，如370，7是这个数字的第2位
        int indexFromRight = digits - n % digits;
        for (int i = 1; i < indexFromRight; i++) {
            nums /= 10;
        }
        return (int) nums % 10;
    }
    // 找到所属位数的初始值，如3位数的初始值是100
    public static long begin(int digits) {
        if (digits == 1)
            return 0;
        return (long) Math.pow(10, digits - 1);
    }
}
```

### Python代码

```python
class Solution:
    def findNthDigit(self, n: int) -> int:
        digit,start,count = 1,1,9
        while n>count:
            n-=count
            start*=10
            digit+=1
            count = 9*start*digit
        num = start + (n-1)//digit # 确定所求数位所在的数字
        res = str(num)[(n-1)%digit]# 确定所求数位在num的哪一数位，余数即使对应位置
        return int(res)
```