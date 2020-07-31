---
title: LeetCode-77-组合
date: 2020/7/28 09:30:45
description: 组合
categories: LeetCode
tags: 
- 数组
- 回溯
- Java
- Medium
keywords: 数组,Java,回溯,Medium,LeetCode
---

## LeetCode-77-组合

给定两个整数 *n* 和 *k*，返回 1 ... *n* 中所有可能的 *k* 个数的组合。

<!--more-->

**示例1：**

```
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

### 解题思路

**方法1、回溯：**

典型的回溯题目，通过画一棵选择树不难看出，当有初始数组[1,2,3,4]，k=2时

选择1之后，选择2，3，4能够组合成新的字串

选择2之后，选择3，4，能够组合成新的字串

可以归纳为，对于第i个选择的数，其和i+1开始到n的所有数进行组合，能够得到新的字串，且不会发生重复。

递归的终止条件为，k==2时，将字串添加进res中

当选择到达要求进行返回时，撤销上一次的选择，进行新的选择组合成新的字串

### Java代码

```java
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> res = new ArrayList<>();
        backtrack(res, 1, n, k, new ArrayList<>());
        return res;
    }

    private void backtrack(List<List<Integer>> res, int i, int n, int k, ArrayList<Integer> temp) {
        if (k == temp.size()) {
            res.add(new ArrayList<>(temp));
            return;
        }
        for (int start = i; start < n + 1; start++) {
            temp.add(start);
            backtrack(res, start + 1, n, k, temp);
            temp.remove(temp.size() - 1);
        }
    }
}
```



