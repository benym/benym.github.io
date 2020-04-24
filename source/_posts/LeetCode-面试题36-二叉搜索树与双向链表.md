---
title: LeetCode-面试题36-二叉搜索树与双向链表
date: 2020/4/24 21:29:26
description: 二叉搜索树与双向链表
categories: 剑指Offer
tags: 
- 树
- DFS
- Java
- Medium
- 剑指Offer
keywords: 树,DFS,Java,Medium,剑指Offer
---

## LeetCode-面试题36-二叉搜索树与双向链表 

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

 <!--more-->

为了让您更好地理解问题，以下面的二叉搜索树为例：

![二叉平衡树](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/%E4%BA%8C%E5%8F%89%E5%B9%B3%E8%A1%A1%E6%A0%91.png)

我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。

![双向链表](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8.png)

特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。

### 解题思路

DFS+修改指针：

不难发现双向链表的序列是中序遍历的结果，只是在遍历的同时需要调整指针的指向

特例处理：root==null，则返回

初始化：记录前面一个节点的指针pre

递归中序遍历：

终止条件是当节点cur为空的时候，代表越过叶子节点，直接return

之后开启左子树递归DFS(cur.left)

构建链表：

- 当前面一个节点pre为空时，代表正在访问链表头结点，head = cur
- 当前面一个节点pre不为空时，修改双向节点引用，pre.right = cur，cur.left = pre
- 保存cur：更新pre = cur，节点cur是pre的后继节点
- 递归右子树，DFS(cur.right)

完成递归之后，需要连接头尾节点，此时head指向头结点，pre指向尾节点

修改head.left = pre ，pre.right = head

之后返回头结点head即可

### Java代码

```java
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val,Node _left,Node _right) {
        val = _val;
        left = _left;
        right = _right;
    }
};
*/
class Solution {
    Node pre = null;
    Node head = null;
    public Node treeToDoublyList(Node root) {
        if(root==null) return root;
        DFS(root);
        head.left = pre;
        pre.right = head;
        return head;
    }

    public void DFS(Node cur){
        if(cur==null) return;
        DFS(cur.left);
        if(pre!=null)
            pre.right = cur;
        else
            head = cur;
        cur.left = pre;
        pre = cur;
        DFS(cur.right);
    }
}
```

