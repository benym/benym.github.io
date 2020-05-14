---
title: LeetCode-面试题55-1-二叉树的深度
date: 2020/5/14 18:54:51
description: 二叉树的深度
categories: 剑指Offer
tags:
- 树
- DFS
- BFS
- Java
- Python
- Easy
- 剑指Offer
keywords: 树,DFS,BFS,Java,Easy,剑指Offer
---

## LeetCode-面试题55-1-二叉树的深度 

输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

 <!--more-->

**示例1：**

给定二叉树 `[3,9,20,null,null,15,7]`，

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。

- **提示：**
  1. `节点总数 <= 10000`

### 解题思路

方法1、DFS：

既然要求树的深度自然少不了深度优先遍历，通过比较左子树的深度和右子树的深度判断最大深度，之后加上根节点

方法2、BFS：

层序遍历一般也就是广度优先遍历，在原本队列的实现基础上，对一个层进行循环约束即可，每遍历完一层，深度就+1

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
        if(root==null)
            return 0;
        int nleft = maxDepth(root.left);
        int nright = maxDepth(root.right);
        return Math.max(nleft,nright)+1;
    }
}
```

### Python代码

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root: return 0
        queue , depth = [] , 0
        queue.append(root)
        while queue:
            for i in range(len(queue)):
                temp = queue.pop(0)
                if temp.left:
                    queue.append(temp.left)
                if temp.right:
                    queue.append(temp.right)
            depth+=1
        return depth
```

