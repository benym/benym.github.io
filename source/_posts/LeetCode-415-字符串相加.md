---
title: LeetCode-415-字符串相加
date: 2020/4/15 15:44:22
description: 字符串相加
categories: 字符串
tags: 
- 字符串
- 大数问题
- Java
- Python
- Easy
keywords: 字符串,大数问题,Java,Python,Easy
---

## LeetCode-415-字符串相加

给定两个字符串形式的非负整数 `num1` 和`num2` ，计算它们的和。

<!--more-->

**注意：**

1. num1 和num2 的长度都小于 5100.
2. num1 和num2 都只包含数字 0-9.
3. num1 和num2 都不包含任何前导零。
4. 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

### 解题思路

两数相加可以看成一个大数问题，只是这里是String类型的，思路都差不多。直接从字符串尾部开始遍历，设置一个进位符号，如果三者相加比10大说明有进位，此时的数应该%10即可，符号为设置为1，当没有进位的时候设置为0。两个字符串可能不是等长的，超过遍历的情况默认为0。循环结束之后，符号位为1的话说明最高位要进1

### Java代码

```java
class Solution {
    public String addStrings(String num1, String num2) {
        int alen = num1.length()-1,blen = num2.length()-1,carry = 0;
        StringBuilder res = new StringBuilder();
        while(alen>=0||blen>=0){
            int n1 = alen>=0?num1.charAt(alen)-'0':0;
            int n2 = blen>=0?num2.charAt(blen)-'0':0;
            int sum = n1+n2+carry;
            if(sum>=10){
                carry = 1;
                res.append(sum%10);
            }else{
                carry = 0;
                res.append(sum);
            }
            alen--;
            blen--;
        }
        if(carry==1) res.append(1);
        return res.reverse().toString();
    }
}
```

### Python代码

```python
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        alen,blen,carry = len(num1)-1,len(num2)-1,0
        res = "";
        while alen>=0 or blen>=0:
            n1 = int(num1[alen]) if alen>=0 else 0
            n2 = int(num2[blen]) if blen>=0 else 0
            sum = n1+n2+carry
            carry = sum//10
            res = str(sum%10)+res
            alen = alen-1
            blen = blen-1
        return "1"+res if carry else res
```

