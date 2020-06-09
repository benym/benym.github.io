---
title: LeetCode-47-全排列2
date: 2020/6/9 18:33:18
description: 全排列2
categories: LeetCode
tags: 
- 回溯
- 数组
- Java
- Medium
- LeetCode
keywords: 回溯,数组,Java,Medium,LeetCode
---

## LeetCode-47-全排列2

给定一个可包含重复数字的序列，返回所有不重复的全排列。

 <!--more-->

**示例 1:**

```
输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```

### 解题思路

**回溯+剪枝：**

基于46题{% post_link LeetCode-46-全排列 %}

对于刚开始就有重复的数字序列，首先先对数组排序，**保证数据有序**

之后构建递归树，因为返回的结果中不能包含重复的排列，所以在如数组1、1、2的排列过程中

选择第一个1开头和选择第二个1开头的序列将会重复，所以说需要对第二个1开头的所有序列进行剪枝

对应条件为nums[i]==num[i-1]，即第二个1等于第一个1时

同时需要考虑仅在第一个1的排列选择完毕之后回退到空path的时候，才进行第二个1的剪枝。此时判断的依据是上一个nums[i-1]刚刚在回溯的过程中被撤销选择。

对于其他可能重复的位置，如2，1，1。开头2、1都相同于是后续的排列也是重复的，上述的剪枝方法同样适用

### Java代码

```java
class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        int len = nums.length;
        List<List<Integer>> res = new ArrayList<>();
        if (len == 0) return res;
        Arrays.sort(nums);
        boolean[] visited = new boolean[len];
        List<Integer> path = new ArrayList<>();
        dfs(nums, len, 0, path, visited, res);
        return res;
    }

    public void dfs(int[] nums,int len,int depth,List<Integer> path,boolean[] visited,List<List<Integer>> res){
        if(len==depth){
            res.add(new ArrayList<>(path));
            return;
        }
        for(int i=0;i<len;i++){
            if(!visited[i]){
                // visited[i-1]是因为nums[i-1]在回退的过程中刚刚被撤销选择
                if(i>0&&nums[i]==nums[i-1]&&visited[i-1]==false) continue;
                visited[i] = true;
                path.add(nums[i]);
                dfs(nums,len,depth+1,path,visited,res);
                visited[i] = false;
                path.remove(path.size()-1);
            }
        }
    }
}
```

