---
title: LeetCode-67-二进制求和
date: 2020/4/14 14:25:51
description: 二进制求和
categories: 字符串
tags: 
- 字符串
- Java
- Python
- Easy
keywords: 二进制求和,Java,Python,Easy
---

## LeetCode-67-二进制求和

给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 **非空** 字符串且只包含数字 `1` 和 `0`。

<!--more-->

**示例 1:**

```
输入: a = "11", b = "1"
输出: "100"
```

**示例 2:**

```
输入: a = "1010", b = "1011"
输出: "10101"
```

**提示：**

- 每个字符串仅由字符 '0' 或 '1' 组成。

- 1 <= a.length, b.length <= 10^4
- 字符串如果不是 "0" ，就都不含前导零。

### 解题思路

不适用思路：二进制转十进制，十进制相加转二进制，容易溢出直接淘汰。

先把两个字符串长度对齐，设置一个进位符号falg=0，从两个字符串的末尾开始逐一相加，除此之外还要加上进位，如果3者之和>=2，说明此处有进位，设置falg=1，往字符串中添加数字和对2求余的结果就是当前的位置的值。最后如果有进位则添加1，翻转字符串后就是结果。

Python偷个懒哈哈哈~

### Java代码

```java
class Solution {
    public String addBinary(String a, String b) {
        int alen = a.length();
        int blen = b.length();
        while (alen > blen) {
            b = '0' + b;
            blen++;
        }
        while (alen < blen) {
            a = '0' + a;
            alen++;
        }
        StringBuilder res = new StringBuilder();
        int falg = 0;
        for (int i = alen - 1; i >= 0; i--) {
            int sum = falg + a.charAt(i) + b.charAt(i) - '0';
            if (sum>= '2') {
                res.append(sum%2);
                falg = 1;
            }
            else {
                res.append(sum%2);
                falg = 0;
            }
        }
        if (falg == 1) {
            res.append(1);
        }
        return res.reverse().toString();
    }
}
```

### Python代码

```python
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(int(a,2)+int(b,2))[2:]
```

