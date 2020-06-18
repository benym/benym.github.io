---
title: LeetCode-136-只出现一次的数字
date: 2020/6/18 21:22:13
description: 只出现一次的数字
categories: LeetCode
tags: 
- 数组
- Java
- Python
- Easy
- LeetCode
keywords: 数组,Java,Python,Easy,LeetCode
---

## LeetCode-136-只出现一次的数字

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

 <!--more-->

**示例 1:**

```
输入: [2,2,1]
输出: 1
```

**示例2：**

```
输入: [4,1,2,1,2]
输出: 4
```

### 解题思路

**方法1、异或运算：**

异或运算的特点

- 任何数和0做异或运算，结果是原来的数
- 任何数和其自身做异或运算，结果是自身
- 异或运算满足交换律和结合律，即`a^b^a=b^a^a=b^(a^a)=b^0=b`

根据这个特点可以直接用异或运算得出出现一次的字符

**方法2、哈希表：**

这个解法不符合题意，用到了一个哈希表来存储数字出现的次数

之后取出出现次数为1的数字即可

### Java代码

```java
class Solution {
    public int singleNumber(int[] nums) {
        int single = 0;
        for (int num : nums) {
            single ^= num;
        }
        return single;
    }
}
```

### Python代码

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        dict1 = dict()
        for i in nums:
            if i in dict1:
                dict1[i]+=1
            else:
                dict1[i]=1
        return list(dict1.keys())[list(dict1.values()).index(1)]
```

