---
title: LeetCode-105-从前序与中序遍历构造二叉树
date: 2020/6/22 11:01:44
description: 从前序与中序遍历构造二叉树
categories: LeetCode
tags: 
- 树
- Java
- Medium
keywords: 树,Java,Medium
---

## LeetCode-105-从前序与中序遍历构造二叉树

根据一棵树的前序遍历与中序遍历构造二叉树。

**注意:**
你可以假设树中没有重复的元素。

<!--more-->

**示例 1:**

例如，给出

```
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
```

返回如下的二叉树：

```
    3
   / \
  9  20
    /  \
   15   7
```

### 解题思路

**方法1、递归：**

前序遍历：根左右

中序遍历：左根右

对于任意一棵树而言，前序遍历的形式总是

```
[根节点，[左子树的前序遍历结果],[右子树的前序遍历结果]]
```

根节点总是，前序遍历中的第一个节点

中序遍历的形式总是

```
[[左子树的中序遍历结果],根节点,[右子树的中序遍历结果]]
```

只要能够在中序遍历中**定位**到根节点，那么就可以得到对应的左右子树的节点数目

由于前序遍历和中序遍历的长度是相同的，所以我们也能知道前序遍历的左右字数的区间范围

之后进行递归，问题就变为了：

知道左子树的前序和中序遍历，重建左子树；知道右子树的前序和中序遍历，重建右子树；

定位优化：

在中序遍历中需要根据前序遍历的根节点，定位到中序遍历中的根节点

直接进行扫描匹配的耗时比较大，可以在一开始对中序遍历建立hash表，Key代表元素的值，value代表在中序遍历中出现的位置。之后寻找对应值就能够快速定位了

**方法2、迭代：**

https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/cong-qian-xu-yu-zhong-xu-bian-li-xu-lie-gou-zao-9/

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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if(preorder==null||preorder.length==0){
            return null;
        }
        Map<Integer,Integer> map = new HashMap<>();
        for(int i=0;i<inorder.length;i++){
            map.put(inorder[i],i);
        }
        int length = preorder.length-1;
        TreeNode root = reconstrTree(preorder,0,length,inorder,0,length,map);
        return root;
    }

    public TreeNode reconstrTree(int[] preorder,int postart,int poend,int[] inorder,int instart,int inend,Map<Integer,Integer> map){
        if(postart>poend){
            return null;
        }
        int rootNode = preorder[postart];
        TreeNode root = new TreeNode(rootNode);
        if(postart==poend){
            return root;
        }else{
            int rootIndex = map.get(rootNode);
            int leftRange = rootIndex - instart;
            int rightRange = inend - rootIndex;
            TreeNode leftTree = reconstrTree(preorder,postart+1,postart+leftRange,inorder,instart,rootIndex-1,map);
            TreeNode rightTree = reconstrTree(preorder,poend-rightRange+1,poend,inorder,rootIndex+1,inend,map);
            root.left = leftTree;
            root.right = rightTree;
            return root;
        }
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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder == null || preorder.length == 0) {
            return null;
        }
        TreeNode root = new TreeNode(preorder[0]);
        Stack<TreeNode> stack = new Stack<TreeNode>();
        stack.push(root);
        int inorderIndex = 0;
        for (int i = 1; i < preorder.length; i++) {
            int preorderVal = preorder[i];
            TreeNode node = stack.peek();
            if (node.val != inorder[inorderIndex]) {
                node.left = new TreeNode(preorderVal);
                stack.push(node.left);
            } else {
                while (!stack.isEmpty() && stack.peek().val == inorder[inorderIndex]) {
                    node = stack.pop();
                    inorderIndex++;
                }
                node.right = new TreeNode(preorderVal);
                stack.push(node.right);
            }
        }
        return root;
    }
}
```



