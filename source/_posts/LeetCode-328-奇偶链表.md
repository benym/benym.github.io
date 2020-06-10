---
title: LeetCode-328-奇偶链表
date: 2020/6/10 15:14:20
description: 奇偶链表
categories: LeetCode
tags: 
- 链表
- Java
- Medium
- LeetCode
keywords: 链表,Java,Medium,LeetCode
---

## LeetCode-328-奇偶链表

给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

 <!--more-->

**示例 1:**

```
输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
```

**示例2：**

```
输入: 2->1->3->5->6->4->7->NULL 
输出: 2->3->6->7->1->5->4->NULL
```

**说明:**

- 应当保持奇数节点和偶数节点的相对顺序。
- 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。

### 解题思路

**双指针：**

一个指针指向奇数节点，一个指针指向偶数节点

间隔遍历，奇数指针只能指向奇数节点，偶数指针只能指向偶数节点

对于链表长度为奇数时，奇数指针one能够指向之后一个数字，此时偶数指针two==null，作为循环结束条件

对于链表长度为偶数时，奇数指针one会在之前遍历完毕奇数位置，此时偶数指针two.next==null，作为循环结束条件

最后进行奇偶链表拼接，one.next=tempTwo

注意：间隔遍历很重要，如果按照顺序遍历，会出现one和two指针在奇偶长度的指向不一样，即one和two在快到链表末尾时候，可能指向的奇数链表也可能指向的偶数链表，这样就无法进行最后指针拼接的判断了，**间隔遍历保证了指针的奇偶性**

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
    public ListNode oddEvenList(ListNode head) {
        if(head==null) return head;
        ListNode one = head;
        ListNode two = head.next;
        ListNode tempTwo = two;
        while(two!=null&&two.next!=null){
            one.next = two.next;
            one = one.next;
            two.next = one.next;
            two = two.next;
        }
        one.next = tempTwo;
        return head;
    }
}
```



