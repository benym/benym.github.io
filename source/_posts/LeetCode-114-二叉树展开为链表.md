---
title: LeetCode-114-二叉树展开为链表
date: 2020/7/14 13:55:35
description: 二叉树展开为链表
categories: LeetCode
tags: 
- 树
- Java
- Medium
keywords: 树,Java,Medium,LeetCode
---

## LeetCode-114-二叉树展开为链表

给定一个二叉树，原地将它展开为一个单链表。

<!--more-->

例如，给定二叉树

```
    1
   / \
  2   5
 / \   \
3   4   6
```

将其展开为：

```
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
```

### 解题思路

**方法1、递归：**

先将根节点的左子树变成链表，之后将根节点的右子树变成链表

最后将变成链表的右子树放在变成链表的左子树的最右边

**方法2、迭代：**

从右至左的先序遍历，用一个栈来存储节点，先存储右节点后存储左节点，同时需要一个pre指针指向上一个节点，用于拼接前一个节点和当前节点

当栈中弹出节点时，当前节点始终是拼接在前一个节点的右侧，于是`pre.left=null`、`pre.right=temp`,当当前节点temp右子节点不为空时，右子节点入栈，当左子节点不为空时，左子节点入栈。完成当前节点的左右子节点遍历，前一个节点变为链表中当前节点即`pre=pre.right`

### Java代码1

```java
class Solution {
    public void flatten(TreeNode root) {
        if(root == null){
            return ;
        }
        //将根节点的左子树变成链表
        flatten(root.left);
        //将根节点的右子树变成链表
        flatten(root.right);
        TreeNode temp = root.right;
        //把树的右边换成左边的链表
        root.right = root.left;
        //记得要将左边置空
        root.left = null;
        //找到树的最右边的节点
        while(root.right != null) root = root.right;
        //把右边的链表接到刚才树的最右边的节点
        root.right = temp;
    }
}
```

### Java代码2

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public void flatten(TreeNode root) {
        if(root==null) return;
        Stack<TreeNode> stack = new Stack<>();
        stack.add(root);
        TreeNode pre = new TreeNode(-1);
        while(!stack.isEmpty()){
            TreeNode temp = stack.pop();
            pre.left = null;
            pre.right = temp;
            if(temp.right!=null){
                stack.add(temp.right);
            }
            if(temp.left!=null){
                stack.add(temp.left);
            }
            pre = pre.right;
        }
    }
}
```





