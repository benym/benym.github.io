---
title: LeetCode-121-买卖股票的最佳时机
date: 2020/6/5 20:28:28
description: 买卖股票的最佳时机
categories: LeetCode
tags: 
- DP
- 数组
- Java
- Easy
- LeetCode
keywords: DP,数组,Java,Easy,LeetCode
---

## LeetCode-121-买卖股票的最佳时机

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票。

 <!--more-->

**示例 1:**

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```

**示例2：**

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

### 解题思路

方法一、线性遍历(DP思想)：

当利润是负数时，最小数应该变化为当前值，当利润为正数时，max最大利润保存，最后返回最大利润即可

前i天的最大收益= max(前i-1天的最大收益，第i天的价格-前i-1天中的最小价格)

### Java代码

```java
class Solution {
    public int maxProfit(int[] prices) {
        if(prices==null||prices.length==0) return 0;
        int low = prices[0];
        int temp = 0;
        for(int i=1;i<prices.length;i++){
            if(prices[i]-low<0){
                low = prices[i];
            }else{
                temp = Math.max(temp,prices[i]-low);
            }
        }
        return temp;
    }
}
```





