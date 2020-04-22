---
title: LeetCode-面试题32-3-从上到下打印二叉树 
date: 2020/4/22 16:08:35
description: 从上到下打印二叉树
categories: 剑指Offer
tags: 
- BFS
- 树
- Java
- Medium
- 剑指Offer
keywords: BFS,树,Java,Medium,剑指Offer
---

## LeetCode-面试题32-3-从上到下打印二叉树 

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

例如:
给定二叉树: [3,9,20,null,null,15,7],

​    3
   / \
  9  20
    /  \
   15   7

返回其层次遍历结果：

```
[
  [3],
  [20,9],
  [15,7]
]
```

 <!--more-->

**提示：**

1. `节点总数 <= 1000`

### 解题思路

递推：奇数行从左到右打印，偶数行从右到左打印

用一个队列Queue保存节点，并利用一个双端队列保存行数据，如下：

- 将root节点放入queue

- 重复以下2个步骤，直到queue为空为止：

  新建一个双端队列，存储行数据

  当queue.size()>0时开始循环：

  ​	取出queue中的头结点，添加进rowList中

  ​	判断当前行是奇数行还是偶数行，由于数组是从0开始存储的，所以原本的奇数变成了偶数，偶数变成了奇		        

  ​	数，对于0行和2行，应该从左到右输出，所以向尾部插入新数据即可；对于1行，应该从右到左输出，所以

  ​	向头部插入新数据即可倒序

  ​	找出头结点左右子节点，依次放入queue中

  添加rowList进入result数组中

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
    public List<List<Integer>> levelOrder(TreeNode root) {
        if (root == null) return new ArrayList();
        List<List<Integer>> result = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            LinkedList<Integer> rowlist = new LinkedList<>();
            for (int i = queue.size(); i > 0; i--) {
                TreeNode temp = queue.poll();	//取出队列头部
                if ((result.size()& 0x1) == 0) {// 当前是偶数行(0行2行)，行从0开始
                    rowlist.addLast(temp.val); //添加数据到list尾部，即从左至右顺序
                } else // 当前是奇数行(1行)
                    rowlist.addFirst(temp.val);//添加数据到list头部，即从右至左顺序
                if (temp.left != null) queue.add(temp.left);
                if (temp.right != null) queue.add(temp.right);
            }
            result.add(rowlist);
        }
        return result;
    }
}
```

