---
title: LeetCode-20-有效的括号
date: 2020/6/24 09:37:20
description: 有效的括号
categories: LeetCode
tags: 
- 字符串
- Java
- Python
- Easy
keywords: 字符串,Java,Python,Easy,LeetCode
---

## LeetCode-20-有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

<!--more-->

**示例 1:**

```
输入: "()"
输出: true
```

**示例2：**

```
输入: "()[]{}"
输出: true
```

**示例3：**

```
输入: "(]"
输出: false
```

**示例4：**

```
输入: "([)]"
输出: false
```

**示例5：**

```
输入: "{[]}"
输出: true
```

### 解题思路

方法1、栈：

观察题目可知，要想构成有效的括号，最开始加入的`(`括号的反`)`必须是最后加入

这种规律符合栈的先进后出的方式，于是可以用栈来模拟

当扫描到前括号`(`、`{`、`[`的时候，在栈中加入对应的反括号`)`,`}`,`]`

当全部匹配时，栈为空等于true

特例处理当输入的字符为`null`的时候，直接返回true

当输入的字符为`[`的时候，栈中会加入反括号`]`，此时栈不为空，返回false

当输入的字符为`]`的时候，栈中不会加入反括号，此时如果直接返回栈是否为空，会返回true，但这是一个错误的结果

所以新增一个新的判断，`else if(stack.isEmpty()||c!=stack.pop())`联合判别反括号和栈空的情况，都是false

### Java代码

```java
class Solution {
    public boolean isValid(String s) {
        if(s==null||s.length()==0) return true;
        Stack<Character> stack = new Stack<>();
        char[] cs = s.toCharArray();
        for(char c:cs){
            if(c=='('){
                stack.push(')');
            }else if(c=='{'){
                stack.push('}');
            }else if(c=='['){
                stack.push(']');
            }else if(stack.isEmpty()||c!=stack.pop()){
                return false;
            }
        }
        return stack.isEmpty();
    }
}
```
