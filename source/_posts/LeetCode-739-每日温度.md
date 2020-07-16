---
title: LeetCode-739-每日温度
date: 2020/7/16 09:33:43
description: 每日温度
categories: LeetCode
tags: 
- 数组
- 栈
- Java
- Medium
keywords: 数组,栈,Java,Medium,LeetCode
---

## LeetCode-739-每日温度

请根据每日`气温`列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表`temperatures = [73, 74, 75, 71, 69, 72, 76, 73]`，你的输出应该是 `[1, 1, 4, 2, 1, 1, 0, 0]`。

提示：气温 列表长度的范围是 `[1, 30000]`。每个气温的值的均为华氏度，都是在 `[30, 100] `范围内的整数。

<!--more-->

### 解题思路

**方法1、暴力破解：**

顺序遍历数组，固定第一个数，往后找比他大的数的位置，位置之差就是新数组中该数位置的值。之后固定第二个...直到数组结束

**方法2、单调栈：**

使用一个栈存储元素下标，当栈内有元素(不为空)，且新温度大于栈顶元素时，弹出栈顶元素，计算下标差值，作为栈顶元素位置的值。

继续看新的栈顶元素，直到当前数字小于等于栈顶元素停止，然后将数字入栈，这样就可以保持递减栈，且每个数字和第一个大于它的数的距离也可以算出来

### Java代码

```java
class Solution {
    public int[] dailyTemperatures(int[] T) {
        int len = T.length;
        int[] dp = new int[len];
        for (int i = 0; i < len; i++) {
            int j = i;
            while (j < len) {
                if (T[i] < T[j]) {
                    dp[i] = j - i;
                    break;
                } else {
                    j++;
                }
            }
        }
        return dp;
    }
}
```

### Java代码2

```java
class Solution {
    public int[] dailyTemperatures(int[] T) {
        Stack<Integer> stack = new Stack<>();
        int len = T.length;
        int[] res = new int[len];
        for(int i=0;i<len;i++){
            while(!stack.isEmpty()&&T[i]>T[stack.peek()]){
                int pre = stack.pop();
                res[pre] = i-pre;
            }
            stack.add(i);
        }
        return res;
    }
}
```





