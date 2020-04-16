---
title: LeetCode-66-加一
date: 2020/3/23 19:34:39
description: 加一
categories: 数组
tags: 
- 数组
- Java
- Python
- Easy
keywords: 数组,Java,Python,Easy
---

## LeetCode-66-加一

给定一个由**整数**组成的**非空**数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储**单个**数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

<!--more-->

**示例 1:**

```
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```

**示例 2:**

```
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```

### 解题思路

方法1、先判断尾数+1是否需要进位，如果需要则将最后一位置0，其余循环遍历在加上去，如果第一位是9，那么最高位也需要进位，把最高位设置为0，数组第一个位置插入1就可以了。

方法2、从数组尾部开始遍历，设置一个初始乘数1，个位乘1、十位成10，慢慢的加上去就是最后的数字。但是这种方法在Java中最后超出了基本类型的数字范围，Python好像可以运行，这里我弃掉了。

### Java代码

```java
class Solution {
    public int[] plusOne(int[] digits) {
        int dig_len = digits.length;
        for (int i = dig_len - 1; i >= 0; i--) {
            if (digits[i] == 9) {
                digits[i] = 0;
            } else {
                digits[i] += 1;
                return digits;
            }
        }
        if (digits[0] == 0) {
            digits = new int[dig_len + 1];
            digits[0] = 1;
        }
        return digits;
    }
}
```

### Python代码

```python
class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        for i in range(len(digits)-1, -1, -1):
            if (digits[i] == 9):
                digits[i] = 0
            else:
                digits[i] += 1
                return digits
        if digits[0] == 0:
            digits.insert(0, 1)
        return digits
```

