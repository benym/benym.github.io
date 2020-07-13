---
title: LeetCode-155-最小栈
date: 2020/7/13 09:46:46
description: 最小栈
categories: LeetCode
tags: 
- 栈
- Java
- Easy
keywords: 栈,Java,Easy,LeetCode
---

## LeetCode-155-最小栈

设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

- push(x) —— 将元素 x 推入栈中。
- pop() —— 删除栈顶的元素。
- top() —— 获取栈顶元素。
- getMin() —— 检索栈中的最小元素。

<!--more-->

**示例1：**

```
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

**提示：**

- `pop`、`top` 和 `getMin` 操作总是在 **非空栈** 上调用。

- 如果两个链表没有交点，返回 null.
- 在返回结果后，两个链表仍须保持原有的结构。
- 可假定整个链表结构中没有循环。
- 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

### 解题思路

**方法1、两个栈：**

需要一个数据栈，一个最小栈

最小栈始终存储当前的最小值

在push进数据栈的同时，判断最小栈是否为空或者新值是否小于最小栈的顶部值，

如果小于则加入新值到最小栈，如果不小于则加入最小栈栈顶(即上一个最小元素)入最小栈

当需要pop的时候，同时弹出最小栈和数据栈数值

当需要getMin时，返回最小栈的栈顶元素即是当前最小元素

当需要拿到top时，返回数据栈栈顶元素

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
        if(stack_min.size()==0||x<stack_min.peek()){
            stack_min.push(x);
        }else{
            stack_min.push(stack_min.peek());
        }
    }
    
    public void pop() {
        stack_data.pop();
        stack_min.pop();
    }
    
    public int top() {
        return stack_data.peek();
    }
    
    public int getMin() {
        return stack_min.peek();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
```







