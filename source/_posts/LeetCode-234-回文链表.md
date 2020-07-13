---
title: LeetCode-234-回文链表
date: 2020/7/13 14:28:47
description: 回文链表
categories: LeetCode
tags: 
- 链表
- Java
- Easy
keywords: 链表,Java,Easy,LeetCode
---

## LeetCode-234-回文链表

请判断一个链表是否为回文链表。

<!--more-->

**示例1：**

```
输入: 1->2
输出: false
```

**示例2：**

```
输入: 1->2->2->1
输出: true
```

**进阶：**
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

### 解题思路

**方法1、快慢指针+反转链表：**

1. 先通过快慢指针找到链表中点

   奇偶情况不同，奇数情况应该跳过中心节点，偶数情况中心节点为2个，需要翻转的的位置仍然是slow.next开始

2. 之后进行后半部分的链表反转

3. 反转完成之后分别从链表的头部开始遍历匹配，当两个链表都不为空的时候，不断移动两端指针比较指针的值是否相等

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
    public boolean isPalindrome(ListNode head) {
        if(head==null||head.next==null) return true;
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode fast = dummy;
        ListNode slow = dummy;
        while(fast!=null&&fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode head2 = reverseLink(slow.next);
        slow.next = null;
        while(head!=null&&head2!=null){
            if(head.val!=head2.val){
                return false;
            }else{
                head = head.next;
                head2 = head2.next;
            }
        }
        return true;
    }

    public ListNode reverseLink(ListNode head){
        if(head==null||head.next==null) return head;
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







