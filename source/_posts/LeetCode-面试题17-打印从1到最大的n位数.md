---
title: LeetCode-面试题17-打印从1到最大的n位数
date: 2020/4/14 18:45:52
description: 打印从1到最大的n位数
categories: 剑指Offer
tags: 
- 大数问题
- Java
- Medium
- 剑指Offer
keywords: 大数问题,Java,Medium,剑指Offer
---

## LeetCode-面试题17-打印从1到最大的n位数

输入数字 `n`，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

 <!--more-->

**示例1**

```
输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
```

**说明:**

- 用返回一个整数列表来代替打印
- n 为正整数

### 解题思路

这题本身是个大数问题，先写个不是大数的偷懒版本，10的n次方-1就是n位数的最大数，依次遍历存储即可。

大数解法：n位所有十进制数都是0~9的数字的全排列，对于不足两位的数字前面补0，固定首位，从0~9调整后面一位。用递归来进行表达，结束条件是设置了数字的最后一位。

抽象成树就是第一行表示数字首位0~9的节点，比如n=1，则根节点只有一个0。n=2，根节点有2个，一个是0，一个是1，先从0开始深度搜，再固定第一位是1，往下从0~9深度搜。直到9出现（即当前设置位=数组长度）表示设置了最后一位。

### Java代码1

```java
class Solution {
    public int[] printNumbers(int n) {
        int sum = (int)Math.pow(10,n);
        int[] num = new int[sum-1];
        for(int i=0;i<sum-1;i++){
            num[i]=i+1;
        }
        return num;
    }
}
```

### Java代码2

```python
class Solution {
    public int[] printNumbers(int n) {
        char[] num = new char[n];
        List<Integer> res = new ArrayList<>();
        // 数组初始化
        for(int i =0;i < n;i++){
            num[i] = '0';
        }
        DFS(num,res,0);
        // 去除1位数情况开始的0
        res.remove(0);
        int[] resInt = res.stream().mapToInt(Integer::valueOf).toArray();
        return resInt;
    }

    public void DFS(char[] num,List<Integer> res,int index){
        // 终止条件
        if(index == num.length){
            int n = save(num);
            res.add(n);
            return;
        }
        for(int i=0;i<10;i++){
            // 首数字初始化
            num[index] = (char)(i+'0');
            // 固定首数字，找个位数可能性
            DFS(num,res,index+1);
        }
            
    }

    public int save(char[] num){
        int n = 0;
        for(int i=0;i<num.length;i++){
            // 首位不是补齐的0时，即位数！=1
            if(num[i]!='0'){
                for(int j=i;j<num.length;j++){
                    n = n*10+num[j]-'0';
                }
                break;
            }
        }
        return n;
    }
}
```

