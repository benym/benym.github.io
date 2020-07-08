---
title: LeetCode-309-最佳买卖股票时机含冷冻期
date: 2020/7/8 09:27:07
description: 最佳买卖股票时机含冷冻期
categories: LeetCode
tags: 
- 数组
- Java
- DP
- Medium
keywords: 数组,Java,DP,Medium,LeetCode
---

## LeetCode-309-最佳买卖股票时机含冷冻期

给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

<!--more-->

**示例1：**

```
输入: [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
```

### 解题思路

详见链接https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-lab/

### Java代码

```java
class Solution {
    public int maxProfit(int[] prices) {
        if(prices == null || prices.length == 0){
            return 0;
        }
        //状态转移图：
        //       持股               不持股
        //     ↙-----、   卖出    ↙-----、
        //    持股-----↑--------→不持股---↑
        //      |
        //      |卖
        //      |出
        //      ↓
        //    冷冻期(期间什么都不能干) 
        //
        int[][] dp = new int[prices.length][3];
        //dp[i][x]第i天进入x状态（0.不持股，1.持股，2.冷冻期）
        //不持股
        dp[0][0] = 0;
        //持股
        dp[0][1] = -prices[0];
        //冷冻期
        dp[0][2] = 0;
        for(int i = 1;i < prices.length;i++){
            //第i天不持股可以从两种状态转移而来，1.第i-1天不持股，今天仍不买股票，保持不持股状态。2.冷冻期结束了，但是今天不买股票。
            dp[i][0] = Math.max(dp[i-1][0], dp[i-1][2]);
            //第i天持股可从两种状态转移而来，1.第i-1天不持股(包含昨天是冷冻期或者昨天本身就不持股)，今天买股票。2.第i-1天持股，今天不卖出，保持持股状态。
            dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
            //只有第i天卖出了股票，第i天才能进入冷冻期。
            dp[i][2] = dp[i-1][1] + prices[i];
        }
        //只有最后一天不持股（不持股状态）或者前一天已经卖掉了（今天为冷冻期）这两种情况手里是拿着钱的，最大值在二者中产生。
        return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][2]);
    }
}
```

