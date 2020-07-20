---
title: LeetCode-461-汉明距离
date: 2020/7/20 09:22:22
description: 汉明距离
categories: LeetCode
tags: 
- 数组
- Java
- Easy
keywords: 数组,Java,Easy,LeetCode
---

## LeetCode-461-汉明距离

两个整数之间的[汉明距离](https://baike.baidu.com/item/汉明距离)指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 `x` 和 `y`，计算它们之间的汉明距离。

**注意：**
0 ≤ `x`, `y` < 2^31.

<!--more-->

**示例1：**

```
输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
```

### 解题思路

**方法1、异或+移位：**

不难看出异或运算能够保留数据中不相同位置的1，之后我们只需要统计1的个数即可

在Java中内置函数`Integer.bitCount(x^y)`可以快速计算出1的个数

另外一种方式是将每个位逻辑位移，移动到最左侧，或者最右侧，检查该位是否为1

这里采用移动到最右侧的方式，即右移运算

使用取模%2运算或者AND运算&1，检查最右边的一位是否为1，这两个操作都会屏蔽最右位以外的其他位。

### Java代码

```java
class Solution {
    public int hammingDistance(int x, int y) {
        int xOry = x^y;
        int distance = 0;
        while(xOry!=0){
            if((xOry%2)==1){ // 或者使用(xOry&1)也可以
                distance++;
            }
            xOry=xOry>>1;
        }
        return distance;
    }
}
```
