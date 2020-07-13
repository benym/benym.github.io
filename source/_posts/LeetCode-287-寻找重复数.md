---
title: LeetCode-287-寻找重复数
date: 2020/7/13 11:02:55
description: 寻找重复数
categories: LeetCode
tags: 
- Java
- 数组
- Medium
keywords: Java,数组,Medium,LeetCode
---

## LeetCode-287-寻找重复数

给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

<!--more-->

**示例1：**

```
输入: [1,3,4,2,2]
输出: 2
```

**示例2：**

```
输入: [3,1,3,4,2]
输出: 3
```

**说明：**

1. **不能**更改原数组（假设数组是只读的）。
2. 只能使用额外的 O(1) 的空间。
3. 时间复杂度小于 O(n2) 。
4. 数组中只有一个重复的数字，但它可能不止重复出现一次。

### 解题思路

**方法1、二分查找：**

我们知道二分查找算法要求数组是有序的，而本题中数组不是有序的，但有数字都在1到n的这个条件。而1到n本身就是一个有序序列，于是可以使用二分查找进行判断。

mid = (left+right)/2，判断答案是在`[left,mid]`中，还是在`[mid+1,right]`中

我们只需要一次遍历数组，统计原数组中小于等于mid的个数，记为`count`

当count<=mid时，说明`[left,mid]`范围中没有重复的数字，答案应该在`[mid+1,right]`中

反之，当count>mid时，说明`[left,mid]`中有重复的数字，将right变为mid再进行查找

### Java代码


```java
class Solution {
    public int findDuplicate(int[] nums) {
        int left = 0;
        int right = nums.length;
        while(left<right){
            int mid = (left+right)>>1;
            int count = 0;
            for(int num : nums){
                if(num<=mid){
                    count++;
                }
            }
            if(count<=mid){
                left = mid+1;
            }else{
                right = mid;
            }
        }
        return right;
    }
}
```



