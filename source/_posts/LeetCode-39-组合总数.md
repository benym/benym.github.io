---
title: LeetCode-39-组合总数
date: 2020/7/5 11:01:10
description: 组合总数
categories: LeetCode
tags: 
- 数组
- DFS
- Java
- Medium
keywords: 数组,DFS,Java,Medium,LeetCode
---

## LeetCode-39-组合总数

给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

**说明：**

- 所有数字（包括 `target`）都是正整数。
- 解集不能包含重复的组合。 

<!--more-->

**示例1：**

```
输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]
```

**示例2：**

```
输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

### 解题思路

**方法1、DFS+回溯：**

排列组合的问题，一般也是全排列问题

这类问题可以使用回溯法+递归解决

基本思路：

- 当target=7时，为根节点，进行分支选择
- 当减到0或者负数的时候，就是到了叶子节点，进行返回
- 当减到0时，进行结果集的保存，从根节点到叶子节点(0)的路径就是答案其中一个组合

刚开始一定要在纸上画一棵递归树，写出示例的整个树结构，在明白最基本的算法怎么实现之后，根据题意需要考虑结果不重复的问题，于是就需要对这个树进行剪枝操作

比如示例1中，可能的路径有`[[2,2,3],[2,3,2],[3,2,2],[7]]`

而答案中只有`[[7],[2,2,3]]`，显然，重复的原因是在较深层的节点值考虑了之前选择过的元素

剪枝流程：

- 在搜索的时候，需要设置起点的下标`start`，避免选择之前选择过的节点

### Java代码

```java
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> res = new ArrayList<>();
        int len = candidates.length;
        if(len==0) return res;
        List<Integer> arr = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack(candidates,target,res,0,arr);
        return res;
    }

    public void backtrack(int[] candidates,int target,List<List<Integer>> res,int i,List<Integer> tmp_list){
        if(target<0) return;
        if(target==0){
            res.add(new ArrayList<>(tmp_list));
            return;
        }
        // 如果start从0开始，则会遍历全部数组，选择重复的，记录start避免重复
        for(int start=i;start<candidates.length;start++){
            if(target<0) break;
            tmp_list.add(candidates[start]);
            backtrack(candidates,target-candidates[start],res,start,tmp_list);
            tmp_list.remove(tmp_list.size()-1);
        }
    }
}
```

