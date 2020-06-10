---
title: LeetCode-143-重排链表
date: 2020/6/10 20:33:33
description: 重排链表
categories: LeetCode
tags: 
- 链表
- Java
- Medium
- LeetCode
keywords: 链表,Java,Medium,LeetCode
---

## LeetCode-143-重排链表

给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 <!--more-->

**示例1：**

```
给定链表 1->2->3->4, 重新排列为 1->4->2->3.
```

**示例2：**

```
给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
```

### 解题思路

**方法1、存储+双指针：**

用一个线性表存储所有的链表元素，之后用2个指针，分别获得链表的头尾

按照规律对于1，2，3，4这样的链表例子

1之后是4，4之后是2，2之后是3

初始化头尾指针，改变头部指针的指向到尾部，并使i指向下一位

即`list.get(i).next = list.get(j);`和`i++`

改变尾部指针指向到原本头部的下一位，由于上面已经`i++`，此时线性表的i就是上一次i的下一位

所以`list.get(j).next = list.get(i);`，之后`j--`

直到i==j时跳出循环，此时i仍然与原来的链表相连，将i.next=null完成链表构建

**方法2、拆分+翻转+拼接：**

这个解法复习的内容挺多的，按照题目规律，重排链表可以分为如下3个步骤

```
1 -> 2 -> 3 -> 4 -> 5 -> 6
第一步，将链表平均分成两半
1 -> 2 -> 3
4 -> 5 -> 6
    
第二步，将第二个链表逆序
1 -> 2 -> 3
6 -> 5 -> 4
    
第三步，依次连接两个链表
1 -> 6 -> 2 -> 5 -> 3 -> 4
```

如何拆分链表，最重要的是找到拆分的中点

对于偶数链表，拆分的中点在边界左边，对于奇数链表，中点就是中间的那个

可以利用**快慢指针**来寻找中点，一个指针走2步，一个指针走1步，当快指针走到链表尾部的时候，慢指针的位置就是拆分的中点，由于奇数和偶数拆分点不一样，所以`ListNode newHead = slow.next;`和`slow.next = null;`在找到边界点之后，始终后移1位，这样保证了偶数情况下，拆分点始终是第二个链表的头部

但是对于奇数情况，则会让第一个链表始终比第二个链表多一个数字，这种情况在合并的时候进行处理。

链表的逆序思想和{% post_link LeetCode-面试题24-反转链表 %}相同

链表的合并思想和{% post_link LeetCode-面试题25-合并两个排序的链表 %}大致相同

稍微有点区别的地方是这里不是按照值进行合并

```
对于
slow  1 -> 2 -> 3
fast  4 -> 5
而言，应该先存储slow和fast的next节点
之后将slow的next变为fast，即1 -> 4
fast的next = 刚才存储的slow.next，即4 -> 2
接下来移动1位slow和fast指针，即slow = 刚才存储的slow.next，fast = 刚才存储的fast.next
```

而此时的第一个链表由于始终比第二个链表长，所以判断空的条件为`slow.next!=null&&fast!=null`，当满足此条件时，才会进行V字型拼接

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
    public void reorderList(ListNode head) {
        if (head == null) {
            return;
        }
        //存到 list 中去
        List<ListNode> list = new ArrayList<>();
        while (head != null) {
            list.add(head);
            head = head.next;
        }
        //头尾指针依次取元素
        int i = 0, j = list.size() - 1;
        while (i < j) {
            list.get(i).next = list.get(j);
            i++;
            //偶数个节点的情况，会提前相遇
            if (i == j) {
                break;
            }
            list.get(j).next = list.get(i);
            j--;
        }
        list.get(i).next = null;
    }
}
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
    public void reorderList(ListNode head) {
        if (head == null || head.next == null || head.next.next == null) {
            return;
        }
        ListNode slow = head;
        ListNode fast = head;
        while(fast!=null&&fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode newHead = slow.next;
        slow.next = null;
        fast = reversList(newHead);
        slow = head;
        while(slow.next!=null&&fast!=null){
            ListNode stemp = slow.next;
            ListNode ftemp = fast.next;
            slow.next = fast;
            fast.next = stemp;
            slow = stemp;
            fast = ftemp;
        }
    }

    public ListNode reversList(ListNode head){
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

