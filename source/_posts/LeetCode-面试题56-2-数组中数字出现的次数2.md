---
title: LeetCode-面试题56-2-数组中数字出现的次数2
date: 2020/5/18 17:13:05
description: 数组中数字出现的次数2
categories: 剑指Offer
tags:
- 数组
- Java
- Python
- Medium
- 剑指Offer
keywords: 数组,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题56-2-数组中数字出现的次数2

在一个数组 `nums` 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

 <!--more-->

**示例1：**

```
输入：nums = [3,4,3,3]
输出：4
```

**示例 2:**

```
输入：nums = [9,1,7,9,7,9,7]
输出：1
```

- **限制：**

  - `1 <= nums.length <= 10000`
  - `1 <= nums[i] < 2^31`

### 解题思路

方法1、异或运算(单1为1，其余0)：

先对所有数字的各个位求和，求和之后的数字，能够被3整除的，则该位为0，不能够被整除的，则该位为1，之后就能够通过2进制求出对应的数字

方法2、字典：

字典方法没啥好说的，遇到没在字典的加入，在字典就+1，最后取value为1的key就是了

方法3、数组：

先给数组排序，排序之后判断当前位和后面2位是否相等，如果相等则跳过这3位，i+3

如果不相等，则说明当前为就是要找的数字

如果前面都没有找到，则最后一位必定是要找的数字

### Java代码1

```java
class Solution {
    public int singleNumber(int[] nums) {
        if(nums==null||nums.length<=0)
            return -1;
        int[] bitSum = new int[32]; // 最高2^31次方数字
        for(int i =0;i<nums.length;i++){
            int bitMask = 1;
            // 累加各个位置的二进制表示
            // 这里从数组末尾开始，对应二进制最小位
            for(int j = 31;j>=0;j--){
                int bit = nums[i]&bitMask;
                if(bit!=0)
                    bitSum[j]+=1;
                    bitMask<<=1;
            }
        }
        int result = 0;
        // 
        for(int i =0;i<32;i++){
            result = result<<1;
            result+=bitSum[i]%3;
        }
        return result;
    }
}
```

### Python代码

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        if not nums: return -1
        dic = {}
        for i in nums:
            if i not in dic:
                dic[i] = 1
            else:
                dic[i] +=1
        for i in dic:
            if dic[i]==1:
                return i
        return -1
```

### Java代码2

```java
class Solution {
    public int singleNumber(int[] nums) {
        if(nums==null||nums.length<=0)
            return -1;
        Arrays.sort(nums);
        for(int i = 0;i<nums.length-3;){
            if(nums[i]==nums[i+1]&&nums[i+1]==nums[i+2])
                i+=3;
            else
                return nums[i];
        }
        return nums[nums.length-1];
    }
}
```