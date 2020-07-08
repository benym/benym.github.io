---
title: LeetCode-199-二叉树的右视图
date: 2020/7/8 11:14:52
description: 二叉树的右视图
categories: LeetCode
tags: 
- 树
- Java
- BFS
- DFS
- Medium
keywords: 树,Java,BFS,DFS,Medium,LeetCode
---

## LeetCode-199-二叉树的右视图

给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

<!--more-->

**示例1：**

```
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```

### 解题思路

**方法1、Queue迭代+BFS：**

按照层序遍历的思想，利用一个Queue进行迭代，在层序遍历的时候优先加入右节点，按根右左的顺序遍历二叉树

从右边可见的节点始终是层序遍历时队列中第一个弹出的节点，即i==0时，将节点加入到res中

**方法2、DFS：**

我们对树进行深度优先搜索，在搜索过程中，我们总是先访问右子树。那么对于每一层来说，我们在这层见到的第一个结点一定是最右边的结点。这样一来，只需要存储每个深度访问的第一个节点即可

### Java代码1

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
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        if(root==null) return res;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            int size = queue.size();
            for(int i=0;i<size;i++){
                if(i==0){
                    res.add(queue.peek().val);
                }
                TreeNode temp = queue.poll();
                if(temp.right!=null){
                    queue.add(temp.right);
                }
                if(temp.left!=null){
                    queue.add(temp.left);
                }
            }
        }
        return res;
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
    List<Integer> res = new ArrayList<>();
    public List<Integer> rightSideView(TreeNode root) {
        if(root==null) return res;
        DFS(root,0);
        return res;
    }

    public void DFS(TreeNode root,int depth){
        if(root==null) return;
        // 如果当前节点所在深度还没有出现在res里
        // 说明在该深度下当前节点是第一个被访问的节点，因此将当前节点加入res中。
        if(depth>=res.size()){
            res.add(root.val);
        }
        DFS(root.right,depth+1);
        DFS(root.left,depth+1);
    }
}
```

