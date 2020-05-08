---
title: LeetCode-面试题48-最长不含重复字符的子字符串
date: 2020/5/8 10:25:53
description: 礼物的最大价值
categories: 剑指Offer
tags:
- DP
- 双指针
- 字符串
- Java
- Python
- Medium
- 剑指Offer
keywords: DP,双指针,字符串,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题48-最长不含重复字符的子字符串 

请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

 <!--more-->

**示例1：**

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

**方法1、DP+哈希表：**

设置右边界为j，左边界为i

- 当字串左边没有相同的字符时，dp[j] = dp[j-1]+1
- 当dp[j-1]<j-i，说明字符在dp[j-1]区间之外，如acbr，对于acb而言下一个字符r不是重复的字符，其在dp[j-1]之外，所以dp[j] = dp[j-1]+1
- 当dp[j-1]>=j-i，说明字符在dp[j-1]区间之中，含有重复字符，则dp[j]的左边界由第一次出现的重复字符的位置觉得，dp[j]=j-i

第一二种情况可以合并为一个，由于返回值取dp列表最大值，可以借助dp变量，存储dp[j]，每轮更新res

节省原本需要dp列表的空间

**方法2、双指针+哈希表：**

按照顺序遍历字符串，同时计算子串的长度，当到达相同的字符时候，自然希望子串的起始位置变成重复的位置。

而下一次子串的长度则=计算下一次碰到重复字符的位置`end`到上一次碰到重复字符位置`start`的差

那么如何去知道前面是否有重复的字符？

如果不使用hash表，就需要从最开始遍历到末尾end进行判断，这样时间复杂度太高。

所以这里采用hash表的方式存储每一个字符最后出现的位置，以便于快速找到上一次start的位置，由于遍历从0开始，所以将start初始化为-1，表示第一个位置长度为1，最后取最大的字串长度

### Java代码

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character,Integer> dict = new HashMap<>();
        int res = 0,dp = 0;
        for(int j=0;j<s.length();j++){
            int i = dict.containsKey(s.charAt(j))?dict.get(s.charAt(j)):-1; // 获取索引
            dict.put(s.charAt(j),j); // 更新hash
            // dp[j-1] < j-i时，dp[j-1]+1
            // dp[j-1] > j-i时，j-i
            dp = dp<j-i?dp+1:j-i;
            res = Math.max(res,dp); // max(dp[j-1],dp[j])
        }
        return res;
    }
}
```

### Python代码

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start,res= -1,0
        positionMap = {}
        for end in range(len(s)):
            if s[end] in positionMap:
                start = max(positionMap[s[end]],start)
            positionMap[s[end]] = end
            res = max(res,end-start)
        return res
```