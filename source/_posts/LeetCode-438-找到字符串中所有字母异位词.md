---
title: LeetCode-438-找到字符串中所有字母异位词
date: 2020/8/18 09:57:26
description: 找到字符串中所有字母异位词
categories: LeetCode
tags: 
- 字符串
- 滑动窗口
- Java
- Medium
keywords: 字符串,Java,滑动窗口,Medium,LeetCode
---

## LeetCode-438-找到字符串中所有字母异位词

给定一个字符串 **s** 和一个非空字符串 **p**，找到 **s** 中所有是 **p** 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 **s** 和 **p** 的长度都不超过 20100。

说明：

- 字母异位词指字母相同，但排列不同的字符串。
- 不考虑答案输出的顺序。

<!--more-->

**示例1：**

```
输入:
s: "cbaebabacd" p: "abc"

输出:
[0, 6]

解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
```

**示例2：**

```
输入:
s: "abab" p: "ab"

输出:
[0, 1, 2]

解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
```

### 解题思路

**方法1、哈希表+滑动窗口：**

详见注释

**方法2、数组+滑动窗口：**

详见https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/solution/20200321438median-by-jasion_han-r/

- 一开始还是先将字符串转换为字符数组，定义一个ans来接收结果

- 这里使用了两个数组needs和window来分别记录**需要得到的元素**和**滑动窗口遍历到的元素**

- 首先把目标数组arrP中有的元素都放入needs中，然后通过不断移动滑动窗口将目标元素的个数保存到window中

- 如果window数组中记录的元素个数超过了needs数组的元素个数，则开始移动左窗口慢慢减少多余的个数

- 最后把整个遍历过程中所有符合要求的左窗口索引放到ans中并返回即可。

###Java代码1

```java
class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        Map<Character, Integer> smap = new HashMap<>();
        Map<Character, Integer> pmap = new HashMap<>();
        for (char ch : p.toCharArray()) {
            pmap.put(ch, pmap.getOrDefault(ch, 0) + 1);
        }
        List<Integer> res = new ArrayList<>();
        int count = 0; // 候选字符的个数
        int len = p.length();
        int left = 0;
        int right = 0;
        while (right < s.length()) {
            char ch = s.charAt(right);
            smap.put(ch, smap.getOrDefault(ch, 0) + 1);
            // 如果p中包含当前字符，且s的窗口中该字符出现次数不足，则该字符可以作为一个候选字符串，count++
            if (pmap.containsKey(ch) && smap.get(ch) <= pmap.get(ch)) {
                count++;
            }
            // 当候选字符个数等于p长度，此时left为起始索引
            if (count == len) {
                res.add(left);
            }
            // 当窗口大小大于等于p长度时，窗口左边需要收缩一个字符
            if (right - left + 1 >= len) {
                char leftChar = s.charAt(left);
                // 判断收缩的这个字符是否是候选字符
                if (pmap.containsKey(leftChar) && smap.get(leftChar) <= pmap.get(leftChar)) {
                    count--;
                }
                // 窗口收缩一个字符
                smap.put(leftChar, smap.getOrDefault(leftChar, 1) - 1);
                left++;
            }
            right++;
        }
        return res;
    }
}
```

### Java代码2

```java
class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        char[] arrS = s.toCharArray();
        char[] arrP = p.toCharArray();
        
        // 接收最后返回的结果
        List<Integer> ans = new ArrayList<>();
        
        // 定义一个 needs 数组来看 arrP 中包含元素的个数
        int[] needs = new int[26];
        // 定义一个 window 数组来看滑动窗口中是否有 arrP 中的元素，并记录出现的个数
        int[] window = new int[26]; 
        
        // 先将 arrP 中的元素保存到 needs 数组中
        for (int i = 0; i < arrP.length; i++) {
            needs[arrP[i] - 'a'] += 1;
        }
        
        // 定义滑动窗口的两端
        int left = 0;
        int right = 0;
        
        // 右窗口开始不断向右移动
        while (right < arrS.length) {
            int curR = arrS[right] - 'a';
            right++;
            // 将右窗口当前访问到的元素 curR 个数加 1 
            window[curR] += 1;
            
            // 当 window 数组中 curR 比 needs 数组中对应元素的个数要多的时候就该移动左窗口指针 
            while (window[curR] > needs[curR]) {
                int curL = arrS[left] - 'a';
                left++;
                // 将左窗口当前访问到的元素 curL 个数减 1 
                window[curL] -= 1;            
            }
            
            // 这里将所有符合要求的左窗口索引放入到了接收结果的 List 中
            if (right - left == arrP.length) {
                ans.add(left);
            }
        }
        return ans;
    }
}
```

