---
title: LeetCode-543-二叉树的直径
date: 2020/8/7 09:29:27
description: 二叉树的直径
categories: LeetCode
tags: 
- 树
- DFS
- Java
- Easy
keywords: 树,DFS,Java,Easy,LeetCode
---

## LeetCode-543-二叉树的直径

给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

<!--more-->

**示例1：**

给定二叉树

```
          1
         / \
        2   3
       / \     
      4   5  
```

返回 **3**, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

 

**注意：**两结点之间的路径长度是以它们之间边的数目表示。

### 解题思路

**方法1、DFS：**

1. 二叉树的直径是不一定经过root节点的，可能存在于每个子树中，所以需要遍历每个节点的左右子树深度。动态记录最大的直径
2. 直径 = max(左子树深度+右子树深度)
3. 某节点子树的深度 = max(某节点左子树深度，某节点右子树深度)+1

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
    private int res = 0;
    public int diameterOfBinaryTree(TreeNode root) {
        if(root==null) return 0;
        calDepth(root);
        return res;
    }

    public int calDepth(TreeNode root){
        if(root==null) return 0;
        int left = calDepth(root.left);
        int right = calDepth(root.right);
        res = Math.max(left+right,res);
        return Math.max(left,right)+1;
    }
}
```



