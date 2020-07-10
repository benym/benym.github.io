---
title: LeetCode-226-翻转二叉树
date: 2020/7/10 11:11:30
description: 翻转二叉树
categories: LeetCode
tags: 
- 树
- Java
- DFS
- Easy
keywords: 树,Java,DFS,Easy,LeetCode
---

## LeetCode-226-翻转二叉树

翻转一棵二叉树。

<!--more-->

**示例1：**

输入：

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

输出：

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

备注:
这个问题是受到 Max Howell 的 原问题 启发的 ：

谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

### 解题思路

**方法1、DFS递归：**

当根节点不为空的时候，交换他的左右子节点

当左子节点不为空时，继续往左子树递归遍历，进行下一层的交换

当右子节点不为空时，继续往右子树递归遍历，进行下一层的交换

**方法2、迭代：**

这个方法的思路就是，我们需要交换树中所有节点的左孩子和右孩子。

因此可以创一个队列来存储所有左孩子和右孩子还没有被交换过的节点。

开始的时候，只有根节点在这个队列里面。

只要这个队列不空，就一直从队列中出队节点，然后互换这个节点的左右孩子节点，接着再把孩子节点入队到队列，对于其中的空节点不需要加入队列。

最终队列一定会空，这时候所有节点的孩子节点都被互换过了，直接返回最初的根节点就可以了。

### Java代码

```java
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
    public TreeNode invertTree(TreeNode root) {
        if(root==null) return root;
        if(root.left==null&&root.right==null) return root;
        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;
        if(root.left!=null){
            invertTree(root.left);
        }
        if(root.right!=null){
            invertTree(root.right);
        }
        return root;
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
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if(root==null) return root;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            TreeNode node = queue.poll();
            TreeNode temp = node.left;
            node.left = node.right;
            node.right = temp;
            if(node.left!=null) queue.add(node.left);
            if(node.right!=null) queue.add(node.right);
        }
        return root;
    }
}
```





