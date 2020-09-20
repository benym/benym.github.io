---
title: LeetCode-679-24点游戏
date: 2020/9/20 10:32:30
description: 24点游戏
categories: LeetCode
tags: 
- 数组
- Java
- Hard
- LeetCode
keywords: 数组,Java,Hard,LeetCode
---

## LeetCode-679-24点游戏

你有 4 张写有 1 到 9 数字的牌。你需要判断是否能通过 `*`，`/`，`+`，`-`，`(`，`)` 的运算得到 24。

 <!--more-->

**示例 1:**

```
输入: [4, 1, 8, 7]
输出: True
解释: (8-4) * (7-1) = 24
```

**示例2：**

```
输入: [1, 2, 1, 2]
输出: False
```

注意:

1. 除法运算符 / 表示实数除法，而不是整数除法。例如 4 / (1 - 2/3) = 12 。
2. 每个运算符对两个数进行运算。特别是我们不能用 - 作为一元运算符。例如，[1, 1, 1, 1] 作为输入时，表达式 -1 - 1 - 1 - 1 是不允许的。
3. 你不能将数字连接在一起。例如，输入为 [1, 2, 1, 2] 时，不能写成 12 + 12 。

### 解题思路

题解来自https://leetcode-cn.com/problems/24-game/solution/24-dian-you-xi-by-leetcode-solution/

**方法1、回溯：**

一共有 4 个数和 3 个运算操作，因此可能性非常有限。一共有多少种可能性呢？

首先从 4 个数字中有序地选出 2 个数字，共有 4×3=12 种选法，并选择加、减、乘、除 4 种运算操作之一，用得到的结果取代选出的 2个数字，剩下 3个数字。

然后在剩下的 3 个数字中有序地选出 2 个数字，共有3×2=6 种选法，并选择 4 种运算操作之一，用得到的结果取代选出的 2 个数字，剩下 2 个数字。

最后剩下 2 个数字，有 2 种不同的顺序，并选择 4 种运算操作之一。

因此，一共有12×4×6×4×2×4=9216 种不同的可能性。

可以通过回溯的方法遍历所有不同的可能性。具体做法是，使用一个列表存储目前的全部数字，每次从列表中选出 2 个数字，再选择一种运算操作，用计算得到的结果取代选出的 2 个数字，这样列表中的数字就减少了 1 个。重复上述步骤，直到列表中只剩下 1 个数字，这个数字就是一种可能性的结果，如果结果等于 24，则说明可以通过运算得到 24。如果所有的可能性的结果都不等于 24，则说明无法通过运算得到 24。

实现时，有一些细节需要注意。

- 除法运算为实数除法，因此结果为浮点数，列表中存储的数字也都是浮点数。在判断结果是否等于 2424 时应考虑精度误差，这道题中，误差小于 10^{-6}可以认为是相等。

- 进行除法运算时，除数不能为 0，如果遇到除数为 0 的情况，则这种可能性可以直接排除。由于列表中存储的数字是浮点数，因此判断除数是否为 00 时应考虑精度误差，这道题中，当一个数字的绝对值小于 10^{-6} 时，可以认为该数字等于 00。


还有一个可以优化的点。

- 加法和乘法都满足交换律，因此如果选择的运算操作是加法或乘法，则对于选出的 22 个数字不需要考虑不同的顺序，在遇到第二种顺序时可以不进行运算，直接跳过。


### Java代码

```java
class Solution {
    static final int TARGET = 24;
    static final double EPSILON = 1e-6;
    static final int ADD = 0, MULTIPLY = 1, SUBTRACT = 2, DIVIDE = 3;

    public boolean judgePoint24(int[] nums) {
        List<Double> list = new ArrayList<Double>();
        for (int num : nums) {
            list.add((double) num);
        }
        return solve(list);
    }

    public boolean solve(List<Double> list) {
        if (list.size() == 0) {
            return false;
        }
        if (list.size() == 1) {
            return Math.abs(list.get(0) - TARGET) < EPSILON;
        }
        int size = list.size();
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (i != j) {
                    List<Double> list2 = new ArrayList<Double>();
                    for (int k = 0; k < size; k++) {
                        if (k != i && k != j) {
                            list2.add(list.get(k));
                        }
                    }
                    for (int k = 0; k < 4; k++) {
                        if (k < 2 && i > j) {
                            continue;
                        }
                        if (k == ADD) {
                            list2.add(list.get(i) + list.get(j));
                        } else if (k == MULTIPLY) {
                            list2.add(list.get(i) * list.get(j));
                        } else if (k == SUBTRACT) {
                            list2.add(list.get(i) - list.get(j));
                        } else if (k == DIVIDE) {
                            if (Math.abs(list.get(j)) < EPSILON) {
                                continue;
                            } else {
                                list2.add(list.get(i) / list.get(j));
                            }
                        }
                        if (solve(list2)) {
                            return true;
                        }
                        list2.remove(list2.size() - 1);
                    }
                }
            }
        }
        return false;
    }
}
```

