---
title: LeetCode-面试题58-1-翻转单词顺序
date: 2020/5/19 11:09:40
description: 翻转单词顺序
categories: 剑指Offer
tags:
- 字符串
- Java
- Python
- Easy
- 剑指Offer
keywords: 字符串,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题58-1-翻转单词顺序

输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

 <!--more-->

**示例1：**

```
输入: "the sky is blue"
输出: "blue is sky the"
```

**示例 2:**

```
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
```

**示例3：**

```
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```

说明：

- 无空格字符构成一个单词。
- 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
- 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

### 解题思路

双指针切割交换(Python)：

多余的空格直接用split()函数就能够处理，切分之后，利用双指针不断首尾交换，就能够固定单词，翻转单词位置，之后返回字符串即可，这种方法比较偷懒

双指针记录位置(Java)：

初始化两个指针从数组的末尾开始

- 当遇到的字符不是空格时，移动start指针，找到单词的开头，然后利用substring方法截取单词
- 当遇到的字符是空格时，继续移动start指针，找到下一个单词的末尾，将end指针移动到start位置，重复以上步骤即可

### Java代码

```java
class Solution {
    public String reverseWords(String s) {
        s = s.trim();
        int start =  s.length()-1;
        int end = start;
        StringBuilder res = new StringBuilder();
        while(start>=0){
            while(start>=0&&s.charAt(start)!=' ')
                start--;
            res.append(s.substring(start+1,end+1)+" ");
            while(start>=0&&s.charAt(start)==' ')
                start--;
            end=start;
        }
        return res.toString().trim();
    }
}
```

### Python代码

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        arr = s.split()
        start = 0
        end = len(arr)-1
        while start<end:
            temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start+=1
            end-=1
        return " ".join(arr)
```

