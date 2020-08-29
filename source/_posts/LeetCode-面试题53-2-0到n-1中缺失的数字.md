---
title: LeetCode-面试题53-2-0到n-1中缺失的数字
date: 2020/5/12 16:10:46
description: 0到n-1中缺失的数字
categories: 剑指Offer
tags:
- 数组
- Java
- Easy
- 剑指Offer
keywords: 数组,Java,Easy,剑指Offer
---

## LeetCode-面试题53-2-0到n-1中缺失的数字 

一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

 <!--more-->

**示例1：**

```
输入: [0,1,3]
输出: 2
```

**示例2：**

```
输入: [0,1,2,3,4,5,6,7,9]
输出: 8
```

- **限制：**

  `1 <= 数组长度 <= 10000`

### 解题思路

**方法1、二分查找：**

递增且数字范围在0~n-1的数组**(有序数组)**，数字和它对应的下标一定是相等的，缺失的数子会造成，该数字之后的数组下标在原本相等的情况下+1

排序数组中的搜索问题，首先想到**二分查找**解决

分析可知，数组可以分为左右子数组2部分：

- 左子数组：`nums[i]=i`
- 右子数组：`nums[i]!=i`

缺失的数字=**右子数组的首位元素**对应的索引

1. 初始化头尾指针`start`，`end`
2. 当`start<end`时，计算`mid = (start+end)/2`
3. 若`nums[mid] = mid`，则"右子数组的首位元素"一定在闭区间`[mid+1,end]`中，因此执行`start = mid+1`;
4. 若`nums[mid]!=mid`，则"左子数组的末位元素"一定在闭区间`[start,mid-1]`中，因此`end = mid -1`;
5. 跳出时，`start`就是指向右子数组的首位元素，`end`指向左子数组的末位元素，因此返回`start`即可

时间复杂度O(logN)，空间复杂度O(1)

**方法2、异或运算：**

异或运算，可以使得相同的数字异或为0，如b^b=0，a^b^b=a

由于数组有序且递增，除了缺失数字外，每一位元素和索引进行异或均为0

1. 初始化`res=0`，即先假设这个数字为`0`，先把数组的`[0,n-1]`范围内的数组异或一遍，此时等于`n`个数字全部异或，再把他和对应的`[0,n-1]`索引下标异或一遍，这两个操作可以在一个循环中搞定。
2. 因为元素和下标是相等的，异或为`0`，所以缺失的数字一定会在异或2次操作后剩下，因为缺失的数字和下标是不等的
3. 最后再将`res`异或上数组下标`n`也就是此时`i`的值(因为此时，数组已经异或了`n`个，而下标只异或了`n-1`个，所以循环之外还需要再次异或数组下标`i++`即`n`)，就可以得到缺失的数字。

### Java代码1

```java
class Solution {
    public int missingNumber(int[] nums) {
        int start = 0, end = nums.length - 1;
        while(start <= end) {
            int mid = (start + end) / 2;
            if(nums[mid] == mid) 
                start = mid + 1;
            else 
                end = mid - 1;
        }
        return start;
    }
}
```

### Java代码2

```java
class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int res = 0;
        for (int i=0;i<nums.length;i++){
            res^=nums[i];
            res^=i;
        }
        return res^n;
    }
}
```

<div class="note info"><p>2020年8月29日 22:10:10更新，当数组是无序的时候，且数组范围在[1,n-1]，应该怎么去做？</p></div>

**方法、异或运算：**

数组无序的情况依旧可以使用异或运算进行处理

先初始化`r=0`，将`r`与数组所有值异或一次，之后将`r`和数组`i+1`异或一次(因为下标从`1`开始，但循环从`0`开始)，由于补全之后，数组的长度是`n`，当前的数组长度为`n-1`，所以还需要再异或最后一位数字的索引，因为数组的范围从1开始，所以最后的异或同样有1的偏移，即`nums.length+1`，才能得到缺失的数字。

无论数组是否有序，异或2次之后，缺失的数字就是剩下的，如果不缺失则2次异或完毕的结果为0

### Java代码3

```java
public class LeetCode53_2 {
    public static void main(String[] args) {
        int[] nums = new int[]{1, 3, 2, 5, 4, 7, 8};
        int r = 0;
        for (int i = 0; i < nums.length; i++) {
            r ^= (nums[i] ^ (i+1));
        }
        System.out.println(r ^ (nums.length+1));
    }
}
```

