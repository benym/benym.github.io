---
title: LeetCode-22-括号生成
date: 2020/6/26 18:52:11
description: 括号生成
categories: LeetCode
tags: 
- 字符串
- 回溯
- DFS
- Java
- Medium
keywords: 字符串,回溯,DFS,Java,Medium,LeetCode
---

## LeetCode-22-括号生成

数字 *n* 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 **有效的** 括号组合。

<!--more-->

**示例 1:**

```
输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
```

### 解题思路

**方法1、DFS：**

深度优先遍历选择左括号和右括号，由于String拼接每次会产生一个新的String对象，所以传入的字符串不会影响其他结果，当左括号>0时，左括号-1进入下一次拼接。只有当左右括号数目相等为n的时候，拼接的括号才是合法的，此时加入到最终结果，返回上一层。当左括号用完了的时候进行右括号的拼接

**方法2、回溯：**

回溯法基本上和DFS一致，只是这里的回溯需要手动回溯，由于String每次生成一个新的String对象耗时比较多，所以可以用StringBuilder，然而StringBuilder拼接的时候会把上一次的字符记录着，所以在DFS之后需要手动回溯，即删除上一层拼接的字符`cur.deleteCharAt(cur.length()-1);`

### Java代码

```java
class Solution {
    List<String> res = new ArrayList<>();
    public List<String> generateParenthesis(int n) {
        if(n==0) return res;
        dfs(n,n,"");
        return res;
    }

    public void dfs(int left,int right,String curStr){
        if(left==0&&right==0){
            res.add(curStr);
            return;
        }

        if(left>0){
            dfs(left-1,right,curStr+"(");
        }
        if(right>left){
            dfs(left,right-1,curStr+")");
        }
    }
}
```

### Java代码2

```java
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList();
        backtrack(res, new StringBuilder(), 0, 0, n);
        return res;
    }

    public void backtrack(List<String> res,StringBuilder cur,int left,int right,int max){
        if(cur.length()==max*2){
            res.add(cur.toString());
            return;
        }
        if(left<max){
            cur.append('(');
            backtrack(res,cur,left+1,right,max);
            cur.deleteCharAt(cur.length()-1);
        }
        if(right<left){
            cur.append(')');
            backtrack(res,cur,left,right+1,max);
            cur.deleteCharAt(cur.length()-1);
        }
    }
}
```

