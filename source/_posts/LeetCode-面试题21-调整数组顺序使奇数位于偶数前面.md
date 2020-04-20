---
title: LeetCode-面试题21-调整数组顺序使奇数位于偶数前面
date: 2020/4/17 17:58:38
description: 调整数组顺序使奇数位于偶数前面
categories: 剑指Offer
tags: 
- 数组
- Python
- Java
- Easy
- 剑指Offer
keywords: 数组,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题21-调整数组顺序使奇数位于偶数前面

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

 <!--more-->

**示例：**

```
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
```

**提示：**

1. `1 <= nums.length <= 50000`
2. `1 <= nums[i] <= 10000`

### 解题思路

设置2个指针，一个指向头，一个指向尾，当start>end的时候，进行循环判断，前面的偶数已经和后面的奇数互换

所以前面的指针要不断寻找偶数，找到偶数位置记录下来。

后面的指针要不断寻找奇数，找到奇数的位置。

当前面是偶数后面是奇数时则满足交换条件，进行互换，这样遍历之后就将奇数全部放在了偶数之前

### Java代码

```java
class Solution {
    public int[] exchange(int[] nums) {
        if(nums==null||nums.length==0){
            return nums;
        }
        int start = 0;
        int end = nums.length-1;
        while(start<end){
            // 当前是奇数时，向后移动start，直到碰到偶数
            while(start<end&&(nums[start]&0x1)!=0)
                start++;
            // 当前是偶数时，向前移动end，直到碰到奇数
            while(start<end&&(nums[end]&0x1)==0)
                end--;
            // 当start和end是前偶后奇时，交换2个数位置
            if(start<end){
                int temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp;
            }
        }
        return nums;
    }
}
```

### Python代码

```python
class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        if not nums or len(nums)==0:
            return nums;
        start ,end = 0, len(nums)-1
        while start<end:
            while start<end and (nums[start]&0x1)!=0:
                start +=1
            while start<end and (nums[end]&0x1)==0:
                end -=1
            if start<end:
                temp = nums[start]
                nums[start] = nums[end]
                nums[end] = temp
        return nums
```

