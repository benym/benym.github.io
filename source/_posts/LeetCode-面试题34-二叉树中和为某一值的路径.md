---
title: LeetCode-面试题34-二叉树中和为某一值的路径
date: 2020/4/22 18:32:02
description: 二叉树中和为某一值的路径
categories: 剑指Offer
tags: 
- 树
- DFS
- Java
- Python
- Medium
- 剑指Offer
keywords: 树,DFS,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题34-二叉树中和为某一值的路径 

输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

 <!--more-->

**示例：**

给定如下二叉树，以及目标和 `sum = 22`，

```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
```

**返回**

```
[
   [5,4,11,2],
   [5,8,4,5]
]
```

**提示：**

1. `节点总数 <= 10000`

### 解题思路

初始化2个全局数组，之后进行DFS递归遍历

对于TreeSearch函数：

- 递归参数：当前节点node，当前目标值tar

- 终止条件：若node为空，直接返回

- 递归工作：

  路径更新：将node.val加入到路径path

  目标值更新：tar = tar-node.val，当目标值为0时说明路径符合要求

  路径记录：当node为叶子节点且路径值tar==0，则将path加入res

  先序遍历：递归左右子节点

  路径回溯：向上回溯前，需要将当前节点从路径path中删除，即删去path路径的最后一个节点值

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
    LinkedList<List<Integer>> res = new LinkedList<>();
    LinkedList<Integer> path = new LinkedList<>();
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        TreeSearch(root,sum);
        return res;
    }
    public void TreeSearch(TreeNode node,int tar){
        if(node==null) return;
        path.add(node.val);
        tar-=node.val;
        if(tar==0&&node.left==null&&node.right==null)
            res.add(new LinkedList(path));
        TreeSearch(node.left,tar);
        TreeSearch(node.right,tar);
        path.removeLast();
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
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        if not root: return [];
        res,stack = [],[]
        def TreeSearch(root,curSum):
            stack.append(root.val)
            curSum +=root.val
            if(curSum==sum) and not root.left and not root.right:
                res.append(list(stack))
            if root.left:
                TreeSearch(root.left,curSum)
            if root.right:
                TreeSearch(root.right,curSum)
            stack.pop()
        TreeSearch(root,0)
        return res
```