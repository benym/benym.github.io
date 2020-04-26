---
title: LeetCode-面试题37-序列化二叉树
date: 2020/4/26 17:30:44
description: 序列化二叉树
categories: 剑指Offer
tags: 
- 树
- Python
- Java
- Hard
- 剑指Offer
keywords: 树,Python,Java,Hard,剑指Offer
---

## LeetCode-面试题37-序列化二叉树 

请实现两个函数，分别用来序列化和反序列化二叉树。

 <!--more-->

**示例：**

```
你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
```

### 解题思路

BFS+位置指针(队列、递归2种解法)：

**队列：**

- **序列化**的过程是一个典型的**BFS**层序遍历，由于返回的要求是String类型，所以在遍历的同时加上字符串拼接即可
- **反序列化**的过程，利用一个队列按层构建二叉树，并使用index指针记录节点temp的左子节点和右子节点。每构建一个节点，index就向右移动1位，只有当节点不为空时，左右节点的构建才有效。为空时index++会跳过值为null的节点

**递归：**

注意：递归序列化出来的序列和队列方式结果不同，递归返回的列表数据更像**DFS**遍历的结果，虽然两者序列化和反序列化的方式不同，但不影响构建结果。**即怎么序列化，就怎么反序列化**

初始化：res列表，index指针

序列化递归：

- 判断头节点是否为空，为空则直接返回空列表

- 否则开始序列化递归，序列化递归过程如下：

  **终止条件：**当遍历到左/右子节点为空时，res添加null字符，返回

  **递推：**res添加root节点值，开启左子树遍历`self.serhelper(root.left)`，之后开启右子树遍历`self.serhelper(root.right)`

反序列化递归：

- 判断头节点是否为空，为空则直接返回空列表

- 否则开始反序列化递归，过程如下：

  **终止条件：**index位置为null，说明此位置是空节点，index后移一位，返回None

  **递推：**新建Node，index指针后移指向左节点，开启左右子树递归`node.left = self.deshelper(data)`和`node.right = self.deshelper(data)`

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
public class Codec {
    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if(root==null) return "[]";
        StringBuilder res = new StringBuilder("[");
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            TreeNode temp = queue.poll();
            if(temp!=null){
                res.append(temp.val+",");
                queue.add(temp.left);
                queue.add(temp.right);
            }
            else
                res.append("null,");
        }
        res.deleteCharAt(res.length()-1);
        res.append("]");
        return res.toString();
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if(data.equals("[]")) return null;
        String[] origin = data.substring(1,data.length()-1).split(",");
        TreeNode root = new TreeNode(Integer.parseInt(origin[0]));
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int index = 1;
        while(!queue.isEmpty()){
            TreeNode temp = queue.poll();
            if(!origin[index].equals("null")){
                temp.left = new TreeNode(Integer.parseInt(origin[index]));
                queue.add(temp.left);
            }
            index++;
            if(!origin[index].equals("null")){
                temp.right = new TreeNode(Integer.parseInt(origin[index]));
                queue.add(temp.right);
            }
            index++;
        }
        return root;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
```

### Python代码

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:
    def __init__(self):
        self.res = []
        self.index = 0

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if not root: return []
        self.serhelper(root)
        return self.res
        
    def serhelper(self,root):
        if not root:
            self.res.append("null")
            return
        self.res.append(root.val)
        self.serhelper(root.left)
        self.serhelper(root.right)

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        if not data: return []
        return self.deshelper(data)
    
    def deshelper(self,data):
        if data[self.index] == "null":
            self.index+=1
            return None
        node = TreeNode(data[self.index])
        self.index+=1
        node.left = self.deshelper(data)
        node.right = self.deshelper(data)
        return node
        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))
```