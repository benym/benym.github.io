---
title: LeetCode-面试题52-两个链表的第一个公共节点
date: 2020/5/12 12:55:26
description: 两个链表的第一个公共节点
categories: 剑指Offer
tags:
- 链表
- Java
- Python
- Easy
- 剑指Offer
keywords: 链表,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题52-两个链表的第一个公共节点 

输入两个链表，找出它们的第一个公共节点。

 <!--more-->

**示例1：**

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

**示例2：**

```
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

**示例3：**

```
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。
```

**说明：**

- 如果两个链表没有交点，返回 null.
- 在返回结果后，两个链表仍须保持原有的结构。
- 可假定整个链表结构中没有循环。
- 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

### 解题思路

方法1、双指针+先遍历：

因为链表一长一短，所以先让长的一方走到和短的一方开始的位置，然后用双指针同时进行遍历，出现第一个相同的节点时就返回对应指针

方法2、双指针+重置：

同样是双指针，因为一长一短的关系，有一个指针会先到达末尾，当第一个指针pA先到末尾时，将他重置到链表B的开始位置，当第二个指针pB到达末尾时，将他重置到链表A开始的位置。由于有一个先到达先重置，在等待第二个指针走到末尾的过程中，先达到的指针pA将会走这段A比B多出的长度。这样当第二个指针重置时，两个指针都在一个位置开始，之后遍历到相同的节点返回即可

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
        int lenA = getTreelen(headA);
        int lenB = getTreelen(headB);
        int firstStep = Math.abs(lenA-lenB);
        ListNode pLong = headA;
        ListNode pShort = headB;
        if(lenA<lenB){
            pLong = headB;
            pShort = headA;
        }
        // 长的先走几步
        for(int i=0;i<firstStep;i++){
            pLong = pLong.next;
        }
        while(pLong!=null&&pShort!=null&&pLong!=pShort){
            pLong = pLong.next;
            pShort = pShort.next;
        }
        return pLong;
    }
    public int getTreelen(ListNode head){
        int lenTree = 0;
        while(head!=null){
            lenTree++;
            head = head.next;
        }
        return lenTree;
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
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        node1, node2 = headA, headB
        while node1 != node2:
            node1 = node1.next if node1 else headB
            node2 = node2.next if node2 else headA
        return node1
```