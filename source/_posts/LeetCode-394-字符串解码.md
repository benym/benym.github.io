---
title: LeetCode-394-字符串解码
date: 2020/8/3 11:11:29
description: 字符串解码
categories: LeetCode
tags: 
- 字符串
- Java
- Medium
keywords: 字符串,Java,Medium,LeetCode
---

## LeetCode-394-字符串解码

给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

<!--more-->

**示例1：**

```
输入：s = "3[a]2[bc]"
输出："aaabcbc"
```

**示例2：**

```
输入：s = "3[a2[c]]"
输出："accaccacc"
```

**示例3：**

```
输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
```

**示例4：**

```
输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"
```

### 解题思路

**方法1、栈：**

观察示例可知，当出现括号时，需要考虑括号前的数字

由于有时候括号不止1个，而且括号内的字符也不止1组，所以需要2个栈(或者队列)来进行存储，此外还需要一个res存储最终拼接的字符串。

顺序进行遍历，情况分为以下4种：

1. 0<=当前字符<=9时，记录当前num，`num=c[i]-'0'`，但是num可能不止一个数字，当字符为`100`时，下一个也是num，如果直接覆盖会导致数字丢失，于是`num=num * 10 + c[i] - '0'`正是考虑这种情况。
2. 当前字符==`[`左括号时，记录括号前的num，并将num置0，方便下次记录。同时需要记录数字之前出现的所有英文字符，使用str的栈进行先前结果的存储，`strStack.push(res.toString());`，复用res准备记录括号内的英文字符。
3. 当前字符是a-z或者A-Z范围内时，直接进行字符串拼接`res.append(c[i])`
4. 当前字符==`]`右括号时，需要将括号内的字符重复，同时需要将之前保存的字符串和括号内的字符串进行拼接。首先弹出数字栈内的数字`tempNum`，利用一个临时的字符串`tempStr`保存之前的结果，从字符栈中弹出之前的字符串`strStack.pop()`，并转为StringBuilder类型赋值给`tempStr`，循环添加到`tempStr`中，此时的`res`保存的是括号内的字符，循环次数为`tempNum`。进行玩括号内字符添加后，将临时字符串赋值给`res`，继续进行循环判断。

最后，返回`res.toString()`

### Java代码

```java
class Solution {
    public String decodeString(String s) {
        StringBuilder res = new StringBuilder();
        Stack<Integer> numStack = new Stack<>();
        Stack<String> strStack = new Stack<>();
        char[] c = s.toCharArray();
        int num = 0;
        for (int i = 0; i < c.length; i++) {
            if (c[i] >= '0' && c[i] <= '9') {
                num = num * 10 + c[i] - '0';
            } else if (c[i] == '[') {
                numStack.push(num);
                num = 0;
                strStack.push(res.toString());
                res = new StringBuilder();
            } else if (('a' <= c[i] && c[i] <= 'z') || ('A' <= c[i] && c[i] <= 'Z')) {
                res.append(c[i]);
            } else if (c[i] == ']') {
                int tempNum = numStack.pop();
                StringBuilder tempStr = new StringBuilder(strStack.pop());
                for (int j = 0; j < tempNum; j++) {
                    tempStr.append(res);
                }
                res = tempStr;
            }
        }
        return res.toString();
    }
}
```

