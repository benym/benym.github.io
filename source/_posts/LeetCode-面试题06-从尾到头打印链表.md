---
title: LeetCode-面试题06-从尾到头打印链表
date: 2020/4/3 17:54:23
description: 从尾到头打印链表
categories: 剑指Offer
tags: 
- 链表
- 剑指Offer
- Java
- python
- Easy
keywords: 链表,Java,python,Easy,剑指Offer
---

## LeetCode-面试题06-从尾到头打印链表

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 <!--more-->

**示例:**

```
输入：head = [1,3,2]
输出：[2,3,1]
```

### 解题思路

用ArryList或者Stack都可以，先进后出本身就是栈的特点，这里就直接用栈来做了。还有一种思路是递归，但是递归的问题就在于链表长了之后，层级过深会引起StackOverFlowerror，也就是栈溢出。

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
    public int[] reversePrint(ListNode head) {
        Deque<Integer> stack = new LinkedList<>();
        ListNode node = head;
        while (node != null) {
            stack.push(node.val);
            node = node.next;
        }
        int size = stack.size();
        int[] result = new int[size];
        for (int i = 0; i < size; i++) {
            result[i] = stack.pop();
        }
        return result;
    }
}
```

### Python代码

```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reversePrint(self, head):
        """
        :type head: ListNode
        :rtype: List[int]
        """
        result = []
        node = head
        while (node):
            result.append(node.val)
            node = node.next
        return result[::-1]
```

