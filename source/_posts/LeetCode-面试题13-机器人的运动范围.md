---
title: LeetCode-面试题13-机器人的运动范围
date: 2020/4/12 21:04:54
description: 机器人的运动范围
categories: 剑指Offer
tags: 
- DFS
- BFS
- Java
- python
- Medium
- 剑指Offer
keywords: 搜索,Java,python,Medium,剑指Offer
---

## LeetCode-面试题13-机器人的运动范围

地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 <!--more-->

**示例1**

```
输入：m = 2, n = 3, k = 1
输出：3
```

**示例2**

```
输入：m = 3, n = 1, k = 0
输出：1
```

**提示:**

- `1 <= n,m <= 100`
- `0 <= k <= 20`

### 解题思路

除了边界以外，其他格子都可以上下左右移动，这道题可以简化为向右和向下移动。

这是因为随着限制条件 `k` 的增大，`(0, 0)` 所在的蓝色方格区域内新加入的非障碍方格都可以由上方或左方的格子移动一步得到。

- 在递归深度优先搜索的时候，需要进行数位和运算，约束不能去的格子。对于传入的数字，其对10求余得到个位数，之后除以10，类似右移一位挤掉本来的个位数，再对10求余即可得到十位数。循环下来就是单个数字的数位和。


- 广度优先搜索也可以，这里采用一个基本的广度优先搜索策略，步骤如下把起始节点放入queue，之后从queue中取出队列头的格子，当格子符合数位和要求的时候就添加进set中，找出与取出格子相邻的上下左右的格子(这里只需要右边和下边的格子即可)，把它们放入到queue中，重复这个过程到queue为空为止。

### Java代码

```java
class Solution {
    int count = 0;
    public int movingCount(int m, int n, int k) {
        boolean[][] visited = new boolean[m][n];
        dfs(0,0,m,n,k,visited);
        return count;
    }

    public void dfs(int i,int j,int m,int n,int k,boolean[][] visited){
        if(i>=0&&i<m&&j>=0&&j<n&&sumNum(i)+sumNum(j)<=k&&visited[i][j]==false){
            count++;
            visited[i][j] = true;
            dfs(i+1,j,m,n,k,visited);
            dfs(i,j+1,m,n,k,visited);
        }
    }

    public int sumNum(int num){
        int sum = 0;
        while(num>0){
            sum+=num%10;
            num/=10;
        }
        return sum;
    }
}
```

### Python代码

```python
from queue import Queue
class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        q = Queue()
        q.put((0,0))
        s = set()
        while not q.empty():
            i , j = q.get()
            if (i, j) not in s and 0<=i<m and 0<=j<n and self.sumNum(i)+self.sumNum(j)<=k:
                s.add((i,j))
                for x,y in [(i+1,j),(i,j+1)]:
                    q.put((x,y))
        return len(s)

    def sumNum(self,n):
        sum = 0
        while n:
            sum += n % 10
            n //= 10
        return sum
```

