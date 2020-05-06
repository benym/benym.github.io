---
title: LeetCode-面试题45-把数组排成最小的数
date: 2020年5月6日 18:51:48
description: 把数组排成最小的数
categories: 剑指Offer
tags:
- 大数问题
- 数组
- Java
- Python
- Medium
- 剑指Offer
keywords: 大数问题,数组,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题45-把数组排成最小的数 

输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

 <!--more-->

**示例1：**

```
输入: [10,2]
输出: "102"
```

**示例2：**

```
输入: [3,30,34,5,9]
输出: "3033459"
```

**限制：**

- `0 < nums.length <= 100`

**说明：**

- 输出结果可能非常大，所以你需要返回一个字符串而不是整数
- 拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0

### 解题思路

排序：

对于两个数字m和n，可以拼接成mn和nm，如果mn<nm，那么就应该打印出mn，也就是m应该排在n之前，此时定义m"小于"n；反之，如果nm<mn，应该打印nm，此时定义n"小于"m；如果mn=nm，则n"等于"m，由于组合的数字很大，所以这也是一个大数问题，用字符串来进行拼接得到结果

在Java代码中可以重写Arrays中的compareTo接口，使x+y和y+x进行大小比较，sort方法默认升序，所以比较出来的数组自然是最小的

Python代码....原来还可以根据key自定义规则，方法来自<https://leetcode-cn.com/u/bigkjp97/>因为默认升序，所以只需要改变大于或者小于的规则即可，其他规则富比较方法中不变不影响

### Java代码

```java
class Solution {
    public String minNumber(int[] nums) {
        if(nums==null||nums.length==0)
            return "";
        String[] str = new String[nums.length];
        for(int i =0;i<nums.length;i++){
            str[i] = String.valueOf(nums[i]);
        }
        Arrays.sort(str, (x, y) -> (x + y).compareTo(y + x));
        StringBuilder res = new StringBuilder();
        for(String s:str)
            res.append(s);
        return res.toString();
    }
}
```

### Python代码1

```python
class SmallerNumKey(str): # 定义一个类
    # 富比较方法
    def __lt__(x, y):
        return x + y < y + x

class Solution:
    def minNumber(self, nums: List[int]) -> str:
        smallest_num = ''.join(sorted(map(str, nums),key=SmallerNumKey))
        return smallest_num
```

### Python代码2

```python
class Solution:
    def minNumber(self, nums: List[int]) -> str:
        def sort_rule(x, y):
            a, b = x + y, y + x
            if a > b: return 1
            elif a < b: return -1
            else: return 0
        strs.sort(map(str,nums),key = functools.cmp_to_key(sort_rule))
        return ''.join(strs)
```