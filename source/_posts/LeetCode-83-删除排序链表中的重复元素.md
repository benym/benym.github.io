---
title: LeetCode-83-删除排序链表中的重复元素
date: 2020/4/15 18:22:08
description: 删除排序链表中的重复元素
categories: 链表
tags: 
- 链表
- Java
- Python
- Easy
keywords: 链表,Java,Python,Easy
---

## LeetCode-83-删除排序链表中的重复元素

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

<!--more-->

**示例 1:**

```
输入: 1->1->2
输出: 1->2
```

**示例 2:**

```
输入: 1->1->2->3->3
输出: 1->2->3
```

### 解题思路

初始化1个指针，指向头部，判断后一个数和前一个是不是相等，相等则要把后面一个数覆盖前面一个数，当发现不相等时，cur指针顺移1位，即对于1、1、2、3、3这样的数据，cur会将后一个重复的数字替换前一个重复数字，当重复数字之后一位数不和当前相等时，cur指针改变指向到下一个数，再进行重复判断。

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
    public ListNode deleteDuplicates(ListNode head) {
        if(head==null||head.next==null) return head;
        ListNode cur = head;
        while(cur.next!=null){
            if(cur.next.val==cur.val){
                cur.next = cur.next.next;
            }
            else{
                cur = cur.next;
            }
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
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        cur = head;
        while cur and cur.next:
            if cur.next.val==cur.val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return head

```

