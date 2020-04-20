---
title: LeetCode-面试题24-反转链表
date: 2020/4/19 17:44:28
description: 反转链表
categories: 剑指Offer
tags: 
- 链表
- Python
- Java
- Easy
- 剑指Offer
keywords: 链表,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题24-反转链表

定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

 <!--more-->

**示例：**

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

**限制：**

`0 <= 节点个数 <= 5000`

### 解题思路

总共需要3个指针，一个指向当前节点，一个指向前一个节点，一个指向后一个节点

局部反转，将当前节点的后一个节点保存在temp指针里，改变cur指向前一个位置pre，然后向后移动一位pre和cur

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
    public ListNode reverseList(ListNode head) {
        if(head==null||head.next==null)
            return head;
        ListNode pre = null;
        ListNode cur = head;
        while(cur!=null){
            ListNode temp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = temp;
        }
        return pre;
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
    def reverseList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        pre , cur = None,head
        while cur:
            temp = cur.next
            cur.next = pre
            pre = cur
            cur = temp
        return pre
```

