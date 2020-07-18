---
title: LeetCode-207-课程表
date: 2020/7/18 11:25:07
description: 课程表
categories: LeetCode
tags: 
- 数组
- 图论算法
- 拓扑排序
- BFS
- DFS
- Java
- Medium
keywords: 数组,图论算法,拓扑排序,BFS,DFS,Java,Medium,LeetCode
---

## LeetCode-207-课程表

你这个学期必须选修 numCourse 门课程，记为 0 到 numCourse-1 。

在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们：[0,1]

给定课程总量以及它们的先决条件，请你判断是否可能完成所有课程的学习？

<!--more-->

**示例1：**

```
输入: 2, [[1,0]] 
输出: true
解释: 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。
```

**示例2：**

```
输入: 2, [[1,0],[0,1]]
输出: false
解释: 总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
```

提示：

1. 输入的先决条件是由 边缘列表 表示的图形，而不是 邻接矩阵 。详情请参见图的表示法。
2. 你可以假定输入的先决条件中没有重复的边。
3. `1 <= numCourses <= 10^5`

### 解题思路

转载自https://leetcode-cn.com/problems/course-schedule/solution/course-schedule-tuo-bu-pai-xu-bfsdfsliang-chong-fa/

课程安排图问题，可以转化为通过**拓扑排序**判断这个图是否是**有向无环图**

拓扑排序的原理：可见[这篇文章](https://www.baidu.com/link?url=H0hi4V_QynS24TlOlQFcgXc7n7S9-MWlkIcUFKlE91-PK00DwVqMpPXbalHSPELwYOhXFQLUFsxG4tDULP3n-q&wd=&eqid=d8c3921e00077572000000065f12a60d)

**方法1、入度表(BFS)：**

**算法流程：**

1. 统计课程安排图中每个节点的入度，生成 **入度表** `indegrees`。
2. 借助一个队列 `queue`，将所有入度为 0 的节点入队。
3. 当 `queue` 非空时，依次将队首节点出队，在课程安排图中删除此节点` pre`：
   1. 并不是真正从邻接表中删除此节点 `pre`，而是将此节点对应所有邻接节点` cur `的入度 -1，即` indegrees[cur] -= 1`。
   2. 当入度 -1后邻接节点` cur` 的入度为 0，说明 `cur `所有的前驱节点已经被 “删除”，此时将 `cur `入队。
4. 在每次 `pre `出队时，执行 `numCourses--`；
   1. 若整个课程安排图是有向无环图（即可以安排），则所有节点一定都入队并出队过，即完成拓扑排序。换个角度说，若课程安排图中存在环，一定有节点的入度始终不为 0。
   2. 因此，拓扑排序出队次数等于课程个数，返回 `numCourses == 0` 判断课程是否可以成功安排。

**复杂度分析：**

- **时间复杂度** O(N + M)： 遍历一个图需要访问所有节点和所有临边，N 和 M 分别为节点数量和临边数量；
- **空间复杂度** O(N + M)： 为建立邻接表所需额外空间，adjacency 长度为 N ，并存储 M 条临边的数据。

### Java代码

```java
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        int[] indegrees = new int[numCourses];
        List<List<Integer>> adjacency = new ArrayList<>();
        Queue<Integer> queue = new LinkedList<>();
        for(int i=0;i<numCourses;i++){
            adjacency.add(new ArrayList<>());
        }
        // 获得每个课程入度和邻接表
        for(int[] cp:prerequisites){
            indegrees[cp[0]]++;
            adjacency.get(cp[1]).add(cp[0]);
        }
        // 获得所有入度为0的课程
        for(int i=0;i<numCourses;i++){
            if(indegrees[i]==0) queue.add(i);
        }
        // BFS
        while(!queue.isEmpty()){
            int pre = queue.poll();
            numCourses--;
            for(int cur: adjacency.get(pre)){
                if(--indegrees[cur]==0) queue.add(cur);
            }
        }
        return numCourses == 0;
    }
} 
```
