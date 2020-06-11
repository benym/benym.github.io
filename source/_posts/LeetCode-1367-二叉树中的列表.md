---
title: LeetCode-1367-二叉树中的列表
date: 2020/6/11 16:38:13
description: 二叉树中的列表
categories: LeetCode
tags: 
- 树
- DFS
- Java
- Medium
keywords: 树,DFS,Java,Medium
---

## LeetCode-1367-二叉树中的列表

给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。

如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，那么请你返回 True ，否则返回 False 。

一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。

<!--more-->

**示例 1:**

```
输入：head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
输出：true
解释：树中蓝色的节点构成了与链表对应的子路径。
```

**示例 2:**

```
输入：head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
输出：true
```

 **示例3：**

```
输入：head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
输出：false
解释：二叉树中不存在一一对应链表的路径。
```

**提示:**

- 二叉树和链表中的每个节点的值都满足 1 <= node.val <= 100 。
- 链表包含的节点数目在 1 到 100 之间。
- 二叉树包含的节点数目在 1 到 2500 之间。

### 解题思路

**DFS递归：**

根据题意知道，head的长度<=root

我们可以设计一个递归函数，如果head==null说明匹配完成，返回true，如果root==null则说明找完了也没有匹配上

首先开启root节点的递归，判断开始的路径是否和head匹配，如果匹配则进一步看是这个节点的左子树匹配？还是这个节点的右子树匹配。任意一个子树匹配成功则算匹配成功。

如果root节点匹配失败，那么需要看root节点的左子树或者root节点的右子树是否能够匹配，分别开启DFS遍历，左右子树应该和root节点进行一样的匹配，同样需要看左子节点的左右节点和右子节点的左右节点到底是哪一个匹配的

当根节点或者左右子树任意一个匹配成功，则说明包含路径，即`dfs(head,root)||isSubPath(head,root.left)||isSubPath(head,root.right)`

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
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isSubPath(ListNode head, TreeNode root) {
        if(head==null) return true;
        if(root==null) return false;
        // 先判断当前的节点，如果不对，就看看左子树和右子树
        return dfs(head,root)||isSubPath(head,root.left)||isSubPath(head,root.right);
    }

    public boolean dfs(ListNode head,TreeNode root){
        // 如果链表没了，那就说明匹配完了
        if(head==null) return true;
        // 如果链表没完，树走完了，那就是没匹配上
        if(root==null) return false;
        // 如果值不同，那肯定也是没匹配上
        if(head.val!=root.val) return false;
        // 如果值相同，就继续看看左边右边是不是有相同的
        return dfs(head.next,root.left)||dfs(head.next,root.right);
    }
}
```
