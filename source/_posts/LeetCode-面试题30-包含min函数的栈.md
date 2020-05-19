---
title: LeetCode-面试题30-包含min函数的栈
date: 2020/4/21 14:42:06
description: 包含min函数的栈
categories: 剑指Offer
tags: 
- 栈
- Java
- Easy
- 剑指Offer
keywords: 栈,Java,Easy,剑指Offer
---

## LeetCode-面试题30-包含min函数的栈

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

 <!--more-->

**示例1：**

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
```

**提示：**

1. 各函数的调用总次数不超过 20000 次

### 解题思路

辅助栈：数据栈再压入元素的时候与辅助栈的顶层元素(即之前数据栈的最小元素)做比较，如果比它小，就把值x同时压入数据栈和辅助栈。如果比它大，说明此时最小元素仍然是之前的最小元素，把辅助栈的栈顶取出来，数据栈压入x，辅助栈压入原本的辅助栈栈顶元素。这样就能保证辅助栈始终存放当前数据栈的最小值，在弹出数据时，同时弹出数据栈和辅助栈栈顶

### Java代码

```java
class MinStack {
    private Stack<Integer> stack_data;
    private Stack<Integer> stack_min;
    /** initialize your data structure here. */
    public MinStack() {
        stack_data = new Stack<>();
        stack_min = new Stack<>();
    }
    
    public void push(int x) {
        stack_data.push(x);
        if(stack_min.size()==0||x<stack_min.peek())
            stack_min.push(x);
        else
            stack_min.push(stack_min.peek());
    }
    
    public void pop() {
        stack_data.pop();
        stack_min.pop();
    }
    
    public int top() {
        return stack_data.peek();
    }
    
    public int min() {
        return stack_min.peek();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.min();
 */
```
