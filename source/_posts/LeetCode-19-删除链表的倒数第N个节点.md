---
title: LeetCode-19-删除链表的倒数第N个节点
date: 2020/6/26 16:38:24
description: 删除链表的倒数第N个节点
categories: LeetCode
tags: 
- 链表
- Java
- Medium
keywords: 链表,Java,Medium,LeetCode
---

## LeetCode-19-删除链表的倒数第N个节点

给定一个链表，删除链表的倒数第 *n* 个节点，并且返回链表的头结点。

<!--more-->

**示例 1:**

```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

**说明：**

给定的 *n* 保证是有效的。

**进阶：**

你能尝试使用一趟扫描实现吗？

### 解题思路

**方法1、双指针：**

两次遍历是一定能找到的，但是这样复杂度比较高，所以直接能想到的是使用双指针来进行操作，一次遍历即可完成

快指针先走n+1步，之后慢指针和快指针一起走

当快指针走到末尾时，慢指针刚好指向要删除节点的前一个节点，改变指向就可以完成节点删除。

其中需要初始化1个哑结点作为辅助，该节点位于列表头部，用来简化某些特例，比如列表中只含有一个节点，或者需要删除列表的头部。

快指针和慢指针的间隔始终是n

### Java代码

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode cur = dummy;
        ListNode pre = dummy;
        for (int i = 0; i <n+1; i++) {
            cur = cur.next;
        }
        while (cur != null) {
            cur = cur.next;
            pre = pre.next;
        }
        pre.next = pre.next.next;
        return dummy.next;
    }
}
```
