---
title: LeetCode-字符串排序
date: 2020/8/30 17:23:46
description: 零钱兑换
categories: LeetCode
tags: 
- 字符串
- Java
- Easy
keywords: 字符串,Java,Easy,LeetCode
---

## LeetCode-字符串排序

编写一个程序，将输入字符串中的字符按如下规则排序。 
规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。 
如，输入： Type 输出： epTy 
规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。 
如，输入： BabA 输出： aABb 
规则 3 ：非英文字母的其它字符保持原来的位置。 
如，输入： By?e 输出： Be?y

<!--more-->

**示例1：**

```
输入：
A Famous Saying: Much Ado About Nothing(2012/8).

输出：
A aaAAbc dFgghh : iimM nNn oooos Sttuuuy (2012/8).
```

**示例2：**

```
输入例子:
A Famous Saying: Much Ado About Nothing (2012/8).

输出例子:
A aaAAbc dFgghh: iimM nNn oooos Sttuuuy (2012/8).
```

### 解题思路

外层循环按照26个字母的顺序循环，内层进行字母顺序进行字符串的遍历，如按照A字母内层一轮，将A和a加入到结果集。循环完毕之后，res中即存储的排序好的字符串

由于需要保持原本的非英文字符串不变，再遍历一次字符串，将非英文字符按照原位置插入到res中即可。

```java
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine().trim();
        char[] cs = str.toCharArray();
        StringBuilder res = new StringBuilder();
        //  循环26个字符
        for (int i = 0; i < 26; i++) {
            // 循环字符串排序，按照A字母一轮，B字母一轮添加进builder
            for (int j = 0; j < str.length(); j++) {
                if (cs[j] == (i + 'a') || cs[j] == (i + 'A')) {
                    res.append(cs[j]);
                }
            }
        }
        //再次遍历字符串
        for (int i = 0; i < str.length(); i++) {
            // 如果不是英文字符，直接添加进结果
            if (!(cs[i] >= 'a' && cs[i] <= 'z' || cs[i] >= 'A' && cs[i] <= 'Z')) {
                res.insert(i, cs[i]);
            }
        }
        System.out.println(res.toString());
    }
}

```
