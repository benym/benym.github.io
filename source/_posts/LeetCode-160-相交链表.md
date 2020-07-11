---
title: LeetCode-160-相交链表
date: 2020/7/11 10:43:04
description: 相交链表
categories: LeetCode
tags: 
- 链表
- Java
- Easy
keywords: 链表,Java,Easy,LeetCode
---

## LeetCode-160-相交链表

编写一个程序，找到两个单链表相交的起始节点。

如下面的两个链表**：**

```
      a1--->a2
             \
              \
               c1--->c2--->c3
              / 
             /  
b1--->b2--->b3               
```

在节点c1开始相交

<!--more-->

**示例1：**

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

**示例2：**

```
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

**示例3：**

```
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。
```

注意：

- 如果两个链表没有交点，返回 null.
- 在返回结果后，两个链表仍须保持原有的结构。
- 可假定整个链表结构中没有循环。
- 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

### 解题思路

**方法1、快慢指针：**

短链表的指针会先到达链表末尾，称为快指针，此时将短链表指针指向长链表头部，

当短链表到达末尾时，长链表还剩的节点就是长短链表的相差的个数n，

这个时候短链表和长链表继续向前走，当长链表的慢指针到达尾部的时候，快指针就会从长链表头部走n步，此时再将慢指针变为短链表头部，就能够使得长短链表开始的头部位置相同

继续往下遍历直到链表头部值相等，如果找完了都不相等则返回null

### Java代码

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if(headA==null||headB==null) return null;
        ListNode tempA = headA;
        ListNode tempB = headB;
        while(tempA!=tempB){
            if(tempA!=null){
                tempA = tempA.next;
            }else{
                tempA = headB;
            }
            if(tempB!=null){
                tempB = tempB.next;
            }else{
                tempB = headA;
            }
        }
        return tempA;
    }
}
```







