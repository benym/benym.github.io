---
title: LeetCode-面试题32-2-从上到下打印二叉树 
date: 2020/4/22 15:15:30
description: 从上到下打印二叉树
categories: 剑指Offer
tags: 
- BFS
- 树
- Python
- Java
- Easy
- 剑指Offer
keywords: BFS,树,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题32-2-从上到下打印二叉树 

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

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
  [9,20],
  [15,7]
]
```

 <!--more-->

**提示：**

1. `节点总数 <= 1000`

### 解题思路

方法1：递推

依然是BFS，只是要多2个List去保存结果，还需要2个变量一个记录下一层的节点数目，另一个记录当前层没有打印的节点数目

用一个队列Queue保存节点，标准BFS遍历模版如下：

- 将root节点放入queue，当前待打印节点数-1

- 重复以下2个步骤，直到queue为空为止：

  取出queue中的头结点，添加进rowList中

  找出头结点左右子节点，依次放入queue中，下一行节点数目+1

  当前行待打印节点数==0时，说明这行节点都添加进了rowList中，将rowList添加进result，进入下一行，当前行=下一行节点数，下一行节点数清空，rowList清空，这里不能用list.clear()方法，`这个方法会把对应的引用数据清掉`，直接new ArrayList()即可

方法2：递归

初始化一个k作为树层数标记，对于大的list而言，每一层都是一个小list，当这个小list没有时，新建这个小list添加进头结点（大list的长度<=k）

如果存在这一层的小list，就在这个小list中继续添加这一层的数据即`res[depth].append(node.val)`

之后进行头结点左子树和右子树的递归，每一次递归层数+1即

- `traversal(node.left, depth + 1)`
- `traversal(node.right, depth + 1)`·

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
        if(root==null) return new ArrayList();
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> row = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int rownode = 1;
        int nextrow = 0;
        while(!queue.isEmpty()){
            TreeNode temp = queue.poll();
            row.add(temp.val);
            if(temp.left!=null){
                queue.add(temp.left);
                nextrow++;
            }
            if(temp.right!=null){
                queue.add(temp.right);
                nextrow++;
            }
            rownode--;
            if(rownode==0){
                result.add(row);
                rownode = nextrow;
                nextrow = 0;
                row = new ArrayList();
            }
        }
        return result;
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
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        def traversal(node, depth):
            if not node:
                return
            if len(res) <= depth:  # 如果结果集没有对应层数的列表，则先创建并将当前节点值压入
                temp = []
                temp.append(node.val)
                res.append(temp)
            else:  # 如果有，直接压入对应层数所对应的列表
                res[depth].append(node.val)
            traversal(node.left, depth + 1)
            traversal(node.right, depth + 1)
        traversal(root, 0)
        return res
```

