---
title: LeetCode-141-环形链表
date: 2020/6/10 16:16:00
description: 环形链表
categories: LeetCode
tags: 
- 链表
- Java
- Easy
- LeetCode
keywords: 链表,Java,Easy,LeetCode
---

## LeetCode-141-环形链表

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

 <!--more-->

**示例1：**

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例2：**

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例3：**

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

**进阶：**

你能用 *O(1)*（即，常量）内存解决此问题吗？

### 解题思路

**快慢指针：**

要找到一个链表有没有环，可以通过设置快慢指针的方式

如果快的指针赶上了慢的指针说明链表中有环，如果不存在环那么其中一个指针必定会等于null

初始化慢指针slow=head.next，如果他等于null说明链表只有一个节点，不存在环，返回false

初始化快指针fast=slow.next，当快慢指针都不为空的时候，判断是否相等，相等则有环

如果不相等，则移动慢指针1步，移动快指针2步，但快指针移动一步之后需要判断是否为null，不为null才能移动第二步，否则没有环，跳出循环返回false

### Java代码

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if(head==null) return false;
        ListNode slow = head.next;
        if(slow==null) return false;
        ListNode fast = slow.next;
        while(fast!=null&&slow!=null){
            if(fast==slow) return true;
            slow = slow.next;
            fast = fast.next;
            if(fast!=null){
                fast = fast.next;
            }
        }
        return false;
    }
}
```

