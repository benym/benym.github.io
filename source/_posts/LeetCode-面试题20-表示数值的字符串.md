---
title: LeetCode-面试题20-表示数值的字符串
date: 2020/4/17 12:21:56
description: 表示数值的字符串
categories: 剑指Offer
tags: 
- 字符串
- Python
- Java
- Medium
- 剑指Offer
keywords: 字符串,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题20-表示数值的字符串

请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"0123"及"-1E-16"都表示数值，但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。

 <!--more-->

### 解题思路

一位一位进行判断，字符串遵循模式`A[.[B]][e|EC]`或者`.[B][e|EC]`

其中A和C都是可能以`+`或者`-`开头的0~9的数位串

B也是0~9的数位串，但是不能带有正负号

C紧跟着'e'或者'E'为数值的指数部分

判断一个字符串是否符合上述模式时，首先尽可能多地扫描0~9的数位(有可能在起始处有'+'或'-'，也就是前面模式中表示数值整数的A部分)，如果遇到小数点'.'，则开始扫描表示数值小数部分的B部分，如果遇到'e'或者'E'，则开始扫描表示数值指数的C部分

### Java代码

```java
class Solution {
    public boolean isNumber(String s) {
        if(s==null||s.length()==0)
            return false;
        boolean isNum = false;
        boolean isDot = false;
        boolean isE = false;
        char[] str = s.trim().toCharArray();
        for(int i = 0;i < str.length;i++){
            if(str[i]>='0'&&str[i]<='9'){
                isNum = true;
            }
            else if('.'==str[i]){
                // .的前面不能有.或者E
                if(isDot||isE)
                    return false;
                isDot = true;
            }
            else if(str[i]=='e'||str[i]=='E'){
                // e或E的前面不能有e/E，只能是数字
                if(isE||isNum==false)
                    return false;
                isE = true;
                // 越过e之后必须要有数字，重置isNum，记录后面是不是有数字出现
                // 如果e是最后一位，则这个数字不合法
                isNum = false;
            }
            else if(str[i]=='+'||str[i]=='-'){
                // 只有i=0或者e/E前面出现正负号的时候才合法，不然就是非法
                if(i!=0&&str[i-1]!='e'&&str[i-1]!='E')
                    return false;
            }
            else{ // 其他非法情况
                return false;
            }
        }
        return isNum;
    }
}
```

### Python代码

```python
class Solution:
    def __init__(self):
        self.p = 0

    def isNumber(self, s: str) -> bool:
        s = s.strip()
        if not s: return False
        numeric = self.scanInteger(s)
        if self.p > len(s)-1:
            return numeric
        if self.p < len(s) and s[self.p] == '.':
            self.p +=1
            if self.p > len(s)-1:
                return numeric
            numeric = self.scanUnsignedIntergers(s) or numeric
        if self.p < len(s) and s[self.p] in ['e','E']:
            self.p +=1
            if self.p > len(s)-1:
                return False
            numeric = numeric and self.scanInteger(s)
        if self.p < len(s):
            return False
        return numeric
    
    def scanInteger(self,s):
        if s[self.p] in ['+','-']:
            self.p +=1
        return self.scanUnsignedIntergers(s)
    
    def scanUnsignedIntergers(self,s):
        pre = self.p
        while(self.p < len(s) and s[self.p]>='0' and s[self.p]<='9'):
            self.p +=1
        return self.p>pre
```

