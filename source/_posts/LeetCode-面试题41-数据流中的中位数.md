---
title: LeetCode-面试题41-数据流中的中位数
date: 2020/5/4 18:37:01
description: 数据流中的中位数
categories: 剑指Offer
tags: 
- 数组
- Java
- Hard
- 剑指Offer
keywords: 数组,Java,Hard,剑指Offer
---

## LeetCode-面试题41-数据流中的中位数 

如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

- void addNum(int num) - 从数据流中添加一个整数到数据结构中。

- double findMedian() - 返回目前所有元素的中位数。

 <!--more-->

**示例1：**

```
输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
```

**示例2：**

```
输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]
```

**限制：**

- 最多会对 `addNum、findMedia`进行 `50000` 次调用。

### 解题思路

最大堆+最小堆：

可以看作最大堆是普通班，最小堆是实验班。数量上时刻保持小顶-大顶<=1（两堆相等或者小顶比大顶多一个）。

新学生先入普通班（最大堆），此时可能会失去平衡了，于是取最大堆的第一个（班里最好的学生）加入实验班（最小堆），判断若数量过多（不是等于或多一个），取第一个（实验班里最差的学生）到普通班（最大堆）里。 取中位数的时候，若两堆数量相等，则各取堆顶取平均，若小顶比大顶多一，则多的那一个就是中位数。

### Java代码

```java
class MedianFinder {
    Queue<Integer> left;
    Queue<Integer> right;
    /** initialize your data structure here. */
    public MedianFinder() {
        left = new PriorityQueue<>((n1,n2)->n2-n1); // 最大堆
        right = new PriorityQueue<>(); // 最小堆
    }
    
    public void addNum(int num) {
        // 先插入最大堆
        left.offer(num);
        // 之后把最大堆的最大的数字，拿出来给最小堆
        right.offer(left.poll());
        // 数组数目是奇数时，且小堆比大堆多时，需要平衡
        // 小堆的堆顶拿出来给最大堆
        if(right.size()>left.size())
            left.offer(right.poll());
        
    }
    
    public double findMedian() {
        // 如果最大堆大于最小堆个数，即数组是奇数，返回最大堆堆顶
        // 如果是偶数，则是（最大堆堆顶+最小堆堆顶 ）/ 2
        if(left.size()>right.size()) return left.peek();
        else return (left.peek()+right.peek())/2.0;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */
```
