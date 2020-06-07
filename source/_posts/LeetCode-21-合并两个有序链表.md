---
title: LeetCode-21-合并两个有序链表
date: 2020/6/7 19:00:23
description: 合并两个有序链表
categories: LeetCode
tags: 
- 链表
- Java
- Python
- Easy
keywords: 链表,Java,Python,Easy,LeetCode
---

## LeetCode-21-合并两个有序链表

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

<!--more-->

**示例 1:**

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

### 解题思路

方法一、递归：

首先，两个链表存在长短不一致的情况

递归终止条件：当链表1为空时，合并的链表为链表2；当链表2为空时，合并的链表为链表1

之后，链表需要从小到大的有序合并

新增一个合并后链表的头部指针，判断l1和l2的链表的当前位置值谁更小，小的加入到合并链表中，之后合并链表的next就是剩下的两个链表中的最小值。

最后返回合并链表头部

方法二、迭代：

迭代的思路大致和递归一样，但需要一个新的指针，pre记录当前位置的前一个元素，并不断调整他的next指向构建整个合并链表，phead负责合并链表的头部。

如果l1.val<l2.val则，把l1接在pre的后面，同时l1指针向后移动1位。否则就对l2做相同操作

不管将l1和l2中的哪个元素接在了pre后面，pre指针始终需要向后移动1位，因为接了之后next就不为空了，需要移动到下一位继续构建链表

在循环终止的时候，l1和l2可能出现长短不一的情况，至多会有一个是非空的，由于输入的链表都是有序的，所以不管是哪个链表是非空的，它包含的所有元素都比前面已经合并链表中的元素要大，此时只需要将剩下的链表接在pre.next，之后返回合并链表的头部即可

### Java代码

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if(l1==null) return l2;
        if(l2==null) return l1;
        ListNode mergehead = null;
        if(l1.val<l2.val){
            mergehead = l1;
            mergehead.next = mergeTwoLists(l1.next,l2);
        }else{
            mergehead = l2;
            mergehead.next = mergeTwoLists(l1,l2.next);
        }
        return mergehead;
    }
}
```

### Python代码

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1: return l2
        if not l2: return l1
        if l1.val<l2.val:
            mergeHead = l1
            mergeHead.next = self.mergeTwoLists(l1.next,l2)
        else:
            mergeHead = l2
            mergeHead.next = self.mergeTwoLists(l1,l2.next)
        return mergeHead
```

### Java代码2

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if(l1==null) return l2;
        if(l2==null) return l1;
        ListNode phead = new ListNode(0);
        ListNode pre = phead;
        while(l1!=null&&l2!=null){
            if(l1.val<l2.val){
                pre.next = l1;
                l1 = l1.next;
            }else{
                pre.next = l2;
                l2 = l2.next;
            }
            pre = pre.next;
        }
        if(l1==null) pre.next = l2;
        if(l2==null) pre.next = l1;
        return phead.next;
    }
}
```

