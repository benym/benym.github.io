---
title: LeetCode-面试题35-复杂链表的复制
date: 2020/4/23 21:13:47
description: 复杂链表的复制
categories: 剑指Offer
tags: 
- 链表
- Java
- Python
- Medium
- 剑指Offer
keywords: 链表,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题35-复杂链表的复制 

请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

 <!--more-->

**示例1：**

```
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```

**示例2**

```
输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
```

**示例3**

```
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
```

**示例4**

```
输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。
```

**提示：**

- -10000 <= Node.val <= 10000
- Node.random 为空（null）或指向链表中的节点。
- 节点数目不超过 1000 。

### 解题思路

方法1、哈希表：

需要2次循环，第一次循环建立原始链表Node和复制链表Node的映射关系，具体映射Node——>new(Node.val)，node.val只是为了初始化最开始的数值，新节点的next和random并没有设置

第二次循环建立复制链表关系，复制节点的next就是原本节点next对应的节点，random同理

方法2、分治(剑指解法)：

把复制链表的问题分解为3个子问题，每个问题独立解决

- 步骤1：连接原始链表和复制链表

  复制链表的next应该是原始链表的next(即`pClone.next = pNode.next`)，random暂时不设置，原始链表的next此时应该是复制链表的新建的Node(即`pNode.next = pClone`)，指针应该后移，此时复制链表的next对应着原始链表的next，所以`pNode = pClone.next`

- 步骤2：设置复制链表random指针的指向

  首先需要找到原始链表Node的random指向，即node.random，由于两个链表已经合并了的关系，此时复制链表的Node的random指针，应该指向`node.random.next`，因为现在N->N'，N代表原始链表节点，N'代表复制链表节点

- 步骤3：拆分整个链表为原始链表和复制链表

  把奇数位置的节点用next连接起来就是原始链表，把偶数位置的节点用next连接起来就是复制链表

### Java代码

```java
/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/
class Solution {
    public Node copyRandomList(Node head) {
        Map<Node,Node> map = new HashMap<>();
        if(head==null) return head;
        Node first = head;
        while(first!=null){
            map.put(first,new Node(first.val));
            first = first.next;
        }
        first = head;
        while(first!=null){
            map.get(first).next = map.get(first.next);
            map.get(first).random = map.get(first.random);
            first = first.next;
        }
        return map.get(head);
    }
}
```

### Python代码

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""
class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        self.CloneNodes(head)
        self.ConnectRandom(head)
        return self.ReconnectNodes(head)
    
    # 复制复杂链表
    def CloneNodes(self,head):
        pNode = head
        while pNode:
            pClone = Node(pNode.val)
            pClone.next = pNode.next
            pClone.random = None
            pNode.next = pClone
            pNode = pClone.next
    
    # 复制链表random部分
    def ConnectRandom(self,head):
        pNode = head
        while pNode:
            pClone = pNode.next
            if pNode.random:
                pClone.random = pNode.random.next
            pNode = pClone.next
    
    # 将复杂链表拆分成两个链表
    def ReconnectNodes(self,head):
        pNode = head
        pCloneHead = None
        pCloneNode = None
        if pNode:
            pCloneNode = pNode.next
            pCloneHead = pCloneNode
            pNode.next = pCloneNode.next
            pNode = pNode.next
        while pNode:
            pCloneNode.next = pNode.next
            pCloneNode = pCloneNode.next
            pNode.next = pCloneNode.next
            pNode = pNode.next
        return pCloneHead
```

