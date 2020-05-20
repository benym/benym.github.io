---
title: LeetCode-面试题63-股票的最大利润
date: 2020/5/20 16:58:09
description: 股票的最大利润
categories: 剑指Offer
tags:
- 数组
- Java
- Easy
- 剑指Offer
keywords: 数组,Java,Easy,剑指Offer
---

## LeetCode-面试题63-股票的最大利润

假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

 <!--more-->

**示例1：**

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

**示例2:**

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

**限制：**

- 0 <= 数组长度 <= 10^5

### 解题思路

始终记录当前位置前的最小数字，遇到更小的就更新min，之后看当前的最大利润和存储的最大利润谁更大

### Java代码

```java
class Solution {
    public int maxProfit(int[] prices) {
        if(prices==null||prices.length<2)
            return 0;
        int min = prices[0];
        int maxPrice = 0;
        for(int i=1;i<prices.length;i++){
            if(prices[i]<min){
                min = prices[i];
            }else{
                maxPrice = Math.max(maxPrice,prices[i]-min);
            }
        }
        return maxPrice;
    }
}
```

