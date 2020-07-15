---
title: LeetCode-169-多数元素
date: 2020/7/15 10:43:02
description: 多数元素
categories: LeetCode
tags: 
- Java
- 数组
- Easy
keywords: Java,数组,Easy,LeetCode
---

## LeetCode-169-多数元素

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

<!--more-->

**示例1：**

```
输入: [3,2,3]
输出: 3
```

**示例2：**

```
输入: [2,2,1,1,1,2,2]
输出: 2
```

### 解题思路

**方法1、哈希表：**

利用一个哈希表计算频率，当元素的频率大于nums.length/2的时候就是要找的元素

**方法2、排序：**

由于多数元素在数组中出现的次数大于n/2，于是可以将数组排序，对应nums.length/2的位置就是这个多数元素

**方法3、摩尔计数法：**

原文链接：https://leetcode-cn.com/problems/majority-element/solution/3chong-fang-fa-by-gfu-2/

候选人(cand_num)初始化为nums[0]，票数count初始化为1。
当遇到与cand_num相同的数，则票数count = count + 1，否则票数count = count - 1。
当票数count为0时，更换候选人，并将票数count重置为1。
遍历完数组后，cand_num即为最终答案。

为何这行得通呢？
投票法是遇到相同的则票数 + 1，遇到不同的则票数 - 1。
且“多数元素”的个数> ⌊ n/2 ⌋，其余元素的个数总和<= ⌊ n/2 ⌋。
因此“多数元素”的个数 - 其余元素的个数总和 的结果 肯定 >= 1。
这就相当于每个“多数元素”和其他元素 两两相互抵消，抵消到最后肯定还剩余至少1个“多数元素”。

无论数组是1 2 1 2 1，亦或是1 2 2 1 1，总能得到正确的候选人。

### Java代码1


```java
class Solution {
    public int majorityElement(int[] nums) {
        int len = nums.length;
        int res = Integer.MIN_VALUE;
        Map<Integer,Integer> map = new HashMap<>();
        for(int num:nums){
            map.put(num,map.getOrDefault(num,0)+1);
        }
        for(Map.Entry<Integer,Integer> entry: map.entrySet()){
            if(entry.getValue()>len/2){
                res = entry.getKey();
            }
        }
        return res;
    }
}
```

### Java代码2

```java
class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        return nums[nums.length/2];
    }
}
```

### Java代码3

```java
class Solution {
    public int majorityElement(int[] nums) {
        int cand_num = nums[0], count = 1;
        for (int i = 1; i < nums.length; ++i) {
            if (cand_num == nums[i])
                ++count;
            else if (--count == 0) {
                cand_num = nums[i];
                count = 1;
            }
        }
        return cand_num;
    }
}
```



