---
title: LeetCode-581-最短无序连续子数组
date: 2020/7/14 10:03:46
description: 最短无序连续子数组
categories: LeetCode
tags: 
- Java
- 数组
- Easy
keywords: Java,数组,Easy,LeetCode
---

## LeetCode-581-最短无序连续子数组

给定一个整数数组，你需要寻找一个**连续的子数组**，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是**最短**的，请输出它的长度。

<!--more-->

**示例1：**

```
输入: [2, 6, 4, 8, 10, 9, 15]
输出: 5
解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
```

**说明 :**

1. 输入的数组长度范围在 [1, 10,000]。
2. 输入的数组可能包含**重复**元素 ，所以**升序**的意思是**<=。**

### 解题思路

**方法1、排序比较：**

先给数组排序，然后进行一一比较，遇到不相等的位置就更新start和end

start始终靠最小值比较，end始终靠最大值比较

之后就能够通过end-start+1得到未排序子数组的长度

特例判断：只有当end-start+1>=0时，长度计算有效，否则为0

**方法2、双指针找边界：**

初步思路是，使用双指针，**指针i从头开始遍历，指针j从尾开始遍历。分别找到第一个逆序的位置**，之后返回长度即可，但这种方法不适用于数组中有重复的数字的情况，如[1,6,5,5]，这使得逆序位置的判断失效。

于是换一种思路，**让指针分别找到最后逆序的位置**

同时从前往后和从后往前遍历，分别得到要排序数组的右边界和左边界；
**寻找右边界：**
从前往后遍历的过程中，用max记录遍历过的最大值，如果max大于当前的nums[i]，说明nums[i]的位置不正确，属于需要排序的数组，因此将右边界更新为i，然后更新max；这样最终可以找到需要排序的数组的右边界，右边界之后的元素都大于max；
**寻找左边界：**
从后往前遍历的过程中，用min记录遍历过的最小值，如果min小于当前的nums[j]，说明nums[j]的位置不正确，应该属于需要排序的数组，因此将左边界更新为j，然后更新min；这样最终可以找到需要排序的数组的左边界，左边界之前的元素都小于min；
（从前往后遍历和从后往前遍历两个过程可以分两次循环完成，也可以放一起完成，这样的话就有：j=len-i-1）

### Java代码1


```java
class Solution {
    public int findUnsortedSubarray(int[] nums) {
        int[] temp = nums.clone();
        Arrays.sort(temp);
        int start = temp.length;
        int end = 0;
        for (int i = 0; i < temp.length; i++) {
            if (nums[i] != temp[i]) {
                start = Math.min(start, i);
                end = Math.max(end, i);
            }
        }
        return end - start + 1 >= 0 ? end - start + 1 : 0;
    }
}
```

### Java代码2

```java
class Solution {
    public int findUnsortedSubarray(int[] nums) {
        int len = nums.length;
        int max = nums[0];
        int min = nums[len-1];
        int l = 0, r = -1;
        for(int i=0;i<len;i++){
            if(max>nums[i]){
                r = i;
            }else{
                max = nums[i];
            }
            if(min<nums[len-i-1]){
                l = len-i-1;
            }else{
                min = nums[len-i-1];
            }
        }
        return r-l+1;
    }
}
```



