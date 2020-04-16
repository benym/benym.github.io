---
title: LeetCode-面试题19-正则表达式匹配
date: 2020/4/16 14:56:55
description: 正则表达式匹配
categories: 剑指Offer
tags: 
- DP
- 字符串
- Python
- Java
- Hard
- 剑指Offer
keywords: DP,字符串,Java,Python,Hard,剑指Offer
---

## LeetCode-面试题19-正则表达式匹配

给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

```
'.' 匹配任意单个字符

'*' 匹配零个或多个前面的那一个元素
```

所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

**说明:**

- s 可能为空，且只包含从 a-z 的小写字母。

- p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。

 <!--more-->

**示例1**

```
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
```

**示例2**

```
输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```

**示例3**

```
输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```

**示例4**

```
输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
```

**示例5**

```
输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
```

### 解题思路

方法1、暴力递归(Python)：

1. 如果p为空，s也为空匹配，s不为空不匹配
2. s非空，p的首字母和s首字母或者`.`匹配，first=true
3. 判断如果p[1]不是*，则不需要考虑p[0]位置，直接进行下一位递归匹配
4. 如果p[1]==`*`，则有两种情况匹配
5. 匹配`*`号前的字符0次，说明前面这个字符不需要，我们要跳过ch*去匹配后面的，即isMatch(s,p[2:])
6. 匹配`*`号前的字符1次，说明前面这个字符至少出现了一次，s移动一位，继续使用匹配后面的

方法2、动态规划(Java)：

不会写....copy自评论区

### Java代码

```java
class Solution {
    public boolean isMatch(String s, String p) {
        int slen=s.length();
        int plen=p.length();
        if(slen==0&&plen==0)return true;
        //if(slen==0||plen==0)return false;

        boolean[][] dp=new boolean[slen+1][plen+1];
        //dp[i][j]表示s的0到i-1和p的0到j-1是否匹配
        dp[0][0]=true;
        //初始化s=0
        for(int j=1;j<=plen;j++){
            //当s为空时，a*b*c*可以匹配
            //当判断到下标j-1是*，j-2是b，b对应f，要看之前的能否匹配
            //比如a*b*下标依次为ftft，b之前的位t，所以j-1也是true
            //即dp[0][j]对应的下标j-1位true
            if(j==1)dp[0][j]=false;
            if(p.charAt(j-1)=='*'&&dp[0][j-2])dp[0][j]=true;
        }

        //for循环当s长度为1时能否匹配，一直到s长度为slen
        for(int i=1;i<=slen;i++){
            for(int j=1;j<=plen;j++){
                //最简单的两种情况   字符相等或者p的字符是‘.'
                if(s.charAt(i-1)==p.charAt(j-1)||p.charAt(j-1)=='.'){
                    dp[i][j]=dp[i-1][j-1];
                }
                //p当前字符是*时，要判断*前边一个字符和s当前字符   
                
                else if(p.charAt(j-1)=='*'){
                    if(j<2)dp[i][j]=false;
                     //如果p的*前边字符和s当前字符相等或者p的字符是‘.'
                     //三种可能
                     //匹配0个，比如aa aaa*也就是没有*和*之前的字符也可以匹配上（在你（a*）没来之前我们(aa)已经能匹配上了）dp[i][j]=dp[i][j-2]
                     //匹配1个，比如aab aab* 也就是*和*之前一个字符只匹配s串的当前一个字符就不看*号了  即 dp[i][j]=dp[i][j-1]
                     //匹配多个，比如aabb aab*  b*匹配了bb两个b  那么看aab 和aab*是否能匹配上就行了，即dp[i][j]=dp[i-1][j]
                     if(p.charAt(j-2)==s.charAt(i-1)||p.charAt(j-2)=='.'){
                        dp[i][j]=dp[i-1][j]||dp[i][j-1]||dp[i][j-2];
                    }
                    //如果p的*前边字符和s当前字符不相等或者p的字符不是‘.'，那就把*和*前边一个字符都不要了呗
                    //你会发现不管是这种情况还是上边的情况都会有dp[i][j]=dp[i][j-2];所以可以把下边剪枝，不用分开写了
                    //这里分开写是为了好理解
                    else if(p.charAt(j-2)!=s.charAt(i-1)&&p.charAt(j-2)!='.'){
                        dp[i][j]=dp[i][j-2];
                    }
                }
                //其他情况肯定不能匹配上了  直接false  比如 aba abb*c  
                else{
                    dp[i][j]=false;
                }
            }
        }
        return dp[slen][plen];
    }
}
```

### Python代码

```python
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        if not p: return not s
        first = bool(s) and p[0] in {s[0], '.'}
        # 解释：如果发现有字符和 '*' 结合，
        if len(p) >= 2 and p[1] == '*':
            # 或者匹配该字符 0 次，然后跳过该字符和 '*'
            return self.isMatch(s, p[2:]) or \
            # 或者当 pattern[0] 和 string[0] 匹配后，移动 string
                   first and self.isMatch(s[1:], p)
        else:
            return first and self.isMatch(s[1:], p[1:])


if __name__ == '__main__':
    s = input().strip()
    p = input().strip()
    so = Solution()
    output = so.isMatch(s, p)
```

