---
title: LeetCode-面试题33-二叉搜索树的后序遍历序列
date: 2020/4/22 16:37:05
description: 从上到下打印二叉树
categories: 剑指Offer
tags: 
- 树
- Java
- Python
- Medium
- 剑指Offer
keywords: 树,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题33-二叉搜索树的后序遍历序列 

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 `true`，否则返回 `false`。假设输入的数组的任意两个数字都互不相同。

参考以下这颗二叉搜索树：

```
     5
    / \
   2   6
  / \
 1   3
```

 <!--more-->

**示例1：**

```
输入: [1,6,3,2,5]
输出: false
```

**示例2：**

```
输入: [1,3,2,6,5]
输出: true
```

**提示：**

1. `节点总数 <= 1000`

### 解题思路

递归：

二叉树中根节点的左节点始终比根节点小，右节点始终比根节点大，题目中数组末尾为根节点

通过与root节点的大小比较，能够找到左子树的边界，从而划开左右子树

在右子树中节点值始终比root节点大，如果不是，则这个序列不是后序遍历序列

当找到划分边界后进行递归，判断左子树中哪些是左节点，哪些是又节点。右子树同理

### Java代码

```java
class Solution {
    public boolean verifyPostorder(int[] postorder) {
        return helper(postorder,0,postorder.length-1);
    }

    public boolean helper(int[] postorder,int start,int end){
        if(start>=end) return true;
        int i = 0;
        for(i=start;i<end;i++){
            if(postorder[i]>postorder[end])
                break;
        }
        for(int j = i;j<end;j++){
            if(postorder[j]<postorder[end])
                return false;
        }
        return helper(postorder,start,i-1)&&helper(postorder,i,end-1);
    }
}
```

### Python代码

```python
class Solution:
    def verifyPostorder(self, postorder: List[int]) -> bool:
        length = len(postorder);
        if not postorder:
            return True
        root = postorder[-1]
        # 二叉树中左子树始终比根节点小，右子树比根节点大
        # 寻找左子树边界
        i = 0
        for i in range(length):
            if postorder[i]>root:
                break;
        j = i
        for j in range(j,length):
            if postorder[j]<root:
                return False
        # 判断左子树是不是二叉搜索树
        left = True
        if i>0: left = self.verifyPostorder(postorder[:i])
        # 判断右子树是不是二叉搜索树
        right = True
        if i<length-1: right = self.verifyPostorder(postorder[i:-1])
        return left and right
```