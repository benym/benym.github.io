---
title: LeetCode-104-二叉树的最大深度
date: 2020/6/11 19:38:36
description: 二叉树的最大深度
categories: LeetCode
tags: 
- 树
- DFS
- Java
- Easy
keywords: 树,DFS,Java,Easy
---

## LeetCode-104-二叉树的最大深度

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

**说明:** 叶子节点是指没有子节点的节点。

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

返回它的最大深度 3 。

### 解题思路

**方法1、DFS递归：**

特例：root为空直接返回0

DFS左子树深度，DFS右子树深度，树的深度=Max(左子树，右子树)+root节点

**方法2、Queue迭代：**

利用层序遍历的思想，一层一层遍历，每过一层深度+1

利用一个先进先出的Queue队列，先将root节点加入其中，当queue不为空的时候开始遍历

深度+1，弹出队列头部，判断头部的左右节点是否为空，不为空则加入其中

对于一层的节点，节点数为queue.size()，对于queue中的每个节点都需要进行左右节点的判断

当一层遍历完毕时，深度就+1

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
    public int maxDepth(TreeNode root) {
        if(root==null) return 0;
        int left = maxDepth(root.left);
        int right = maxDepth(root.right);
        return Math.max(left,right)+1;
    }
}
```

### Java代码2(迭代Queue)

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
    public int maxDepth(TreeNode root) {
        if(root==null) return 0;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int depth=0;
        while(!queue.isEmpty()){
            depth++;
            int size = queue.size();
            for(int i=0;i<size;i++){
                TreeNode temp = queue.poll();
                if(temp.left!=null){
                    queue.add(temp.left);
                }
                if(temp.right!=null){
                    queue.add(temp.right);
                }
            }
        }
        return depth;
    }
}
```

