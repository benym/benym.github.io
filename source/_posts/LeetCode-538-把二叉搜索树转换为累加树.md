---
title: LeetCode-538-把二叉搜索树转换为累加树
date: 2020/7/9 09:09:37
description: 把二叉搜索树转换为累加树
categories: LeetCode
tags: 
- 树
- Java
- Easy
keywords: 树,Java,Easy,LeetCode
---

## LeetCode-538-把二叉搜索树转换为累加树

给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

<!--more-->

**示例1：**

```
输入: 原始二叉搜索树:
              5
            /   \
           2     13

输出: 转换为累加树:
             18
            /   \
          20     13
```

### 解题思路

**方法1、递归：**

二叉搜索树是，当树中根节点不为空的时候，其左子树上所有节点的值均小于它的根节点的值。若它的右子树不空，则右子树上所有结点的值均大于它的根节点的值。

根据这一特点，累加树就可以通过反向的中序遍历得到，即先遍历右根左的顺序进行遍历，同时进行节点值累加，满足当一个节点的值是由所有大于它的节点值累加得到的这一定义。

当root不为空时，进行右子树递归，并累加节点值，之后进行左子树递归，最后返回root节点

**方法2、迭代：**

使用一个Stack来存储节点，利用反序的中序遍历进行节点值累加，实现方法和中序遍历的迭代方式类似。

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
    private int sum = 0;
    public TreeNode convertBST(TreeNode root) {
        if(root!=null){
            convertBST(root.right);
            sum+= root.val;
            root.val = sum;
            convertBST(root.left);
        }
        return root;
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
    public TreeNode convertBST(TreeNode root) {
        int sum = 0;
        Stack<TreeNode> stack = new Stack<>();
        TreeNode temp = root;
        while(temp!=null||!stack.isEmpty()){
            while(temp!=null){
                stack.push(temp);
                temp = temp.right;
            }
            temp = stack.pop();
            sum +=temp.val;
            temp.val = sum;
            temp = temp.left;
        }
        return root;
    }
}
```



