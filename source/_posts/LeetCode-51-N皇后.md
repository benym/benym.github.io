---
title: LeetCode-51-N皇后
date: 2020/6/8 19:55:16
description: N皇后
categories: LeetCode
tags: 
- 二维数组
- 矩阵
- 回溯
- Java
- Hard
keywords: 二维数组,矩阵,回溯,Java,Hard
---

## LeetCode-51-N皇后

*n* 皇后问题研究的是如何将 *n* 个皇后放置在 *n*×*n* 的棋盘上，并且使皇后彼此之间不能相互攻击。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

 <!--more-->

**示例 1:**

```
输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。
```

提示：

- 皇后，是国际象棋中的棋子，意味着国王的妻子。皇后只做一件事，那就是“吃子”。当她遇见可以吃的棋子时，就迅速冲上去吃掉棋子。当然，她横、竖、斜都可走一到七步，可进可退。（引用自 百度百科 - 皇后 ）


### 解题思路

回溯方法引用与[LeetCode官方](https://leetcode-cn.com/problems/n-queens/solution/nhuang-hou-by-leetcode/)

**方法1、**回溯：

在建立算法之前，我们来考虑两个有用的细节。

一行只可能有一个皇后且一列也只可能有一个皇后。

这意味着没有必要再棋盘上考虑所有的方格。只需要按列循环即可。

对于所有的主对角线有 **行号 + 列号 = 常数**，对于所有的次对角线有 **行号 - 列号 = 常数**.

这可以让我们标记已经在攻击范围下的对角线并且检查一个方格 (行号, 列号) 是否处在攻击位置。

```
1、一行一个皇后
2、每个皇后的左上方向没有其他皇后，每个皇后的上方没有其他皇后，每个皇后的右上方向没有皇后
```

现在已经可以写回溯函数 backtrack(row = 0).

- 从第一个 row = 0 开始.

- 循环列并且试图在每个 column 中放置皇后.
  - 如果方格 (row, column) 不在攻击范围内
    - 在 (row, column) 方格上放置皇后。
    - 排除对应行，列和两个对角线的位置。
    - If 所有的行被考虑过，row == N
      - 意味着我们找到了一个解
    - Else
      - 继续考虑接下来的皇后放置 backtrack(row + 1).
    - 回溯：将在 (row, column) 方格的皇后移除.

### Java代码

```java
class Solution {
    private List<List<String>> output = new ArrayList<>();

    // 用于标记是否被列方向的皇后攻击
    int[] rows;
    // 用于标记是否被主对角线方向的皇后攻击
    int[] mains;
    // 用于标记是否被次对角线方向的皇后攻击
    int[] secondary;
    // 用于存储皇后放置的位置
    int[] queens;

    int n;

    public List<List<String>> solveNQueens(int n) {
        // 初始化
        rows = new int[n];
        mains = new int[2*n-1];
        secondary = new int[2*n-1];
        queens = new int[n];
        this.n = n;
        // 从第一行开始回溯求解N皇后
        backtrack(0);
        return output;
    }

    // 在一行中放置一个皇后
    private void backtrack(int row){
        if(row>=n) return;
        // 分别尝试在row行中的每一列都放置一个皇后
        for(int col=0;col<n;col++){
            // 判断当前放置的皇后不被其他皇后攻击
            if(isNotUnderAttack(row,col)){
                // 选择，在当前的位置上放置皇后
                placeQueen(row,col);
                // 当前行是最后一行，则找到了一个解决方案
                if(row==n-1) addSolution();
                // 在下一行中放置皇后
                backtrack(row+1);
                // 回溯，将当前位置的皇后去掉
                removeQueen(row,col);
            }
        }
    }

    // 判断row行，col列这个位置有没有被其他方向的皇后攻击
    private boolean isNotUnderAttack(int row,int col){
        // 判断的逻辑是：
        //      1. 当前位置的这一列方向没有皇后攻击
        //      2. 当前位置的主对角线方向没有皇后攻击
        //      3. 当前位置的次对角线方向没有皇后攻击
        int res = rows[col]+mains[row-col+n-1]+secondary[row+col];
        // 如果三个方向都没有攻击的话，则res=0
        return res == 0;
    }

    // 在指定的位置上放置皇后
    private void placeQueen(int row,int col){
        // 在row行，col列放置皇后
        queens[row] = col;
        // 当前位置的列方向已经有皇后了
        rows[col] = 1;
        // 当前位置的主对角线方向已经有皇后了
        mains[row-col+n-1] = 1;
        // 当前位置的次对角线方向已经有皇后了
        secondary[row+col] = 1;
    }

    // 移除指定位置上的皇后
    private void removeQueen(int row,int col){
        // 移除row行上的皇后
        queens[row] = 0;
        // 当前位置的列方向没有皇后了
        rows[col] = 0;
        // 当前位置的主对角线方向没有皇后了
        mains[row-col+n-1] = 0;
        // 当前位置的次对角线方向没有皇后了
        secondary[row+col] = 0;
    }

    // 将满足条件的皇后位置放入output中
    public void addSolution(){
        List<String> Solution = new ArrayList<String>();
        for(int i=0;i<n;i++){
            int col = queens[i];
            StringBuilder sb = new StringBuilder();
            for(int j=0;j<col;j++) sb.append(".");
            sb.append("Q");
            for(int j=0;j<n-col-1;j++) sb.append(".");
            Solution.add(sb.toString());
        }
        output.add(Solution);
    }
}
```

