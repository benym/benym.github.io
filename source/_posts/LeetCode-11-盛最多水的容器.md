---
title: LeetCode-11-盛最多水的容器
date: 2020/6/19 14:57:16
description: 盛最多水的容器
categories: LeetCode
tags: 
- 数组
- Java
- Medium
- LeetCode
keywords: 数组,Java,Medium,LeetCode
---

## LeetCode-11-盛最多水的容器

给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

 <!--more-->

**示例 1:**

```
输入：[1,8,6,2,5,4,8,3,7]
输出：49
```

### 解题思路

**方法1、双指针：**

根据题目的意思，最大面积=左右两个内板较低的一个高度*左右两个内板的间隔

利用双指针解决，初始化首尾指针，现在的问题是怎么样去移动首尾指针，才能够使得面积最大

想象一下，无论首尾指针谁大，我们都需要移动一次首尾指针，依次判断面积谁更大，此时无论是移动首还是尾指针，底部长度的变化都是1。于是我们只需要知道，移动哪个指针能让面积增大就行了。经过思考，移动值较小的那个指针，保留值较大的指针，可以使得面积更大的概率更大。所以当其中一个指针的值小于另外一个的时候，移动那个指针即可

### Java代码

```java
class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length-1;
        int max = 0;
        while(left<right){
            max = Math.max(max,(right-left)*Math.min(height[left],height[right]));
            if(height[left]<height[right]) left++;
            else right--;
        }
        return max;
    }
}
```

