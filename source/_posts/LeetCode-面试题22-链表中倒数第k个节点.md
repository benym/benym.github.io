---
title: LeetCode-面试题22-链表中倒数第k个节点
date: 2020/4/18 22:59:57
description: 链表中倒数第k个节点
categories: 剑指Offer
tags: 
- 链表
- Python
- Java
- Easy
- 剑指Offer
keywords: 链表,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题22-链表中倒数第k个节点

输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

 <!--more-->

**示例：**

```
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
```

### 解题思路

设置2个指针，只遍历链表一次找到倒数第k个节点，

假设有n个节点，那么倒数第k个节点就是从头结点开始的第n-k+1个节点。

第一个指针从链表的头指针开始遍历向前走k-1步，第二个指针保持不动。从第k步开始，第二个指针也开始从链表的头指针开始遍历，由于两个指针的距离保持k-1，当第一个指针到达链表的尾节点时，第二个指针正好指向倒数第k个节点。

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
    public ListNode getKthFromEnd(ListNode head, int k) {
        if(head==null||k==0)
            return head;
        ListNode phead = head;
        ListNode pbehind = null;
        for(int i = 0;i<k-1;i++){
            if(phead.next!=null)
                phead = phead.next;
            else{
                return head;
            }
        }
        pbehind = head;
        while(phead.next!=null){
            phead = phead.next;
            pbehind = pbehind.next;
        }
        return pbehind;
    }
}
```

### Python代码

```python

```

