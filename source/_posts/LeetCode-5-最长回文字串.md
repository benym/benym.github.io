---
title: LeetCode-5-最长回文字串
date: 2020/6/18 14:31:14
description: 最长回文字串
categories: LeetCode
tags: 
- 字符串
- DP
- Java
- Medium
- LeetCode
keywords: DP,字符串,Java,Medium,LeetCode
---

## LeetCode-5-最长回文字串

给定一个字符串 `s`，找到 `s` 中最长的回文子串。你可以假设 `s` 的最大长度为 1000。

 <!--more-->

**示例 1:**

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

**示例2：**

```
输入: "cbbd"
输出: "bb"
```

### 解题思路

**方法1、暴力破解：**

暴力破解法，判断每个串开头的所有子串中，大于最长子串的串是否是回文子串

判断回文字串的方法为，首尾往内遍历，如果首尾不相等则不是回文字串，移动左指针+1，右指针-1；

否则就是回文子串

**方法2、动态规划：**

[参考地址1](https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zhong-xin-kuo-san-dong-tai-gui-hua-by-liweiwei1419/)

[参考地址2](https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-by-leetcode-solution/)

**方法3、中心扩散法：**

枚举所有的回文中心位置，回文中心位置需要按照字符串长度分为奇数和偶数的情况

奇数情况时，回文中心仅有1个字符

偶数情况时，回文中心有2个字符

从回文中心出发进行扩散，尽可能的使得子串长度达到最大，不满足时跳出，返回扩散之后回文子串的长度`j-i+1-2`

判断奇数情况和偶数情况下回文子串的最大长度

之后按照最大长度找到回文子串开始的位置，截取子串返回

```          
比如
奇数回文串                             偶数回文串
A   A   B   C   B   A                A   A   B   C   C   B   A
0   1   2   3   4   5                0   1   2   3   4   5   6
  begin     i                          begin     i  i+1
          len=5                                  len=6
                   bengin = i-(len-1)/2
```

### Java代码

```java
class Solution {
    public String longestPalindrome(String s) {
        int len = s.length();
        if(len<2) return s;
        int maxlen = 1;
        int begin = 0;
        char[] charAarray = s.toCharArray();
        for(int i=0;i<len-1;i++){
            for(int j=1;j<len;j++){
                if(j-i+1>maxlen&&validateSubString(charAarray,i,j)){
                    begin = i;
                    maxlen = j-i+1;
                }
            }
        }
        return s.substring(begin,begin+maxlen);
    }
    public boolean validateSubString(char[] charAarray,int left,int right){
        while(left<right){
            if(charAarray[left]!=charAarray[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
```

### Java代码2

```java
public class Solution {

    public String longestPalindrome(String s) {
        int len = s.length();
        if (len < 2) {
            return s;
        }

        int maxLen = 1;
        int begin = 0;

        // dp[i][j] 表示 s[i, j] 是否是回文串
        // i是子串的左边界，j是子串的右边界
        boolean[][] dp = new boolean[len][len];
        char[] charArray = s.toCharArray();
		// 对角线恒为true
        for (int i = 0; i < len; i++) {
            dp[i][i] = true;
        }
        // 由于dp[i+1][j-1]是行+1，列减1，dp[i][j]依赖于左下方的值，这样不好计算
        // 所以先升序填列，再升序填行，按列遍历
        for (int j = 1; j < len; j++) { // 列
            for (int i = 0; i < j; i++) {// 行
                if (charArray[i] != charArray[j]) { // 头尾字符不相等时
                    dp[i][j] = false;
                } else {
                    // j-1-(i+1)+1<2
                    if (j - i < 3) { // 如果头尾没有字符，或者只剩一个字符
                        dp[i][j] = true;
                    } else {
                        dp[i][j] = dp[i + 1][j - 1];
                    }
                }

                // 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
                if (dp[i][j] && j - i + 1 > maxLen) {
                    maxLen = j - i + 1;
                    begin = i;
                }
            }
        }
        return s.substring(begin, begin + maxLen);
    }
}

```

### Java代码3

```java
public class Solution {

    public String longestPalindrome(String s) {
        int len = s.length();
        if (len < 2) {
            return s;
        }
        int maxLen = 1;
        int begin = 0;
        char[] charArray = s.toCharArray();
        // 枚举所有回文中心
        for(int i=0;i<len-1;i++){
            int oddLen = expandAroudCenter(charArray,i,i); // 以下标i作为回文中心
            int evenLen = expandAroudCenter(charArray,i,i+1); //以下标i和i+1作为回文中心
            
            int curMaxLen = Math.max(oddLen,evenLen);
            if(curMaxLen>maxLen){
                maxLen = curMaxLen;
                // 画图找规律
                begin = i-(maxLen-1)/2;
            }
        }
        return s.substring(begin,begin+maxLen);
	}
    
    public int expandAroudCenter(char[] charArray,int left,int right){
        // 当left=right的时候，回文中心是一个字符，回文串的长度是奇数
        // 当right=left+1的时候，此时回文中心两个字符，回文串的长度是偶数
        int len = charArray.length;
        int i = left;
        int j = right;
        // 从回文中心向两边扩散
        while(i>=0&&j<len){
            if(charArray[i]==charArray[j]){
                i--;
                j++;
            }else{
                break;
            }
        }
        // 跳出while循环时，恰好满足 s.charAt(i)!=s.charAt(j)
        // 回文串的长度 j-i+1-2=j-i-1 ，减2是因为不包括回文中心字符
        return j-i-1;
    }
}
```

