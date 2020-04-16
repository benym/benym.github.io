---
title: LeetCode-面试题09-用两个栈实现队列
date: 2020/4/7 22:04:26
description: 用两个栈实现队列
categories: 剑指Offer
tags: 
- 队列
- Java
- Python
- Easy
- 剑指Offer
keywords: 队列,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题09-用两个栈实现队列

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 `appendTail` 和 `deleteHead `，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，`deleteHead` 操作返回 -1 )

 <!--more-->

**示例1**

```
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
```

**示例2**

```
输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
```

**提示：**

- `1 <= values <= 10000`
- `最多会对 appendTail、deleteHead 进行 10000 次调用`

### 解题思路

首先，栈的特点是先进后出，队列的特点是先进先出。对于一批输入的数字，如5，2。我们保存在栈内5在栈底，2在栈顶，直接不能输出5，可以利用另外一个栈stack2将stack1的数据复制出去，当stack1不为空时就弹出复制到stack2，为2，5，此时栈顶为5，当stack2不为空时，不断弹出栈顶即可模拟先进先出。当stack2为空是，输出-1

### Java代码

```java
class CQueue {

    Deque<Integer> stack1;
    Deque<Integer> stack2;

    public CQueue() {
        stack1 = new LinkedList<>();
        stack2 = new LinkedList<>();
    }

    public void appendTail(int value) {
        stack1.push(value);
    }

    public int deleteHead() {
        while(stack1.size()>0){
            stack2.addLast(stack1.removeLast());
            return stack2.removeLast();
        }
        if(stack2.size()==0){
            return -1;
        }
        return stack2.removeLast();
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * CQueue obj = new CQueue();
 * obj.appendTail(value);
 * int param_2 = obj.deleteHead();
 */
```

### Python代码

```python
class CQueue(object):

    def __init__(self):
        self.stack1,self.stack2 = [],[]


    def appendTail(self, value):
        """
        :type value: int
        :rtype: None
        """
        self.stack1.append(value)


    def deleteHead(self):
        """
        :rtype: int
        """
        if self.stack2: return self.stack2.pop()
        if not self.stack1: return -1
        while self.stack1:
            self.stack2.append(self.stack1.pop())
        return self.stack2.pop()



# Your CQueue object will be instantiated and called as such:
# obj = CQueue()
# obj.appendTail(value)
# param_2 = obj.deleteHead()
```

