---
title: LeetCode-406-根据身高重建队列
date: 2020/7/18 09:32:29
description: 根据身高重建队列
categories: LeetCode
tags: 
- 数组
- Java
- Medium
keywords: 数组,Java,Medium,LeetCode
---

## LeetCode-406-根据身高重建队列

假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对(h, k)表示，其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。 编写一个算法来重建这个队列。

<!--more-->

**注意：**
总人数少于1100人。

**示例：**

```
输入:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

输出:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
```

### 解题思路

**方法1、贪心算法(排序+插入):**

详见官方题解：https://leetcode-cn.com/problems/queue-reconstruction-by-height/solution/gen-ju-shen-gao-zhong-jian-dui-lie-by-leetcode/

算法：

- 排序：
  - 按高度降序排列。
  - 在同一高度的人中，按 `k` 值的升序排列。
- 逐个地把它们放在输出队列中，索引等于它们的 `k` 值。
- 返回输出队列

### Java代码

```java
class Solution {
    public int[][] reconstructQueue(int[][] people) {
        Arrays.sort(people, new Comparator<int[]>() {
            // 如果两个人的身高相同，则需要按照k值进行升序排列
            // 如果不同则按照身高降序排列
            // 注意下面的数组下标是不同的
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[0] == o2[0] ? o1[1] - o2[1] : o2[0] - o1[0];
            }
        });
        List<int[]> output = new LinkedList<>();
        for (int[] p : people) {
            output.add(p[1], p);
        }
        int n = people.length;
        return output.toArray(new int[n][2]);
    }
}
```
