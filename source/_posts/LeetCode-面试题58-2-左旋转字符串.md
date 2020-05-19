---
title: LeetCode-面试题58-2-左旋转字符串
date: 2020/5/19 14:47:01
description: 左旋转字符串
categories: 剑指Offer
tags:
- 字符串
- Java
- Python
- Easy
- 剑指Offer
keywords: 字符串,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题58-2-左旋转字符串

字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

 <!--more-->

**示例1：**

```
输入: s = "abcdefg", k = 2
输出: "cdefgab"
```

**示例 2:**

```
输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
```

**限制：**

- `1 <= k < s.length <= 10000`

### 解题思路

线性遍历：

n已经给出来了，第一部分字符串就是从n到字符末尾，第二部分字符串是从字符开始到n，用StringBuilder添加进去最后转化为String即可

切片：

s[n:]+s[:n]搞定

### Java代码

```java
class Solution {
    public String reverseLeftWords(String s, int n) {
        if(s==null||s.length()<=0) return "";
        StringBuilder res = new StringBuilder();
        if(s!=null){
            for(int i=n;i<s.length();i++){
                res.append(s.charAt(i));
            }
            for(int j=0;j<n;j++){
                res.append(s.charAt(j));
            }
        }
        return res.toString();
    }
}
```

### Python代码

```python
class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        if not s: return ""
        if s:
            return s[n:]+s[:n]
```

