---
title: LeetCode-54-螺旋矩阵
date: 2020/3/30 19:21:08
description: 螺旋矩阵
categories: 二维数组
tags: 
- 二维数组
- Java
- Python
- Medium
keywords: 二维数组,Java,Python,Medium
---

## LeetCode-54-螺旋矩阵

给定一个包含 *m* x *n* 个元素的矩阵（*m* 行, *n* 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

 <!--more-->

**示例 1:**

```
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
```

**示例 2:**

```
输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
```

### 解题思路

**方法1、**圈层

1. 记录左右和上下两个边界的点，按照上下左右算一圈，下一圈开始的时候初始位置+1，直到数组长度达到元素个数为止。Tips：注意几个初始点不参与遍历的变化。
2. 首先遍历第一行，记录最左的列位置，初始化left为0，一直遍历到right为矩阵列数为止，遍历完成后此时行数应该+1，即top+1。
3. 然后开始最右边一列的遍历，从top+1行开始，遍历到底部位置，之后应该从列数-1的位置开始下一次遍历，即right-1。然后进行底部一行的遍历，从right-1位置遍历到left位置，遍历完成之后应该从底部行向上移动开始下一次遍历，即bottom-1。
4. 最后进行最左边一列的遍历，从bottom-1位置直到top行，这样就完成了第一圈的遍历，然后使初始left+1，到达下一圈，此时其他数个点已经缩至下一圈范围。完成之后即可得到螺旋矩阵元素。

**方法2、**模拟(官方解法)

绘制螺旋轨迹路径，我们发现当路径超出界限或者进入之前访问过的单元格时，会顺时针旋转方向。

假设数组有R 行 C 列，seen[r,c]表示第 r 行第 c 列的单元格之前已经被访问过了。当前所在位置为(r, c)，前进方向是 di。我们希望访问所有R x C 个单元格。

当我们遍历整个矩阵，下一步候选移动位置是(cr, cc)。如果这个候选位置在矩阵范围内并且没有被访问过，那么它将会变成下一步移动的位置；否则，我们将前进方向顺时针旋转之后再计算下一步的移动位置。

### Java代码

```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> list = new ArrayList<>();
        if(matrix.length==0){
            return list;
        }
        int rowlen = matrix.length;
        int collen = matrix[0].length;
        int total_num = 0;
        int left = 0;
        int right = collen - 1;
        int top = 0;
        int bottom = rowlen - 1;
        while (total_num != rowlen * collen) {
            for (int i = left; i <= right; i++) {
                list.add(matrix[top][i]);
                total_num++;
            }
            if (total_num == rowlen * collen) break;
            top++;
            for (int i = top; i <= bottom; i++) {
                list.add(matrix[i][right]);
                total_num++;
            }
            if (total_num == rowlen * collen) break;
            right--;
            for (int i = right; i >= left; i--) {
                list.add(matrix[bottom][i]);
                total_num++;
            }
            if (total_num == rowlen * collen) break;
            bottom--;
            for (int i = bottom; i >= top; i--) {
                list.add(matrix[i][left]);
                total_num++;
            }
            if (total_num == rowlen * collen) break;
            left++;
        }
        return list;
    }
}
```

### Python代码

```python
def spiralOrder(matrix):
    if not matrix: return []
    R, C = len(matrix), len(matrix[0])
    seen = [[False] * C for _ in matrix]
    ans = []
    # 改变方向时，row和col变化的数值，di仅在改变方向时移动
    dr = [0, 1, 0, -1]
    dc = [1, 0, -1, 0]
    r = c = di = 0
    for _ in range(R * C):
        ans.append(matrix[r][c])
        seen[r][c] = True
        cr, cc = r + dr[di], c + dc[di]
        if 0 <= cr < R and 0 <= cc < C and not seen[cr][cc]:
            r, c = cr, cc
        else:
            di = (di + 1) % 4
            r, c = r + dr[di], c + dc[di]
    return ans

if __name__=='__main__':
    # 输入二维数组
    row ,col = [int(n) for n in input().split()]
    list = [[0]*col]*row
    for i in range(row):
        list[i] = [int(i) for i in input().split()]
    result = spiralOrder(list)
    print(result)
```

