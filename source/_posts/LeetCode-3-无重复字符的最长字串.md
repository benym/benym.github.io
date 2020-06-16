---
title: LeetCode-3-无重复字符的最长字串
date: 2020/6/16 14:56:12
description: 无重复字符的最长字串
categories: LeetCode
tags: 
- 字符串
- Java
- Medium
- LeetCode
keywords: 字符串,Java,Medium,LeetCode
---

## LeetCode-3-无重复字符的最长字串

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。

 <!--more-->

**示例 1:**

```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例2：**

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例3：**

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

### 解题思路

**方法1、哈希表：**

首先挨个比较i个字符和i+1结合哈希的方法是失败的，这样求的不适用于`dvdf`这样的测试用例

我们可以通过记录无重复字符的初始位置start，以及结尾位置end，算出最长的字串是多大

顺序遍历整个字符数组，判断当前的元素是否在hash表内，如果在则将当前元素作为key值，获取不重复元素对应位置，并更新start，此时，start到end不存在重复字符

进入下一步，计算区间内字符长度

如果当前元素不在hash表内，则添加当前字符位置+1，+1表示从当前字符位置后面一个开始不重复

**方法2、滑动窗口：**

窗口的最大值就是最长字串，比如`dvdf`这样的用例

当窗口为`dv`的时候，满足题目要求，当窗口为`dvd`时，不满足要求，此时需要向右边滑动

将左边重复的元素d移除，同时在右边新增，直到满足要求为止

当窗口变化的时候记录当前窗口的最大值

### Java代码

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        char[] c = s.toCharArray();
        int max = 0;
        int start = 0;
        for (int end = 0; end < c.length; end++) {
            if (map.containsKey(c[end])) {
                start = Math.max(map.get(c[end]), start);
            }
            max = Math.max(max, end - start + 1);
            map.put(c[end], end + 1);
        }
        return max;
    }
}
```

### Python代码

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s: return 0
        left = 0
        Max,curMax = 0,0
        n = len(s)
        hashset = set()
        for i in range(n):
            curMax += 1
            while s[i] in hashset:
                hashset.remove(s[left])
                left += 1
                curMax -= 1
            if curMax > Max: Max = curMax
            hashset.add(s[i])
        return Max
```

