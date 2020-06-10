---
title: LeetCode-142-环形链表2
date: 2020/6/10 16:43:09
description: 环形链表2
categories: LeetCode
tags: 
- 链表
- Java
- Medium
- LeetCode
keywords: 链表,Java,Medium,LeetCode
---

## LeetCode-142-环形链表2

给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

说明：不允许修改给定的链表。

 <!--more-->

**示例1：**

```
输入：head = [3,2,0,-4], pos = 1
输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例2：**

```
输入：head = [1,2], pos = 0
输出：tail connects to node index 0
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例3：**

```
输入：head = [1], pos = -1
输出：no cycle
解释：链表中没有环。
```

**进阶：**
你是否可以不用额外空间解决此题？

### 解题思路

**相关链接：**

- {% post_link LeetCode-141-环形链表 %}
- {% post_link LeetCode-面试题02.02-返回倒数第k个节点 %}

**快慢指针+双指针：**

想要在环形链表中找到入环的第一个节点，首先要判断是否有环

在有环的前提下，如果能够计算出环内的节点有多少个，那么问题就变为同返回倒数第k个节点相似的问题

让其中一个指针先走n步，之后一个指针第一个指针走完n步之后开始走

两个指针继续移动1步，当第二个指针指向环的入口节点时，第一个指针已经绕了一圈回来到达了入口节点，此时第二个指针的位置就是入口

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
    public ListNode detectCycle(ListNode head) {
        ListNode meetingNode = hasCycle(head);
        if(meetingNode==null) return null;
        int n = 1;
        ListNode temp = meetingNode;
        while(temp.next!=meetingNode){
            temp = temp.next;
            n++;
        }
        ListNode start = head;
        temp = head;
        for(int i=0;i<n;i++){
            temp = temp.next;
        }
        while(temp!=start){
            temp = temp.next;
            start = start.next;
        }
        return start;
    }
    public ListNode hasCycle(ListNode head) {
        if(head==null) return null;
        ListNode slow = head.next;
        if(slow==null) return null;
        ListNode fast = slow.next;
        while(fast!=null&&slow!=null){
            if(fast==slow) return fast;
            slow = slow.next;
            fast = fast.next;
            if(fast!=null){
                fast = fast.next;
            }
        }
        return null;
    }
}
```

