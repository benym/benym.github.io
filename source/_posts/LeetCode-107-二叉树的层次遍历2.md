---
title: LeetCode-107-二叉树的层次遍历2
date: 2020/6/11 20:19:38
description: 二叉树的层次遍历2
categories: LeetCode
tags: 
- 树
- BFS
- Java
- Easy
keywords: 树,BFS,Java,Easy
---

## LeetCode-107-二叉树的层次遍历2

给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

<!--more-->

**示例 1:**

给定二叉树 `[3,9,20,null,null,15,7]`

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其自底向上的层次遍历为：

```
[
  [15,7],
  [9,20],
  [3]
]
```

### 解题思路

**BFS层序遍历+头插法：**

涉及到要加入数值的，不太好用递归的方法，采用迭代的方法更容易一点

使用queue队列进行层序遍历，每次弹出一个层的节点就将它加入到layer中，一层遍历完了之后

再将一层的结果加入到res的头部，最后返回回来的就是按层倒序的结果

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
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> res = new LinkedList<>();
        if(root==null) return res;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            int size = queue.size();
            List<Integer> layer = new LinkedList<>();
            for(int i=0;i<size;i++){
                TreeNode temp = queue.poll();
                layer.add(temp.val);
                if(temp.left!=null){
                    queue.add(temp.left);
                }
                if(temp.right!=null){
                    queue.add(temp.right);
                }
            }
            res.add(0,layer);
        }
        return res;
    }
}
```
