---
title: LeetCode-23-合并K个排序链表
date: 2020/6/7 20:09:48
description: 合并K个排序链表
categories: LeetCode
tags: 
- 链表
- 分治
- Java
- Hard
keywords: 链表,分治,Java,Hard,LeetCode
---

## LeetCode-23-合并K个排序链表

合并 *k* 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

<!--more-->

**示例 1:**

```
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```

### 解题思路

相关链接：

- {% post_link LeetCode-21-合并两个有序链表 %}

方法1、分治+递归+自底向上：

利用了归并排序分治的思想，对于一组链表，如果能够将每个链表两两拆分，那么问题就会简化为对两个链表的合并，合并之后的两两链表变为一个链表，再和另外一组已经合并成一个的链表合并，这个是自底向上的过程。

两个链表的合并过程与LeetCode21一致，所以本题只需要研究如何进行链表划分，并判断返回条件

- 返回条件：

  当链表长度为空，返回null；

  当链表长度为1，返回list[0];

  当链表长度为2，需要返回两个链表的合并

- 链表划分：

  直接进行二分即可，mid左边的给l1数组，用于存储左边的一组链表；mid右边的给l2数组，用于存储右边的一组链表

- 开启递归：

  拆分左边的多组链表，并进行合并；

  拆分右边的多组链表，并进行合并；

  返回：最后的左右链表的合并

方法2、顺序遍历：

这种方法就是暴力破解，一个一个遍历链表组中的链表，然后进行合并即可，最终返回的就是顺序排序的合并链表

方法3、优先队列：

前提知识：

优先队列本身由最小堆实现，对于基础类型不需要重写Comparator接口，就可以实现默认加入数据之后队列是从小到大排序。在本题中，需要将链表从小到大的放入优先队列中，链表不是基础类型，所以需要重写Comparator接口将原本的v1.compareTo(v2)比较转化为v1.val和v2.val分别代表链表中的头结点值。这里采用匿名函数的实现方式

在Comparator接口中，排序的判断依据如下：

- 如果v1>v2，return 1
- 如果v1<v2，return -1
- 如果v1==v2，return 0

题目思路：

将所有链表的头结点放进去，由于是最小堆，所以每次就让队列中最小的出队，操作为pq.poll()，之后让出队的节点的下一个节点入队，再出队优先队列中的最小值，直到队列为空

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
    public ListNode mergeKLists(ListNode[] lists) {
        if(lists.length == 0) return null;
        if(lists.length == 1) return lists[0];
        if(lists.length == 2) return mergeTwoLists(lists[0],lists[1]);
        int mid = lists.length/2;
        ListNode[] l1 = new ListNode[mid];
        for(int i=0;i<mid;i++){
            l1[i] = lists[i];
        }
        ListNode[] l2 = new ListNode[lists.length-mid];
        for(int i=mid,j=0;i<lists.length;i++,j++){
            l2[j] = lists[i];
        }
        return mergeTwoLists(mergeKLists(l1),mergeKLists(l2));
    }

    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if(l1==null) return l2;
        if(l2==null) return l1;
        ListNode mergehead = null;
        if(l1.val<l2.val){
            mergehead = l1;
            mergehead.next = mergeTwoLists(l1.next,l2);
        }else{
            mergehead = l2;
            mergehead.next = mergeTwoLists(l1,l2.next);
        }
        return mergehead;
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
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        ListNode res = null;
        for(int i=0;i<lists.length;i++){
            res = mergeTwoLists(res,lists[i]);
        }
        return res;
    }

    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if(l1==null) return l2;
        if(l2==null) return l1;
        ListNode mergehead = null;
        if(l1.val<l2.val){
            mergehead = l1;
            mergehead.next = mergeTwoLists(l1.next,l2);
        }else{
            mergehead = l2;
            mergehead.next = mergeTwoLists(l1,l2.next);
        }
        return mergehead;
    }
}
```

### Java代码3

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
    public ListNode mergeKLists(ListNode[] lists) {
        if(lists.length==0) return null;
        Queue<ListNode> pq = new PriorityQueue<>((v1, v2) -> v1.val - v2.val);
        ListNode head = new ListNode(0);
        ListNode cur = head;
        for(ListNode list:lists){
            if(list!=null)
                pq.offer(list);
        }
        while(!pq.isEmpty()){
            ListNode minNode = pq.poll();
            cur.next = minNode;
            cur = cur.next;
            if(minNode.next!=null){
                pq.offer(minNode.next);
            }
        }
        return head.next;
    }
}
```





