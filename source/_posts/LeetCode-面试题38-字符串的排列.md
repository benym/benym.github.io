---
title: LeetCode-面试题38-字符串的排列
date: 2020/4/27 18:01:14
description: 字符串的排列
categories: 剑指Offer
tags: 
- 字符串
- 全排列
- DFS
- 回溯
- Python
- Java
- Medium
- 剑指Offer
keywords: 字符串,全排列,DFS,回溯,Python,Java,Medium,剑指Offer
---

## LeetCode-面试题38-字符串的排列 

输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 <!--more-->

**示例：**

```
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
```

**限制：**

​	`1 <= s 的长度 <= 8`

### 解题思路

**方法1：DFS全排列+剪枝**

基本原理通过字符交换的方式，先固定第1位，再固定第2位，一直到固定第n位。

比如固定a，找剩下bc的可能排列，再固定b，找剩下c的可能排列。

之后固定b，找ac的可能排列....直到所有的组合都被找到

特例处理：当初始的字符串有重复的字符时，如aab，需要保证字符只在此为固定一次，即遇到重复的字符时不进行交换直接跳过，即剪枝

**方法2：DFS+回溯**

[全排列问题详解见该文](https://leetcode-cn.com/problems/permutations/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liweiw/)

路径从空开始构建，当DFS深度达到了字符串长度时则添加进去，之后开始回溯，将访问过的状态复原，path弹出

### Java代码

```java
class Solution {
    List<String> res = new LinkedList<>();
    public String[] permutation(String s) {
        if(s==null||s.length()==0) return new String[0];
        char[] c = s.toCharArray(); 
        StringHelper(c,0);
        return res.toArray(new String[res.size()]);
    }

    public void StringHelper(char[] c,int start){
        if(start==c.length-1){
            res.add(String.valueOf(c)); // 添加排列
            return;
        }
        HashSet<Character> set = new HashSet<>();
        for(int i=start;i<c.length;i++){
            if(set.contains(c[i])) continue; // 剪枝重复的
            set.add(c[i]);
            // 交换，将c[i]固定在start位置，比如abc，此时固定a
            char temp = c[i];
            c[i] = c[start];
            c[start] = temp;
            // 递归start+1位置，比如abc，此时进入bc的固定再交换，递归
            StringHelper(c,start+1);
            // 恢复交换
            temp = c[i];
            c[i] = c[start];
            c[start] = temp;
        }
    }
}
```

### Python代码

```python
class Solution:
    def permutation(self, s: str) -> List[str]:
        def dfs(s, size, depth, visited, path, res):
            if depth == size: # 路径达到长度了，进行添加
                res.append("".join(path[:]))
                return

            for i in range(size):
                if not visited[i]:
                    # 如果当前节点和前一个节点相同，且他的前一个节点已经被遍历，则跳过
                    if i>0 and s[i]==s[i-1] and not visited[i-1]:continue
                    visited[i] = True # 访问过了
                    path.append(s[i]) # 添加进路径
                    dfs(s, size, depth + 1, visited, path, res) # 开启DFS
                    visited[i] = False # 回溯，状态还原
                    path.pop() # 路径还原
                
        s = list(sorted(s)) # 考虑重复问题，先进行排序
        size = len(s)
        if size == 0:
            return []
        res = []
        path = []
        visited = [False for _ in range(size)]
        dfs(s, size, 0, visited, path, res)
        return res
```

