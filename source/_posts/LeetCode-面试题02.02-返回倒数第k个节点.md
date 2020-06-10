---
title: LeetCode-面试题02.02-返回倒数第k个节点
date: 2020/6/10 15:28:54
description: 返回倒数第k个节点
categories: LeetCode
tags: 
- 链表
- Java
- Easy
- LeetCode
keywords: 链表,Java,Easy,LeetCode
---

## LeetCode-面试题02.02-返回倒数第k个节点

实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

**注意：**本题相对原题稍作改动

 <!--more-->

**示例 1:**

```
输入： 1->2->3->4->5 和 k = 2
输出： 4
```

**说明：**

- 给定的 *k* 保证是有效的。

### 解题思路

**双指针：**

根据链表的性质，要获得倒数第k个节点，就等于求n-(k-1)个节点，

但这需要知道链表的长度，意味着需要两次遍历链表。

换一种想法，想要知道倒数第k个节点，那么就让一个指针先走k-1步，另外一个指针始终和第一个指针保持k-1的距离

当第一个指针到达链表结尾时，第二个指针则正好在n-(k-1)的位置，只需要一次遍历即可完成

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
    public int kthToLast(ListNode head, int k) {
        if(head==null) return 0;
        ListNode fast = head;
        ListNode low = null;
        for(int i=0;i<k-1;i++){
            fast = fast.next;
        }
        low = head;
        while(fast.next!=null){
            fast = fast.next;
            low = low.next;
        }
        return low.val;
    }
}
```



