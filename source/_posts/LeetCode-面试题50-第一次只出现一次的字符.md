---
title: LeetCode-面试题50-第一次只出现一次的字符
date: 2020/5/8 19:23:20
description: 第一次只出现一次的字符
categories: 剑指Offer
tags:
- Python
- Java
- Easy
- 剑指Offer
keywords: Java,Python,Easy,剑指Offer
---

## LeetCode-面试题50-第一次只出现一次的字符 

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。

 <!--more-->

**示例1：**

```
s = "abaccdeff"
返回 "b"

s = "" 
返回 " "
```

**说明：**

0 <= s 的长度 <= 50000

### 解题思路

哈希表：

每出现一次字符就把字符放入hash表中，如果有重复的就把对应位置+1

遍历的时候由于hash表重新put改变了原本的先后顺序(Java的hashmap不能原地改变，Python的dict可以原地改变)，所以需要按照字符顺序遍历，当第1次value为1的时候，就返回该字符

### Java代码

```java
class Solution {
    public char firstUniqChar(String s) {
        if (s == null || s.length() == 0)
            return ' ';
        HashMap<Character, Integer> maps = new HashMap<>();
        char[] chars = s.toCharArray();
        for (char c : chars) {
            if (!maps.containsKey(c)) {
                maps.put(c, 1);
            } else {
                maps.put(c, maps.get(c) + 1);
            }
        }

        for (char c : chars) {
            if (maps.get(c) == 1) {
                return c;
            }
        }
        return ' ';
    }
}
```

### Python代码1

```python
class Solution:
    def firstUniqChar(self, s: str) -> str:
        if not s or len(s)==0:
            return ' '
        d = {}
        for i in s:
            if i not in d:
                d[i] = 1
            else:
                d[i]+=1
        for k,v in d.items():
            if v==1:
                return k
        return ' '
```