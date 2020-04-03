---
title: LeetCode-面试题05-替换空格
date: 2020/4/3 16:12:56
description: 替换空格
categories: 剑指Offer
tags: 
- 字符串
- 剑指Offer
- Java
- python
- Easy
keywords: 字符串,Java,python,Easy,剑指Offer
---

## LeetCode-面试题05-替换空格

请实现一个函数，把字符串 `s` 中的每个空格替换成"%20"。

 <!--more-->

**示例:**

```
输入：s = "We are happy."
输出："We%20are%20happy."
```

### 解题思路

方法1、遍历的时候直接用StringBuilder添加字符，遍历到空格的时候就添加%20，最后把char转化为String类型就可以了

方法2、利用python特点，一行解决= =

### Java代码

```java
class Solution {
    public String replaceSpace(String s) {
        StringBuilder result = new StringBuilder();
        for (char i : s.toCharArray()) {
            if (i == ' ') {
                result.append("%20");
            } else
                result.append(i);
        }
        return result.toString();
    }
}
```

### Python代码

```python
class Solution(object):
    def replaceSpace(self, s):
        """
        :type s: str
        :rtype: str
        """
        return ''.join(('%20' if c == ' ' else c for c in s))
```

