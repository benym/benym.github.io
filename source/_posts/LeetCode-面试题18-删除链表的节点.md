---
title: LeetCode-面试题18-删除链表的节点
date: 2020/4/15 18:07:21
description: 删除链表的节点
categories: 剑指Offer
tags: 
- 链表
- Java
- python
- Easy
- 剑指Offer
keywords: 链表,Java,python,Easy,剑指Offer
---

## LeetCode-面试题18-删除链表的节点

给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

 <!--more-->

**示例1**

```
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

**示例2**

```
输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```

**说明:**

- 题目保证链表中节点的值互不相同
- 若使用 C 或 C++ 语言，你不需要 `free` 或 `delete` 被删除的节点

### 解题思路

没有O(1)的时间复杂度要求，顺序查找，头结点是查找值直接返回，如果不是则继续找，指针指向查找数的前一个位置，如果没有找完了都没有找到，循环依然是要跳出的，此时res.next==null，就不需要对链表进行修改，所以只有！=null的时候才有删除操作

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
    public ListNode deleteNode(ListNode head, int val) {
        if (head == null) {
            return head;
        }
        if (head.val == val) {
            return head.next;
        }
        ListNode res = head;
        while(res.next!=null&&res.next.val!=val){
            res = res.next;
        }
        if(res.next!=null){
            res.next = res.next.next;
        }
        return head;
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
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        if head.val == val: return head.next
        res = head
        while res.next and res.next.val!=val:
            res = res.next
        if res.next:
            res.next = res.next.next
        return head
```

