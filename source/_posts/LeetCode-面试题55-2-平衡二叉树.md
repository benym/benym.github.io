---
title: LeetCode-面试题55-2-平衡二叉树
date: 2020/5/18 12:58:06
description: 平衡二叉树
categories: 剑指Offer
tags:
- 树
- DFS
- Java
- Python
- Easy
- 剑指Offer
keywords: 树,DFS,Java,Easy,剑指Offer
---

## LeetCode-面试题55-2-平衡二叉树 

输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中**任意节点**的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

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

返回`true` 。

**示例 2:**

给定二叉树 `[1,2,2,3,3,null,null,4,4]`

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

返回 `false` 。

- **限制：**
  1. `1 <= 树的结点个数 <= 10000`

### 解题思路

方法1、DFS分别求深度：

这种方法就是上一个题的延续了，但是由于需要对每一个节点求对应的左右子树的深度，会造成很多重复计算。这是一个简单的解法但是不是好的解法

方法2、后序遍历+剪枝：

这是一个从底至顶的解法，当节点的左右子树的深度差<=1时，就返回当前子树的深度

当前子树的深度由max(left,right)+1计算得到，如果不满足深度差条件，则说明子树不平衡，直接返回-1

递归的终止条件是，当root为空，说明越过叶子节点，返回深度0

当左右子树的深度不平衡时，即left==-1||right==-1时，提前终止递归进行剪枝，返回-1

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
    public boolean isBalanced(TreeNode root) {
        if(root==null) return true;
        int nleft = DFS(root.left);
        int nright = DFS(root.right);
        int n = Math.abs(nleft-nright);
        if(n>1)
            return false;
        return isBalanced(root.left)&&isBalanced(root.right);
    }
    public int DFS(TreeNode root){
        if(root==null) return 0;
        int nleft = DFS(root.left);
        int nright = DFS(root.right);
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
    def isBalanced(self, root: TreeNode) -> bool:
        return self.helper(root)!=-1

    def helper(self,root:TreeNode)-> int:
        if not root: return 0
        left = self.helper(root.left)
        if left==-1: return -1
        right = self.helper(root.right)
        if right==-1: return -1
        return max(left,right)+1 if abs(left-right)<=1 else -1
```
