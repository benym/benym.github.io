---
title: LeetCode-236-二叉树的最近公共祖先
date: 2020/8/1 10:01:16
description: 二叉树的最近公共祖先
categories: LeetCode
tags: 
- 树
- Java
- Medium
keywords: 树,Java,Medium,LeetCode
---

## LeetCode-236-二叉树的最近公共祖先

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]

<!--more-->

**示例1：**

```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
```

**示例2：**

```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
```

**说明:**

- 所有节点的值都是唯一的。
- p、q 为不同节点且均存在于给定的二叉树中。

### 解题思路

**方法1、递归：**

参考链接https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/

根据上述示例可以得知，如果root是p，q的最近公共祖先，则可能的情况有以下3种：

1. root节点的子树包含p和q两个节点，且p和q分别在root的左、右子树中；
2. p=root，且q在root的左/右子树中；
3. q=root，且p在root的左/右子树中；

**递归解析：**

**1、终止条件：**

1. 当越过叶节点，则直接返回null；
2. 当root等于p,q，则直接返回root；

**2、递推工作：**

1. 开启递归左子节点，返回值记为left；
2. 开启递归右子节点，返回值记为right；

**3、返回值：**根据left和right，可展开为四种情况；

1. 当left和right**同时为空**：说明root的左/右子树中都不包含p,q，返回null；
2. 当left和right**同时不为空**：说明p,q分列在root的左/右子树，因此root为最近公共祖先，返回root；
3. 当left**为空**，right**不为空**：p,q都不在root的左子树中，直接返回right。具体可分为两种情况：
   1. p,q其中一个在root的**右子树**中，此时right指向p(假设为p)；
   2. p,q两节点都在root的**右子树**中，此时right指向最近公共祖先节点；
4. 当left**不为空**，right**为空**：与情况3同理；

观察发现，情况`1`可合并至`3`和`4`内

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
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root==null||root==p||root==q) return root;
        TreeNode left = lowestCommonAncestor(root.left,p,q);
        TreeNode right = lowestCommonAncestor(root.right,p,q);
        if(left==null) return right;
        if(right==null) return left;
        return root;
    }
}
```

### Java代码2

```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root == null || root == p || root == q) return root;
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        if(left == null && right == null) return null; // 1.
        if(left == null) return right; // 3.
        if(right == null) return left; // 4.
        return root; // 2. if(left != null and right != null)
    }
}
```

### Java代码3

逻辑更清晰版本，出处https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/comments/

```java
public class Solution {//所有的递归的返回值有4种可能性，null、p、q、公共祖先
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) {//当遍历到叶结点后就会返回null
            return root;
        }
        if (root == p || root == q) {//当找到p或者q的是时候就会返回pq
            return root;/*当然，值得一提的是，如果公共祖先是自己（pq），并不需要寻找另外
                     一个，我们在执行前序遍历会先找上面的，后找下面的，我们会直接返回公共祖先。*/
        }
        TreeNode left = LowestCommonAncestor(root.left, p, q);//返回的结点进行保存，可能是null
        TreeNode right = LowestCommonAncestor(root.right, p, q);//也可能是pq，还可能是公共祖先
        if (left != null && right != null) {
            return root;//如果左右都存在，就说明pq都出现了，这就是，公共祖先，此时不用考虑公共祖先是自己的情况，因为上面已经做过判断了。
        } else if (left != null) {//否则我们返回已经找到的那个值（存储在left，与right中），p或者q
            return left;//还有一种可能就是，由下面返回的公共祖先，并将这个值一路返回到最表层
        } else if (right != null) {
            return right;
        }
        return null;
    }
}
```



