---
title: LeetCode-2-两数相加
date: 2020/6/16 10:02:43
description: 两数相加
categories: LeetCode
tags: 
- 链表
- Java
- Medium
- LeetCode
keywords: 链表,Java,Medium,LeetCode
---

## LeetCode-2-两数相加

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 <!--more-->

**示例 1:**

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

### 解题思路

**顺序推进+哑结点：**

对于本题的测试用例，不难知道有以下三种情况：

1. 两个链表长度一致
2. 两个链表长度一长一短
3. 两个链表在相加过程中产生进位，进位需要加在下一位

**特例判断**，当l1为空，直接返回l2；当l2为空，直接返回l1

新增l1，l2的指针t1，t2，方便链表的遍历；新增l3哑结点和对应指针t3，用于存储相加之后的链表

**相加流程：**

当两个链表其中一个不为空的时候，说明还没有加完；

由于相加的过程中，链表会出现一长一短的情况，所以在其中一个链表遍历完成之后，他的next就为空了，没有val值

我们可以将后续空的链表的值默认为0，这样在相加的时候就不会对后续没有遍历完的链表产生影响

所以对于t1，t2两个链表而言，他们的当前节点值是多少，可以由如下判断：

```
int x = (t1!=null)?t1.val:0;
int y = (t2!=null)?t2.val:0;
```

之后当前的和为`sum = (x+y+carry);`

**判断进位**：进位是多少可以由`sum/10`得到

**存储节点**：每个节点只能存储1位数字，多出的部分成为进位，所以`sum=sum%10`，利用哑结点的后一位建立一个新的节点`t3.next = new ListNode(sum);`

**顺序移动**t1，t2，t3，其中当t1，t2为空的时候就不再需要移动了，只需要下次用0相加即可

**新增进位节点**：如果最后遍历完毕仍然有进位，那么尾节点就是最后以进位为值的节点`t3.next = new ListNode(carry)`

**最后**返回哑结点的next就是头节点

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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if(l1==null) return l2;
        if(l2==null) return l1;
        int carry = 0;
        int sum = 0;
        ListNode t1 = l1;
        ListNode t2 = l2;
        ListNode l3 = new ListNode(0);
        ListNode t3 = l3;
        while(t1!=null||t2!=null){
            int x = (t1!=null)?t1.val:0;
            int y = (t2!=null)?t2.val:0;
            sum = (x+y+carry);
            carry = sum/10;
            sum = sum%10;
            t3.next = new ListNode(sum);
            if(t1!=null) t1 = t1.next;
            if(t2!=null) t2 = t2.next;
            t3 = t3.next;
        }
        if(carry>0) t3.next = new ListNode(carry);
        return l3.next;
    }
}
```

