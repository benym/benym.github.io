---
title: LeetCode-面试题27-二叉树的镜像
date: 2020/4/20 15:43:20
description: 二叉树的镜像
categories: 剑指Offer
tags: 
- 树
- Python
- Java
- Easy
- 剑指Offer
keywords: 树,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题27-二叉树的镜像

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 <!--more-->

**示例1：**

```
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

**限制：**

`0 <= 节点个数 <= 1000`

### 解题思路

方法1、递归：

一个二叉树的镜像就是把原本的子节点交换，一层一层来看，先要交换root节点的左右节点，然后分别交换左右节点的子节点，利用递归解决，终止条件是当遍历到左右子树为空或者头结点为空时跳出。

方法2、栈：

类似于DFS的解法，利用一个辅助栈当root为空||root的左右节点为空时返回null

初始化一个栈，存放头节点root，

然后进行循环：当stack为空的时候跳出，

之后的原理是，弹出一个节点node，找到这个节点的左右邻居节点(邻居不为空时)，并压入栈中，交换2个左右节点的值

最后返回根节点root

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
    public TreeNode mirrorTree(TreeNode root) {
        if(root==null)
            return root;
        if(root.left==null&&root.right==null)
            return root;
        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;
        if(root.left!=null)
            mirrorTree(root.left);
        if(root.right!=null)
            mirrorTree(root.right);
        return root;
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
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        if not root: return root
        if not root.left and not root.right: return root
        stack = [root]
        while stack:
            node = stack.pop()
            if node.left: stack.append(node.left)
            if node.right: stack.append(node.right)
            node.left,node.right = node.right,node.left
        return root
```

