---
title: LeetCode-56-合并区间
date: 2020/8/2 16:28:08
description: 合并区间
categories: LeetCode
tags: 
- 数组
- Java
- Medium
keywords: 数组,Java,Medium,LeetCode
---

## LeetCode-56-合并区间

给出一个区间的集合，请合并所有重叠的区间。

<!--more-->

**示例1：**

```
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

**示例2：**

```
输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

### 解题思路

**方法1、排序+双指针：**

虽然示例中没有给出需要排序的案例，但需要考虑数组不是按照首位数组顺序排列的情况，这样会让区间难以判断，所以先做一个排序。

之后初始化双指针，指向第一个区间的start和end

进入for循环判断，判断下一个区间的首位是否大于上个区间的末尾

如果大于，则说明区间分离，加入新区间{start，end}，更新start

当下一个区间不大于end，即<=end的时候，区间均要进行合并，此时区间为上一个区间的start，到当前区间和下一个区间end的最大值，所以`end = Math.max(end,intervals[i][1])`

由于开始的start和end是上一个区间的结果，所以在最后一次时，暂时不会添加区间，`res.add(new int[]{start,end});`为最后一次添加之后转化为`int[][]`返回即可

### Java代码

```java
class Solution {
    public int[][] merge(int[][] intervals) {
        int len = intervals.length;
        if (intervals == null || len <= 1) return intervals;
        List<int[]> res = new ArrayList<>();
        Arrays.sort(intervals, (x, y) -> x[0] - y[0]);
        int start = intervals[0][0];
        int end = intervals[0][1];
        for (int i = 1; i < len; i++) {
            if(intervals[i][0]>end){
                res.add(new int[]{start,end});
                start = intervals[i][0];
            }
            end = Math.max(end,intervals[i][1]);
        }
        // 最后一次添加
        res.add(new int[]{start,end});
        return res.toArray(new int[res.size()][2]);
    }
}
```

