---
title: LeetCode-303-区域和检索-数组不可变
date: 2020/5/31 10:12:38
description: 区域和检索-数组不可变
categories: LeetCode
tags: 
- DP
- 数组
- Java
- Easy
- LeetCode
keywords: DP,数组,Java,Easy,LeetCode
---

## LeetCode-303-区域和检索-数组不可变

给定一个整数数组  *nums*，求出数组从索引 *i* 到 *j*  (*i* ≤ *j*) 范围内元素的总和，包含 *i,  j* 两点。

 <!--more-->

**示例 1:**

```
给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```

**说明:**

1. 你可以假设数组不可变。
2. 会多次调用 *sumRange* 方法。

### 解题思路

方法1、DP暴力破解：

显然这个方法可以用一维DP解决

状态：dp[in]代表从i开始到当前位置的元素和

状态转移方程：

- 当是第一个元素时，直接赋值
- 当是元素i，且i！=0时，dp[i]由dp[i-1]个元素和决定

需要一个dp数组指针in，线性遍历一次数组，dp数组的最后位置就是元素和

这个方法勉强能通过，但是每次调用都要计算[i,j]范围的和，速度很慢

方法2、缓存：

提前计算出所有范围的累和，能不能计算出第i个元素的和

sum[k]定义为nums[0...k-1]的累和，sum[0]=0

对于上述示例数组sum数组为[0，-2，-2，1，-4，-2，-3]

sumrange(i,j)=sum[j+1]-sum[i]，也就是把后面部分的和前去并集部分即可

这种方法只需要计算一次和，之后仅需要从数组取值相减即可得到结果

### Java代码

```java
class NumArray {
    private int[] nums;
    public NumArray(int[] nums) {
        this.nums = nums;
    }
    
    public int sumRange(int i, int j) {
        if(nums==null||nums.length==0) return 0;
        int[] dp = new int[j-i+1];
        int in = 0;
        for(int k=i;k<=j;k++){
            if(k==i)
                dp[in] = this.nums[k];
            else
                dp[in]=dp[in-1]+this.nums[k];
            in++;
        }
        return dp[in-1];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(i,j);
 */
```

### Java代码2

```java
class NumArray {
    private int[] sum;

    public NumArray(int[] nums) {
        sum = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i++) {
            sum[i + 1] = sum[i] + nums[i];
        }
    }

    public int sumRange(int i, int j) {
        return sum[j + 1] - sum[i];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(i,j);
 */
```





