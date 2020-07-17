---
title: LeetCode-206-反转链表
date: 2020/7/17 13:23:02
description: 反转链表
categories: LeetCode
tags: 
- 链表
- Java
- Easy
keywords: 链表,Java,Easy,LeetCode
---

## LeetCode-206-反转链表

反转一个单链表。

<!--more-->

**示例1：**

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

**进阶:**
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

### 解题思路

**方法1、迭代：**

利用pre指针指向null，并利用cur指针存储head节点，当cur不为空的时候

临时存储cur.next，因为要改变指向，将cur.next指向pre，将pre移动到cur的位置，将cur移动到cur.next即temp

最后返回pre即可

**方法2、递归：**

递归方法不容易理解，详见https://leetcode-cn.com/problems/reverse-linked-list/solution/dong-hua-yan-shi-206-fan-zhuan-lian-biao-by-user74/中的幻灯片演示

### Java代码1

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

### Java代码2

```java
class Solution {
	public ListNode reverseList(ListNode head) {
		//递归终止条件是当前为空，或者下一个节点为空
		if(head==null || head.next==null) {
			return head;
		}
		//这里的cur就是最后一个节点
		ListNode cur = reverseList(head.next);
		//这里请配合动画演示理解
		//如果链表是 1->2->3->4->5，那么此时的cur就是5
		//而head是4，head的下一个是5，下下一个是空
		//所以head.next.next 就是5->4
		head.next.next = head;
		//防止链表循环，需要将head.next设置为空
		head.next = null;
		//每层递归函数都返回cur，也就是最后一个节点
		return cur;
	}
}
```




