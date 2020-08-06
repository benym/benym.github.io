---
title: LeetCode-75-颜色分类
date: 2020/8/6 09:47:45
description: 颜色分类
categories: LeetCode
tags: 
- 数组
- Java
- Medium
keywords: 数组,Java,Medium,LeetCode
---

## LeetCode-75-颜色分类

给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

**注意:**
不能使用代码库中的排序函数来解决这道题。

<!--more-->

**示例1：**

```
输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
```

**进阶：**

- 一个直观的解决方案是使用计数排序的两趟扫描算法。
  首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
- 你能想出一个仅使用常数空间的一趟扫描算法吗？

### 解题思路

**方法1、计数排序：**

初始化max+1容量的桶，将数组值为下标的元素放入对应的桶内，并进行计数，如nums[2]=3，则bucket[3]+1。之后从每个桶中取出元素，重新放入原本的数组，实现原地修改。需要多次遍历数组。当然使用快排也可以，但题目要求使用一趟的扫描算法。

**方法2、三指针一次遍历(荷兰国旗问题)：**

我们用三个指针（p0, p2 和curr）来分别追踪0的最右边界，2的最左边界和当前考虑的元素。

本解法的思路是沿着数组移动 curr 指针，若nums[curr] = 0，则将其与 nums[p0]互换；若 nums[curr] = 2 ，则与 nums[p2]互换。

算法

- 初始化0的最右边界：p0 = 0。在整个算法执行过程中 nums[idx < p0] = 0.

- 初始化2的最左边界 ：p2 = n - 1。在整个算法执行过程中 nums[idx > p2] = 2.

- 初始化当前考虑的元素序号 ：curr = 0.

- While curr <= p2 :
  - 若 nums[curr] = 0 ：交换第 curr个 和 第p0个 元素，并将指针都向右移。
  - 若 nums[curr] = 2 ：交换第 curr个和第 p2个元素，并将 p2指针左移 。
  - 若 nums[curr] = 1 ：将指针curr右移。

### Java代码1

```java
class Solution {
    public void sortColors(int[] nums) {
        int len = nums.length;
        int max = Integer.MIN_VALUE;
        if (nums == null || len < 2) return;
        for (int num : nums) {
            max = Math.max(max, num);
        }
        int[] bucket = new int[max + 1];
        for (int i = 0; i < len; i++) {
            bucket[nums[i]]++;
        }
        int index = 0;
        for (int j = 0; j < bucket.length; j++) {
            while (bucket[j] > 0) {
                nums[index] = j;
                bucket[j] -= 1;
                index++;
            }
        }
    }
}
```

### Java代码2

```java
class Solution {
    //只有三种数  0 1 2
    // 直接冒泡排序  时间复杂度不符合
    // 双指针  p_0 标注 0元素的最右边   p_2 标注 2元素的最最左边
    // curr 指针，标注当前元素
    public void sortColors(int[] nums) {
        int p1 = 0;
        int p2 = nums.length-1;
        int curr = 0;
        int temp;
        while(curr<=p2){
            //如果当前元素等于0，则与P_0互换位置
            if(nums[curr]==0){
                temp = nums[p1];
                nums[p1] = nums[curr];
                nums[curr] = temp;
                curr++;
                p1++;
            }else if(nums[curr]==2){//如果当前元素等于2，则与P_2互换位置
                temp = nums[p2];
                nums[p2] = nums[curr];
                nums[curr] = temp;
                p2--;
            //因为curr左边的值已经扫描过了，所以curr要++继续扫描下一位，而与p2交换的值，curr未扫描，要停下来扫描一下，所以curr不用++
            }else{
                curr++;
            }
        }
    }
}
```



