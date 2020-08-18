---
title: LeetCode-567-字符串的排列
date: 2020/8/18 15:30:45
description: 字符串的排列
categories: LeetCode
tags: 
- 字符串
- 滑动窗口
- Java
- Medium
keywords: 字符串,滑动窗口,Java,Medium,LeetCode
---

## LeetCode-567-字符串的排列

给定两个字符串 **s1** 和 **s2**，写一个函数来判断 **s2** 是否包含 **s1** 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

<!--more-->

**示例1：**

```
输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
```

**示例2：**

```
输入: s1= "ab" s2 = "eidboaoo"
输出: False
```

**注意：**

1. 输入的字符串只包含小写字母
2. 两个字符串的长度都在 [1, 10,000] 之间

### 解题思路

**方法1、滑动窗口(套模版)：**

https://leetcode-cn.com/problems/permutation-in-string/solution/wo-xie-liao-yi-shou-shi-ba-suo-you-hua-dong-chuang/

**方法2、滑动窗口(数组优化)：**

由于都是小写字符，所以初始化两个数组作为need和window，剩余步骤依旧按照模版走，详见注释。


### Java代码1

```java
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        Map<Character,Integer> need =new HashMap<>();
        Map<Character,Integer> window =new HashMap<>();
        for(char c:s1.toCharArray()) 
            need.put(c,need.getOrDefault(c,0)+1);
        int left = 0,right = 0;
        int valid = 0;
        int start=0,len =Integer.MAX_VALUE;
        while(right < s2.length()){
            char c = s2.charAt(right);
            right++;
            if(need.containsKey(c)){
                window.put(c,window.getOrDefault(c,0)+1);
                if((int)window.get(c) ==(int) need.get(c)){
                    valid++;
                }
            }
            while(right-left == s1.length()){
                if(valid == need.size()){
                    return true;
                }
                char d = s2.charAt(left);
                left++;
                if(need.containsKey(d)){
                    if((int)window.get(d) == (int)need.get(d)){
                        valid--;
                    }
                    window.put(d,window.get(d)-1);
                }
            }
        }

        return false;
    }
}
```
###Java代码2

```java
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        char[] arrS1 = s1.toCharArray();
        char[] arrS2 = s2.toCharArray();
        int[] needs = new int[26];
        int[] window = new int[26]; 
        int cntChar = 0; // 有效字母个数(不同的字母个数)
        for(char c: arrS1){
            if(needs[c-'a']==0) cntChar++;// 如果该字母第一次出现，记录下来
            needs[c-'a']+=1;
        }
        int left = 0;
        int right = 0;
        int valid = 0;
        while(right < arrS2.length){
            char c = arrS2[right];
            // 对窗口内数据进行一系列更新
            window[c-'a']+=1;
            if(window[c-'a']==needs[c-'a']){
                valid++;
            }
            // 当窗口扩散到包含s1时，进行左边界收缩
            while(cntChar==valid){
                // 如果窗口大小为s1的长度，则说明找到了
                if(right-left+1==arrS1.length){
                    return true;
                }
                
                char d = arrS2[left];
                // 窗口缩小，对应字符出现次数-1
                window[d-'a']-=1;
                // 当字符次数小于s1中字符出现次数时，则说明窗口达到包含s1字符的最小窗口
                if(window[d-'a']<needs[d-'a']){
                    valid--;
                }
                left++;
            }
            right++;
        }
        return false;
    }
}
```
