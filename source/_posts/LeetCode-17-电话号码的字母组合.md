---
title: LeetCode-17-电话号码的字母组合
date: 2020/6/24 15:51:32
description: 电话号码的字母组合
categories: LeetCode
tags: 
- 字符串
- Java
- Medium
- LeetCode
keywords: 字符串,Java,Medium,LeetCode
---

## LeetCode-17-电话号码的字母组合

给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

 <!--more-->

**示例 1:**

```
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

**说明:**
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

### 解题思路

**方法1、回溯：**

首先需要建立一个map，存储数字到字符串的映射

排列组合问题一般想象成树形问题，可以进行回溯选择

本题中回溯的停止条件是当深度达到输入字符长度的时候

回溯流程：

- 选择第一个输入的数字
- 找到这个数字对应的字母列表，并选择第一个字母加入到`tmp`中
- 开启下一层递归
- 当加入过一个答案之后，进行回溯，即删除刚选择的最后一个字符，选择另外的路走

### Java代码

```java
class Solution {
    Map<String, String> map = new HashMap<String, String>() {{
            put("2", "abc");
            put("3", "def");
            put("4", "ghi");
            put("5", "jkl");
            put("6", "mno");
            put("7", "pqrs");
            put("8", "tuv");
            put("9", "wxyz");
        }};
    List<String> res = new ArrayList<String>();
    StringBuilder tmp = new StringBuilder();

    public List<String> letterCombinations(String digits) {
        if(digits==null||digits.length()==0) return res;
        backtrack(digits,0);
        return res;
    }

    public void backtrack(String digits,int index){
        if(index>=digits.length()){
            res.add(tmp.toString());
            return;
        }
        String letter = map.get(digits.substring(index,index+1));
        for(int i=0;i<letter.length();i++){
            tmp.append(letter.charAt(i));
            backtrack(digits,index+1);
            tmp.deleteCharAt(tmp.length()-1);
        }
    }
}
```

