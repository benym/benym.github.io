---
title: LeetCode-面试题54-二叉搜索树的第k大节点
date: 2020/5/12 16:34:23
description: 二叉搜索树的第k大节点
categories: 剑指Offer
tags:
- 树
- DFS
- Java
- Python
- Easy
- 剑指Offer
keywords: 树,Java,Easy,剑指Offer
---

## LeetCode-面试题54-二叉搜索树的第k大节点 

给定一棵二叉搜索树，请找出其中第k大的节点。

 <!--more-->

**示例1：**

```
输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
```

**示例2：**

```
输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
```

- **限制：**

  `1 ≤ k ≤ 二叉搜索树元素个数`

### 解题思路

方法1、中序遍历的倒序：

对于二叉搜索树，左节点总是比根节点小，右节点总是比根节点大

观察可以得知，中序遍历后得到的序列是递增的，求第K个大的节点可以转化为求中序遍历的倒序的第k个节点

中序遍历序列一般可以用DFS得到

对此可以先遍历右子节点，每遍历一个右子节点，计数器加1，之后遍历左子节点

当计数器等于k时，返回对应节点的值

方法2、栈式迭代：

对于DFS和BFS问题，都可以利用一个栈来进行迭代计算，这里依旧采用倒序，先把所有的右子节点加入到stack中

之后弹出栈顶元素，如果k==n，则返回当前节点值，否则，node=node.left，按照右中左的顺序遍历

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
    int res = 0, count = 0;
    public int kthLargest(TreeNode root, int k) {
        if(root==null||k==0)
            return 0;
        DFS(root,k);
        return res;
    }
    public void DFS(TreeNode root,int k){
        if(root == null) return;
        DFS(root.right,k);
        count++;
        if(count==k){
            res = root.val;
        }
        DFS(root.left,k);
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
    def kthLargest(self, root: TreeNode, k: int) -> int:
        if not root:
            return None
        stack = []
        node = root
        n = 0
        while stack or node:
            if node:
                stack.append(node)
                node = node.right
            else:
                node = stack.pop()
                n += 1
                if n == k:
                    return node.val
                node = node.left
        return None
```

