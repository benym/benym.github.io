---
title: LeetCode-面试题68-1-二叉搜索树的最近公共祖先
date: 2020/5/29 10:05:04
description: 二叉搜索树的最近公共祖先
categories: 剑指Offer
tags:
- 二叉树
- Java
- Python
- Easy
- 剑指Offer
keywords: 二叉树,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题68-1-二叉搜索树的最近公共祖先

给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

 <!--more-->

**示例1：**

```
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
```

**示例2：**

```
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
```

**说明：**

- 所有节点的值都是唯一的。
- p、q 为不同节点且均存在于给定的二叉搜索树中。

### 解题思路

方法1、递归：

比较当前的值和传入的2个节点值的大小，根据二叉搜索树的性质，比根节点小的数在左边，比根节点大的数在右边。如果当前值比2个节点值大，则最近的公共祖先应该在左子树

如果当前值比2个节点值小，则最近的公共祖先应该在右子树

如果当前值在2个节点值中间，或者等于2个节点值中的一个，则当前节点就是最近公共祖先

方法2、迭代：

迭代思路与递归类似，只是当找到节点时跳出循环返回即可

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
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root.val>p.val&&root.val>q.val){
            return lowestCommonAncestor(root.left,p,q);
        }else if(root.val<p.val&&root.val<q.val){
            return lowestCommonAncestor(root.right,p,q);
        }
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
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        while root:
            if root.val>p.val and root.val>q.val:
                root = root.left
            elif root.val<p.val and root.val<q.val:
                root = root.right
            else:
                break
        return root
```

