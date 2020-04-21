---
title: LeetCode-面试题31-栈的压入弹出序列
date: 2020/4/21 15:50:42
description: 栈的压入弹出序列
categories: 剑指Offer
tags: 
- 栈
- Python
- Java
- Medium
- 剑指Offer
keywords: 栈,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题31-栈的压入弹出序列

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

 <!--more-->

**示例1：**

```
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

**示例2：**

```
输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
```

**限制：**

1. 0 <= pushed.length == popped.length <= 1000
2. 0 <= pushed[i], popped[i] < 1000
3. pushed 是 popped 的排列。

### 解题思路

特殊测试用例：入栈序列为空、出栈序列为空、出入栈值不相等时，返回false

辅助栈：利用一个栈来进行辅助，将入栈元素push入辅助栈，判断辅助栈内的值是否和出栈顺序相同，如果不相同就继续push入栈元素，如果相同则将辅助栈元素弹出，出栈下标加1。当入栈和出栈序列相同时，辅助栈应该为空。当找完了入栈，辅助栈不为空的情况，说明该出栈不是入栈的一个弹出序列。

### Java代码

```java
class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        if(pushed==null||popped==null||pushed.length!=popped.length)
            return false;
        Stack<Integer> stack = new Stack<>();
        int index = 0;
        for(Integer i : pushed){
            stack.push(i);
            while(!stack.isEmpty()&&index<popped.length&&stack.peek().equals(popped[index])){
                stack.pop();
                index++;
            }
        }
        return stack.isEmpty();
    }
}
```

### Python代码

```python
class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        stack = []
        j = 0
        for x in pushed:
            stack.append(x)
            while stack and j < len(popped) and stack[-1] == popped[j]:
                stack.pop()
                j += 1
        return not stack
```

