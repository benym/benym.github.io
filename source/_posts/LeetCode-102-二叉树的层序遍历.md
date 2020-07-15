---
title: LeetCode-102-二叉树的层序遍历
date: 2020/7/15 14:14:24
description: 二叉树的层序遍历
categories: LeetCode
tags: 
- 树
- Java
- Medium
keywords: 树,Java,Medium,LeetCode
---

## LeetCode-102-二叉树的层序遍历

给你一个二叉树，请你返回其按 **层序遍历** 得到的节点值。 （即逐层地，从左到右访问所有节点）。

<!--more-->

**示例：**
二叉树：`[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```
[
  [3],
  [9,20],
  [15,7]
]
```

### 解题思路

**方法1、Queue迭代：**

利用一个Queue存储每层的节点，当一层没有遍历完时，持续poll出队列中的节点，并同时加入对应左右节点进入queue中，当一层遍历完成之后加入到结果集res中。

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
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new LinkedList<>();
        if(root==null) return res;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            List<Integer> row = new LinkedList<>();
            int size = queue.size();
            for(int i=0;i<size;i++){
                TreeNode temp = queue.poll();
                row.add(temp.val);
                if(temp.left!=null)
                    queue.add(temp.left);
                if(temp.right!=null)
                    queue.add(temp.right);
            }
            res.add(new LinkedList<>(row));
        }
        return res;
    }
}
```







