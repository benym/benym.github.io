---
title: LeetCode-面试题28-对称的二叉树
date: 2020/4/20 17:21:41
description: 对称的二叉树
categories: 剑指Offer
tags: 
- 树
- Python
- Java
- Easy
- 剑指Offer
keywords: 树,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题28-对称的二叉树

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```


但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

```java
    1
   / \
  2   2
   \   \
   3    3
```

 <!--more-->

**示例1：**

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

**示例2：**

```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

**限制：**

`0 <= 节点个数 <= 1000`

### 解题思路

**方法1：栈**

利用栈一次性拿出2个节点进行比较

将左子树的left节点和右子树的right节点放入栈

之后将左子树的right节点和右子树的left节点放入栈，比较2个值是否相等

**方法2：递归**

终止条件：

- 与栈的条件类似，当L和R同时越过叶子节点(即左右子节点为null)，则这个树从顶到底都是对称的，返回True
- 当L和R只有一个越过叶子节点(即左/右子节点有一个为null)，则这个树不是对称的，返回False
- 当L和R的值不相等时，则这个树不是对称的，返回False

开启递归：

- 判断两个节点L.left和R.right是否是对称的
- 判断两个节点L.right和R.left是否是对称的

**方法3：队列**

先入队列根节点的左右节点，按层遍历，queue入队顺序和判断逻辑相同，判断左子树的左节点和右子树的右节点是否相等，左子树的右节点和右子树的左节点是否相等。当左右同时为空时，跳过。当左右只有一个为空时，此时二叉树不可能对称，返回false

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
    public boolean isSymmetric(TreeNode root) {
        if(root==null||root.left==null&&root.right==null)
            return true;
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root.left);
        stack.push(root.right);
        while(!stack.isEmpty()){
            TreeNode rightnode = stack.pop();
            TreeNode leftnode = stack.pop();
            // 如果两个节点都为空就跳过，说明拿出来的左右节点至少是相等的
            // 如果两个节点有一个为空，则说明不是对称的，返回false
            if(leftnode==null&&rightnode==null)
                continue;
            if(leftnode==null||rightnode==null)
                return false;
            if(leftnode.val!=rightnode.val)
                return false;
            stack.push(leftnode.left);
            stack.push(rightnode.right);
            stack.push(leftnode.right);
            stack.push(rightnode.left);
        }
        return true;
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
    def isSymmetric(self, root: TreeNode) -> bool:
        def helper(L,R):
            if not L and not R: return True
            if not L or not R: return False
            if L.val != R.val: return False
            return helper(L.left,R.right) and helper(L.right,R.left)
        return helper(root.left,root.right) if root else True
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
    public boolean isSymmetric(TreeNode root) {
        if(root==null)
            return true;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root.left);
        queue.offer(root.right);
        while(!queue.isEmpty()){
            int size = queue.size();
            for(int i=0;i<size;i++){
                TreeNode leftNode = queue.poll();
                TreeNode rightNode = queue.poll();
                if(leftNode==null&&rightNode==null){
                    continue;
                }
                if(leftNode==null||rightNode==null){
                    return false;
                }
                if(leftNode.val!=rightNode.val){
                    return false;
                }
                queue.offer(leftNode.left);
                queue.offer(rightNode.right);
                queue.offer(leftNode.right);
                queue.offer(rightNode.left);
            }
        }
        return true;
    }
}
```

