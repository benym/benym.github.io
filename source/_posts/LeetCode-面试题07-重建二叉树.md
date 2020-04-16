---
title: LeetCode-面试题07-重建二叉树
date: 2020/4/4 14:08:05
description: 重建二叉树
categories: 剑指Offer
tags: 
- 树
- Java
- Python
- Medium
- 剑指Offer
keywords: 树,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题07-重建二叉树

输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 <!--more-->

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
   
限制：
0 <= 节点个数 <= 5000
```

### 解题思路

**方法1、**递归

前序遍历的序列第一个位置就是root节点，后面分别是左子树和右子树，一开始无法知道哪些是左子树数字，哪些是右子树数字，但数字按照左——>右的顺序排列的。通过利用中序遍历序列可以得知，3的左边是左子树，3的右边是右子树。对于左子树，我们也能够获得其对应的前序和中序遍历，右子树同理。这样就将二叉树的建立转化为了一个递归问题：先在前序遍历确定根节点，然后确定中序中左子树开始和结束位置，以及右子树开始和结束位置，通过左子树前序和中序重建左子树，通过右子树前序和中序重建右子树，再向root添加左右子树的根节点，重建整个二叉树。

**方法2、**模拟(官方解法)

绘制螺旋轨迹路径，我们发现当路径超出界限或者进入之前访问过的单元格时，会顺时针旋转方向。

假设数组有R 行 C 列，seen[r,c]表示第 r 行第 c 列的单元格之前已经被访问过了。当前所在位置为(r, c)，前进方向是 di。我们希望访问所有R x C 个单元格。

当我们遍历整个矩阵，下一步候选移动位置是(cr, cc)。如果这个候选位置在矩阵范围内并且没有被访问过，那么它将会变成下一步移动的位置；否则，我们将前进方向顺时针旋转之后再计算下一步的移动位置。

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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder == null || preorder.length == 0) {
            return null;
        }
        Map<Integer, Integer> dict = new HashMap<>();
        // 建立中序map，快速获取位置
        int length = preorder.length - 1;
        for (int i = 0; i < inorder.length; i++) {
            dict.put(inorder[i], i);
        }
        TreeNode root = reconstrTree(preorder, 0, length, inorder, 0, length, dict);
        return root;
    }
    public TreeNode reconstrTree(int[] preorder, int postart, int poend, int[] inorder, int iostart, 	 int ioend, Map<Integer, Integer> dict) {
        if (postart > poend) { // 二叉树没有节点
            return null;
        }
        int rootNode = preorder[postart]; // 对于前序序列，root节点就是第一个
        TreeNode root = new TreeNode(rootNode);
        if (postart == poend) { // 开始等于结束时，只有一个节点，就是root
            return root;
        } else {
            int rootIndex = dict.get(rootNode); // 获取root节点在中序序列的坐标
            int leftRange = rootIndex - iostart; // 得到左子树个数
            int rightRange = ioend - rootIndex; // 得到右子树个数
            // 传递左子树的前序和中序序列，建立左子树
            TreeNode leftTree = reconstrTree(preorder, postart + 1, postart + leftRange,inorder, 				iostart, rootIndex - 1, dict);
            // 传递右子树的前序和中序序列，建立右子树
            TreeNode rightTree = reconstrTree(preorder, poend - rightRange + 1, poend, 							inorder,rootIndex + 1, ioend, dict);
            root.left = leftTree;
            root.right = rightTree;
            return root;
        }
    }
}
```

### Python代码

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
        def buildTree(self, preorder, inorder):
            """
            :type preorder: List[int]
            :type inorder: List[int]
            :rtype: TreeNode
            """
            self.dict1 = {}
            self.po = preorder
            polen = len(preorder)
            if (polen == 0):
                return
            for index, value in enumerate(inorder):
                self.dict1[value] = index
            return self.reconstrTree(0, 0, len(inorder) - 1)

        def reconstrTree(self, postart, instart, inend):
            if instart > inend: return
            root = TreeNode(self.po[postart])
            root_index = self.dict1[self.po[postart]]
            root.left = self.reconstrTree(postart + 1, instart, root_index - 1)
            root.right = self.reconstrTree(root_index - instart + postart + 1, root_index + 1, inend)
            return root
```

