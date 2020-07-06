---
title: LeetCode-617-合并二叉树
date: 2020/7/6 15:48:22
description: 合并二叉树
categories: LeetCode
tags: 
- 树
- Java
- Easy
keywords: 树,Java,Easy,LeetCode
---

## LeetCode-617-合并二叉树

给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

<!--more-->

**示例1：**

```
输入: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
输出: 
合并后的树:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
```

**注意:** 合并必须从两个树的根节点开始。

### 解题思路

**方法1、递归：**

合并两个树可以按照前序遍历的方式进行合并

当节点t1为空时，返回t2，当t2为空时，返回t1

每次合并需要将对应的节点值相加

递归进行左子树和右子树的构建即可

**方法2、迭代：**

用一个stack存储两棵树的节点，将树的根节点t1,t2放入stack中，当stack不为空的时候

当任意一棵树的节点为空的时候，直接跳过

当两者不为空时，进行节点值相加，当前两个节点判断完毕，之后进行左子节点和右子节点的判断

当左子节点/右子节点为空时，说明该位置没有左/右节点，直接拼接左右子树的节点

当左子节点/右子节点不为空时，将两棵树的左节点或者右节点都添加进stack中

最后返回t1根节点即可

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
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        if(t1==null) return t2;
        if(t2==null) return t1;
        t1.val+=t2.val;
        t1.left = mergeTrees(t1.left,t2.left);
        t1.right = mergeTrees(t1.right,t2.right);
        return t1;
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
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        if(t1==null) return t2;
        if(t2==null) return t1;
        Stack<TreeNode[]> stack = new Stack<>();
        stack.push(new TreeNode[] {t1, t2});
        while(!stack.isEmpty()){
            TreeNode[] temp = stack.pop();
            if(temp[0]==null||temp[1]==null){
                continue;
            }
            temp[0].val+=temp[1].val;
            if(temp[0].left==null){
                temp[0].left = temp[1].left;
            }else{
                stack.push(new TreeNode[]{temp[0].left,temp[1].left});
            }
            if(temp[0].right==null){
                temp[0].right = temp[1].right;
            }else{
                stack.push(new TreeNode[]{temp[0].right,temp[1].right});
            }
        }
        return t1;
    }
}
```