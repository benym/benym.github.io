---
title: LeetCode-面试题68-2-二叉搜索树的最近公共祖先
date: 2020/5/29 10:35:42
description: 二叉搜索树的最近公共祖先
categories: 剑指Offer
tags:
- 二叉树
- Java
- Easy
- 剑指Offer
keywords: 二叉树,Java,Easy,剑指Offer
---

## LeetCode-面试题68-2-二叉搜索树的最近公共祖先

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]

 <!--more-->

**示例1：**

```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
```

**示例2：**

```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
```

**说明：**

- 所有节点的值都是唯一的。
- p、q 为不同节点且均存在于给定的二叉树中。

### 解题思路

递归：

如果当前节点为空或者当前节点等于p和q的其中一个，则直接返回root，符合示例2条件

如果当前节点的左右子树分别包括了p和q，那么这个节点就是最近公共祖先root

如果左子树找不到p或者q，则说明p和q都在右子树上，返回right

如果右子树找不到p或者q，则说明p和q都在左子树上，返回left

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
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root==null||root==p||root==q) return root;
        TreeNode left = lowestCommonAncestor(root.left,p,q);
        TreeNode right = lowestCommonAncestor(root.right,p,q);
        if(left==null) return right;
        if(right==null) return left;
        return root;
    }
}
```

