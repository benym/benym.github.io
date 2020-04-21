---
title: LeetCode-面试题29-顺时针打印矩阵
date: 2020/4/21 12:00:13
description: 顺时针打印矩阵
categories: 剑指Offer
tags: 
- 矩阵
- Python
- Java
- Easy
- 剑指Offer
keywords: 矩阵,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题29-顺时针打印矩阵

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。本题和螺旋矩阵相同

 <!--more-->

**示例1：**

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

**示例2：**

```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

**限制：**

- 0 <= matrix.length <= 100
- 0 <= matrix[i].length <= 100

### 解题思路

**方法1、**圈层

1. 记录左右和上下两个边界的点，按照上下左右算一圈，下一圈开始的时候初始位置+1，直到数组长度达到元素个数为止。Tips：注意几个初始点不参与遍历的变化。
2. 首先遍历第一行，记录最左的列位置，初始化left为0，一直遍历到right为矩阵列数为止，遍历完成后此时行数应该+1，即top+1。
3. 然后开始最右边一列的遍历，从top+1行开始，遍历到底部位置，之后应该从列数-1的位置开始下一次遍历，即right-1。然后进行底部一行的遍历，从right-1位置遍历到left位置，遍历完成之后应该从底部行向上移动开始下一次遍历，即bottom-1。
4. 最后进行最左边一列的遍历，从bottom-1位置直到top行，这样就完成了第一圈的遍历，然后使初始left+1，到达下一圈，此时其他数个点已经缩至下一圈范围。完成之后即可得到螺旋矩阵元素。

**方法2、**模拟

绘制螺旋轨迹路径，我们发现当路径超出界限或者进入之前访问过的单元格时，会顺时针旋转方向。

假设数组有R 行 C 列，seen[r,c]表示第 r 行第 c 列的单元格之前已经被访问过了。当前所在位置为(r, c)，前进方向是 di。我们希望访问所有R x C 个单元格。

当我们遍历整个矩阵，下一步候选移动位置是(cr, cc)。如果这个候选位置在矩阵范围内并且没有被访问过，那么它将会变成下一步移动的位置；否则，我们将前进方向顺时针旋转之后再计算下一步的移动位置。

dx，dy分别是向右下左上移动时，行和列的变化情况，联合起来看

### Java代码

```java
class Solution {
    public int[] spiralOrder(int[][] matrix) {
        if(matrix.length<=0)
            return new int[0];
        int rowlen = matrix.length;
        int collen = matrix[0].length;
        int[] result = new int[rowlen*collen];
        int left = 0;
        int right = collen-1;
        int top = 0;
        int bottom = rowlen-1;
        int total = 0;
        int x = 0;
        while(total!=rowlen*collen){
            for(int i = left;i<=right;i++){
                result[x] = matrix[top][i];
                total++;
                x++;
            }
            if(total==rowlen*collen) break;
            top++;
            for(int i = top;i<=bottom;i++){
                result[x] = matrix[i][right];
                total++;
                x++;
            }
            if(total==rowlen*collen) break;
            right--;
            for(int i = right;i>=left;i--){
                result[x] = matrix[bottom][i];
                total++;
                x++;
            }
            if(total==rowlen*collen) break;
            bottom--;
            for(int i = bottom;i>=top;i--){
                result[x] = matrix[i][left];
                total++;
                x++;
            }
            if(total==rowlen*collen) break;
            left++;
        }
        return result;
    }
}
```

### Python代码

```python
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix:return []
        x=y=0                                     # 矩阵元素位置初始化
        res = []                                  # 初始化，存储遍历后的矩阵元素
        dx = [ 0, 1, 0,-1]                        # 方向：右，下，左，上，x和y连起来看
        dy = [ 1, 0,-1, 0]                        # 注：与通常平面坐标系 记号 不同
        di = 0                                    # 初始化方向变量
        visited = set()                           # 初始化集合，存储已走过的坐标
        m,n = len(matrix),len(matrix[0])          # 矩阵的行列 
        for i in range(m*n):                                # 
            res.append(matrix[x][y])                        # 存储遍历矩阵过的元素
            visited.add((x,y))                              # 存储遍历过的坐标
            tx,ty = x+dx[di],y+dy[di]                       # 先记录下一步坐标，用于判断下一步怎么走
            if 0<=tx<m and 0<=ty<n and (tx,ty) not in visited: # 判断坐标是否需变向，且没有遍历过
                x,y = tx,ty                                       
            else:                                                
                di = (di+1)%4                               # 改变方向，右下左上为一圈，防止方向坐标越界
                x,y = x + dx[di],y+dy[di]                   # 下一步坐标
        return res
```

