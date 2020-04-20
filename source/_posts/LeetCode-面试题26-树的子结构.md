---
title: LeetCode-面试题26-树的子结构
date: 2020/4/20 13:33:50
description: 树的子结构
categories: 剑指Offer
tags: 
- 树
- Python
- Java
- Medium
- 剑指Offer
keywords: 树,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题26-树的子结构

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

 <!--more-->

**示例1：**

```
输入：A = [1,2,3], B = [3,1]
输出：false
```

**示例2：**

```
输入：A = [3,4,5,1,2], B = [4,1]
输出：true
```

**限制：**

`0 <= 节点个数 <= 10000`

### 解题思路

首先需要判断A和B根节点是否相同，如果相同则开启子树的匹配，如果不相同则需要判断A树的左右节点是否和B树根节点相同，再判断子树结构。

子树的判断用递归的思路来考虑，如果传入的A的根节点和B的根节点值不相同，则以A的根节点开始的子树肯定没有B子树相同的节点。如果他们的值是相同的则需要递归考虑，它们各自的左右节点的值是不是相同。

递归的终止条件是到达了树A或者树B的叶子节点，当树B的叶子节点为空的时候说明，B子树已经遍历完了，A包含B。而当A的叶子节点为空时，说明遍历完A也没有找到B子树，A不包含B

### Java代码

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if(l1==null)
            return l2;
        else if(l2==null)
            return l1;
        ListNode MergeHead = null;
        if(l1.val>l2.val){
            MergeHead = l2;
            MergeHead.next = mergeTwoLists(l1,l2.next);
        }
        else{
            MergeHead = l1;
            MergeHead.next = mergeTwoLists(l1.next,l2);
        }
        return MergeHead;
    }
}
```

### Python代码

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1: return l2
        elif not l2: return l1
        MergeHead = None
        if l1.val<l2.val:
            MergeHead = l1
            MergeHead.next = self.mergeTwoLists(l1.next,l2)
        else:
            MergeHead = l2
            MergeHead.next = self.mergeTwoLists(l1,l2.next)
        return MergeHead
```

