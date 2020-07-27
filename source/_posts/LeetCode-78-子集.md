---
title: LeetCode-78-子集
date: 2020/7/27 15:29:47
description: 子集
categories: LeetCode
tags: 
- 数组
- Java
- 回溯
- Medium
keywords: 数组,Java,Medium,LeetCode
---

## LeetCode-78-子集

给定一组**不含重复元素**的整数数组 *nums*，返回该数组所有可能的子集（幂集）。

**说明：**解集不能包含重复的子集。

<!--more-->

**示例1：**

```
输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

### 解题思路

**方法1、迭代：**

外层循环遍历原始数组

内层循环遍历结果集，进行结果集的组合

特例：空集是所有结果的子集

当知道目前结果集有[[],[1]]时，想要得到[1,2]的所有子集，**可以通过选择数字2和结果集进行组合得到**；2与[]组合，得到[2]，2与1组合得到[1,2]。最终结果集为[[],[1],[2],[1,2]]满足数组[1,2]子集结果

在代码上想要进行这类组合，只需要在选择下一个数字后，计算当前结果集的大小，内部循环到size，进行各个位置存的结果的获取，获取之后往尾部添加选择的数字即可。

**方法2、回溯：**

可以画递归树，看起来更为清晰

回溯的框架：

- 做出选择
- 递归进入下一层，此时i+1，从原始数组下一个开始，避免重复选择，所以不需要剪枝
- 当达到循环结束条件，即数组选完了，撤销上一次选择，走另外的路

### Java代码1

```java
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        res.add(new ArrayList<>());
        for (int num : nums) {
            int size = res.size();
            for (int i = 0; i < size; i++) {
                List<Integer> tmp = new ArrayList<>(res.get(i));
                tmp.add(num);
                res.add(tmp);
            }
        }
        return res;
    }
}
```

### Java代码2

```java
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        int len = nums.length;
        List<List<Integer>> res = new ArrayList<>();
        if (len == 0) return res;
        List<Integer> path = new ArrayList<>();
        backtrack(nums, 0, path, res);
        return res;
    }

    private void backtrack(int[] nums, int start, List<Integer> path, List<List<Integer>> res) {
        res.add(new ArrayList<>(path));
        for (int i = start; i < nums.length; i++) {
            path.add(nums[i]);
            backtrack(nums, i + 1, path, res);
            path.remove(path.size() - 1);
        }
    }
}
```

