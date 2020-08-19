---
title: LeetCode-76-最小覆盖字串
date: 2020/8/19 10:10:37
description: 最小覆盖字串
categories: LeetCode
tags: 
- 字符串
- 滑动窗口
- Java
- Hard
keywords: 字符串,滑动窗口,Java,Hard,LeetCode
---

## LeetCode-76-最小覆盖字串

给你一个字符串 S、一个字符串 T 。请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。

<!--more-->

**示例1：**

```
输入：S = "ADOBECODEBANC", T = "ABC"
输出："BANC"
```

**提示：**

- 如果 S 中不存这样的子串，则返回空字符串 `""`。
- 如果 S 中存在这样的子串，我们保证它是唯一的答案。

### 解题思路

**方法1、滑动窗口(数组)：**

示例中只列出了大写字母，但实际测试中含有小写字母，且同一字母可能会出现多次

用2个128长度的数组存储窗口window和实际需要的数组need

1. 先将两个字串转为char数组，用need数组存储对应字符的出现次数
2. 初始化滑动窗口指针，left、right、valid(记录匹配的长度)
3. 因为需要返回匹配的最短字串，所以使用start和end指针记录子串的首尾位置
4. 当右边界小于s的长度时，进行窗口滑动，直到包含t中所有字符为止
5. 当valid长度达到t子串长度时，停止增加右边界，记录当前匹配的串的start和end；之后不断减小左边界，直到窗口中的字符不符合要求
6. 重复4、5步，直到right达到s长度
7. 返回子串start,start+end

**方法2、滑动窗口(哈希表)：**

和上面类似，改为哈希表存储


### Java代码1

```java
class Solution {
    public String minWindow(String s, String t) {
        char[] arrs = s.toCharArray();
        char[] arrt = t.toCharArray();
        int[] window = new int[128];
        int[] need = new int[128];
        for (int i = 0; i < arrt.length; i++) {
            need[arrt[i]]++;
        }
        int left = 0, right = 0, valid = 0;
        int start = 0, end = Integer.MAX_VALUE;
        while (right < arrs.length) {
            char cright = arrs[right];
            right++;
            window[cright]++;
            if (window[cright] <= need[cright]) {
                valid++;
            }
            while (valid == arrt.length) {
                if (right - left < end) {
                    start = left;
                    end = right - left;
                }
                char cleft = arrs[left];
                left++;
                if (window[cleft] == need[cleft]) {
                    valid--;
                }
                window[cleft]--;
            }
        }
        return end == Integer.MAX_VALUE ? "" : s.substring(start, start + end);
    }
}
```

### Java代码2

```java
class Solution {
    public String minWindow(String s, String t) {
        Map<Character,Integer> need = new HashMap<>();
        Map<Character,Integer> window = new HashMap<>();
        for(char c: t.toCharArray()){
            need.put(c,need.getOrDefault(c,0)+1);
        }
        int left = 0,right = 0;
        int valid = 0;
        int start = 0,len = Integer.MAX_VALUE;
        while(right<s.length()){
            char cright = s.charAt(right);
            right++;
            if(need.containsKey(cright)){
                window.put(cright,window.getOrDefault(cright,0)+1);
                if((int)window.get(cright)==(int)need.get(cright)){
                    valid++;
                }
            }
            while(valid==need.size()){
                if(right-left<len){
                    start = left;
                    len = right - left;
                }
                char dleft = s.charAt(left);
                left++;
                if(need.containsKey(dleft)){
                    if((int)window.get(dleft)==(int)need.get(dleft)){
                        valid--;
                    }
                    window.put(dleft,window.get(dleft)-1);
                }
            }
        }
        return len==Integer.MAX_VALUE? "" : s.substring(start,start+len);
    }
}
```

