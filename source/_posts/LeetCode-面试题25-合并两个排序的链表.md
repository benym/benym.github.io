---
title: LeetCode-面试题25-合并两个排序的链表
date: 2020/4/19 18:18:16
description: 合并两个排序的链表
categories: 剑指Offer
tags: 
- 链表
- Python
- Java
- Easy
- 剑指Offer
keywords: 链表,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题25-合并两个排序的链表

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

 <!--more-->

**示例：**

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

**限制：**

`0 <= 链表长度 <= 1000`

### 解题思路

总共需要3个指针，一个指向链表1，一个指向链表2，一个指向头结点

首先判断两个链表的值，小的头部赋值给MergeHead，然后进行下一步的递归判断，在合并的过程中可能出现链表长短不一的情况，如果l2链表为空返回l1剩下的头部，如果l1链表为空，返回l2剩下的头部

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
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if(l1==null)
            return l2;
        else if(l2==null)
            return l1;
        ListNode MergeHead = null;
        if(l1.val>l2.val){
            MergeHead = l2;
            MergeHead.next = mergeTwoLists(l1,l2.next);
        }
        else{
            MergeHead = l1;
            MergeHead.next = mergeTwoLists(l1.next,l2);
        }
        return MergeHead;
    }
}
```

### Python代码

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1: return l2
        elif not l2: return l1
        MergeHead = None
        if l1.val<l2.val:
            MergeHead = l1
            MergeHead.next = self.mergeTwoLists(l1.next,l2)
        else:
            MergeHead = l2
            MergeHead.next = self.mergeTwoLists(l1,l2.next)
        return MergeHead
```

