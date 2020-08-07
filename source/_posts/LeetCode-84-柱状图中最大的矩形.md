---
title: LeetCode-84-柱状图中最大的矩形
date: 2020/8/7 10:13:52
description: 柱状图中最大的矩形
categories: LeetCode
tags: 
- 数组
- Java
- Hard
keywords: 数组,Java,Hard,LeetCode
---

## LeetCode-84-柱状图中最大的矩形

给定 *n* 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 `[2,1,5,6,2,3]`。

图中阴影部分为所能勾勒出的最大矩形面积，其面积为 `10` 个单位。

<!--more-->

**示例1：**

```
输入: [2,1,5,6,2,3]
输出: 10
```

### 解题思路

**方法1、暴力破解：**

固定一个柱子的高度，往左和右寻找第一个高度小于当前柱子的柱体，向左和向右走的步数即是宽度

对于每个柱子，都计算一次以当前柱子为高度，左右寻找位置为宽度围成的矩形面积，最后得到最大的面积即可

**方法2、单调栈：**

我们可以 O(1) 的获取柱体 i 左边第一个比它小的柱体吗？答案就是单调增栈，因为对于栈中的柱体来说，栈中下一个柱体就是左边第一个高度小于自身的柱体。

视频详解https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/zhu-zhuang-tu-zhong-zui-da-de-ju-xing-by-leetcode-/

**方法3、单调栈+哨兵：**

视频详解https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/zhu-zhuang-tu-zhong-zui-da-de-ju-xing-by-leetcode-/

### Java代码1

```java
class Solution {
    public int largestRectangleArea(int[] heights) {
        int area = 0;
        int len = heights.length;
        for(int i=0;i<len;i++){
            int width = 1;
            int height = heights[i];
            int j = i;
            while(--j>=0&&heights[j]>=height){
                width++;
            }
            j = i;
            while(++j<len&&heights[j]>=height){
                width++;
            }
            area = Math.max(area,width*height);
        }
        return area;
    }
}
```

### Java代码2

```java
class Solution {
    public int largestRectangleArea(int[] heights) {
        int area = 0;
        int len = heights.length;
        if (len == 0) {
            return 0;
        }
        if (len == 1) {
            return heights[0];
        }
        Deque<Integer> stack = new ArrayDeque<Integer>();
        for (int i = 0; i < len; i++) {
            while(!stack.isEmpty()&&heights[stack.peekLast()]>heights[i]){
                int height = heights[stack.removeLast()];
                while(!stack.isEmpty()&&heights[stack.peekLast()]==height){
                    stack.removeLast();
                }
                int width;
                if(stack.isEmpty()){
                    width = i;
                }else {
                    width = i-stack.peekLast()-1;
                }
                area = Math.max(area,width*height);
            }
            stack.addLast(i);
        }

        while(!stack.isEmpty()){
            int height = heights[stack.removeLast()];
            while(!stack.isEmpty()&&heights[stack.peekLast()]==height){
                stack.removeLast();
            }
            int width;
            if(stack.isEmpty()){
                width = len;
            }else {
                width = len-stack.peekLast()-1;
            }
            area = Math.max(area,width*height);
        }
        return area;
    }
}
```

### Java代码3

```java
class Solution {
    public int largestRectangleArea(int[] heights) {
        int area = 0;
        int len = heights.length;
        if (len == 0) {
            return 0;
        }
        if (len == 1) {
            return heights[0];
        }
        int[] newHeights = new int[len + 2];
        for (int i = 0; i < len; i++) {
            newHeights[i + 1] = heights[i];
        }
        len += 2;
        heights = newHeights;
        Deque<Integer> stack = new ArrayDeque<Integer>();
        stack.addLast(0);
        for (int i = 0; i < len; i++) {
            while (heights[stack.peekLast()] > heights[i]) {
                int height = heights[stack.removeLast()];
                int width = i - stack.peekLast() - 1;
                area = Math.max(area, width * height);
            }
            stack.addLast(i);
        }
        return area;
    }
}
```



