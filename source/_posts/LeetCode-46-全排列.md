---
title: LeetCode-46-全排列
date: 2020/6/8 22:18:43
description: 全排列
categories: LeetCode
tags: 
- 回溯
- 数组
- Java
- Medium
- LeetCode
keywords: 回溯,数组,Java,Medium,LeetCode
---

## LeetCode-46-全排列

给定一个 **没有重复** 数字的序列，返回其所有可能的全排列。

 <!--more-->

**示例 1:**

```
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

### 解题思路

方法1、回溯：

回溯问题经常会涉及到一个状态数组

基本的思路想象成一个树的问题，是从一个数字(外层循环分别固定1，2，3数字)出发，往树的更深处遍历

- 如果当前位置没有访问过，就将这个数加入到路径中，之后开启更深一层的遍历
- 如果路径的长度等于了初始的数组长度，说明找到了一个可能的排列
- 如果走到最后没有找到这样的排列路径，则说明此路不同进行回溯操作，将访问的位置状态还原，并同时移除还原路上已经添加的数字

### Java代码

```java
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        int len = nums.length;
        List<List<Integer>> res = new ArrayList<>();
        if(len==0) return res;
        boolean[] visited = new boolean[len];
        List<Integer> path = new ArrayList<>();
        dfs(nums,len,0,path,visited,res);
        return res;
    }

    public void dfs(int[] nums, int len, int depth,
                     List<Integer> path, boolean[] visited,
                     List<List<Integer>> res){
        if(len==depth){
            res.add(new ArrayList<>(path));
            return;
        }
        for(int i=0;i<len;i++){
            if(!visited[i]){
                path.add(nums[i]);
                visited[i] = true;
                dfs(nums,len,depth+1,path,visited,res);
                visited[i] = false;
                path.remove(path.size()-1);
            }
        }
    }
}
```

