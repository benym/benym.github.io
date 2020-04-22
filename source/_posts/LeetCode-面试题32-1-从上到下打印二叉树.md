---
title: LeetCode-面试题32-1-从上到下打印二叉树
date: 2020/4/22 10:47:48
description: 从上到下打印二叉树
categories: 剑指Offer
tags: 
- BFS
- 树
- Python
- Java
- Medium
- 剑指Offer
keywords: BFS,树,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题32-1-从上到下打印二叉树

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:
给定二叉树: [3,9,20,null,null,15,7],

​    3
   / \
  9  20
    /  \
   15   7
返回：

```
[3,9,20,15,7]
```

 <!--more-->

**提示：**

1. `节点总数 <= 1000`

### 解题思路

BFS就完事儿了.....

用一个队列Queue保存节点，标准BFS遍历模版如下：

- 将root节点放入queue

- 重复以下2个步骤，直到queue为空为止：

  取出queue中的头结点

  找出头结点左右子节点，依次放入queue中

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
    public int[] levelOrder(TreeNode root) {
        if(root==null) return new int[0];
        Queue<TreeNode> queue = new LinkedList<>();
        ArrayList<Integer> alist = new ArrayList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            TreeNode temp = queue.poll();
            alist.add(temp.val);
            if(temp.left!=null)
                queue.add(temp.left);
            if(temp.right!=null)
                queue.add(temp.right);
        }
        return alist.stream().mapToInt(Integer::intValue).toArray();
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
    def levelOrder(self, root: TreeNode) -> List[int]:
        if not root: return []
        quque = [root]
        ans = []
        while quque:
            node = quque.pop(0)
            ans.append(node.val)
            if node.left: quque.append(node.left)
            if node.right: quque.append(node.right)
        return ans
```

