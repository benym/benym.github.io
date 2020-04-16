---
title: LeetCode-面试题12-矩阵中的路径
date: 2020/4/10 21:57:56
description: 矩阵中的路径
categories: 剑指Offer
tags: 
- 数组
- Java
- Python
- Medium
- 剑指Offer
keywords: 数组,Java,Python,Medium,剑指Offer
---

## LeetCode-面试题12-矩阵中的路径

请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

[["a","**b**","c","e"],
["s","**f**","**c**","s"],
["a","d","**e**","e"]]

但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。

 <!--more-->

**示例1**

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

**示例2**

```
输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
```

**提示：**

- `1 <= board.length <= 200`
- `1 <= board[i].length <= 200`

### 解题思路

找路径可以用回溯法，递归实现。在矩阵中选择任意一个格子作为路径的七点，假设矩阵中某个格子的字符为ch，并且这个格子将对应于路径上的第i个字符。如果路径上的第i个字符不是ch，那么这个格子不可能处在路径上的第i个位置。如果路径上的第i个字符正好是ch，那么到相邻的格子寻找路径上的第i+1个字符。除矩阵边界上的格子之外，其他格子都有4个相邻的格子，重复这个过程，直到路径上的所有字符都在矩阵中找到相应的位置。

需要递归的部分则是搜索一个格子的上下左右位置有没有下一个字符，如果都没有则说明当前位置不正确，范围上一个位置再进行搜索。

### Java代码

```java
class Solution {
    public boolean exist(char[][] board, String word) {
        int rowlen = board.length;
        int collen = board[0].length;
        boolean[][] visited = new boolean[rowlen][collen];
        int pathlen = 0;
        for (int row = 0; row < rowlen; row++) {
            for (int col = 0; col < collen; col++) {
                if (searchPath(board, row, rowlen, col, collen, word, visited, pathlen)) {
                    return true;
                }
            }
        }
        return false;
    }

    public boolean searchPath(char[][] board, int row, int rowlen, int col, int collen, String word, boolean[][] visited, int pathlen) {
        if (pathlen == word.length())
            return true;
        boolean falg = false;
        if (row >= 0 && row < rowlen && col >= 0 && col < collen
                && board[row][col] == word.charAt(pathlen)
                && !visited[row][col]) {
            pathlen++;
            visited[row][col] = true;
            falg = searchPath(board, row - 1, rowlen, col, collen, word, visited, pathlen) ||
                    searchPath(board, row + 1, rowlen, col, collen, word, visited, pathlen) ||
                    searchPath(board, row, rowlen, col - 1, collen, word, visited, pathlen) ||
                    searchPath(board, row, rowlen, col + 1, collen, word, visited, pathlen);
            // 当都没有找到的时候，返回上一个位置
            if (!falg) {
                pathlen--;
                visited[row][col] = false;
            }
        }
        return falg;
    }
}
```

### Python代码

```python
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def dfs(i, j, k):
            if not 0 <= i < len(board) or not 0 <= j < len(board[0]) or board[i][j] != word[k]:                     return False
            if k == len(word) - 1: return True
            tmp, board[i][j] = board[i][j], '/'
            res = dfs(i + 1, j, k + 1) or dfs(i - 1, j, k + 1) or dfs(i, j + 1, k + 1) or dfs(i, j - 1, k + 1)
            board[i][j] = tmp
            return res

        for i in range(len(board)):
            for j in range(len(board[0])):
                if dfs(i, j, 0): return True
        return False
```

