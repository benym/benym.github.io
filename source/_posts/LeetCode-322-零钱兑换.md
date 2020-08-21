---
title: LeetCode-322-零钱兑换
date: 2020/8/21 10:00:46
description: 零钱兑换
categories: LeetCode
tags: 
- 数组
- DP
- 回溯
- Java
- Medium
keywords: 数组,DP,回溯,Java,Medium,LeetCode
---

## LeetCode-322-零钱兑换

给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

<!--more-->

**示例1：**

```
输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1
```

**示例2：**

```
输入: coins = [2], amount = 3
输出: -1
```

**说明**:
你可以认为每种硬币的数量是无限的。

### 解题思路

摘自官方题解https://leetcode-cn.com/problems/coin-change/solution/322-ling-qian-dui-huan-by-leetcode-solution/

**方法1、回溯：**

用S代表总金额，ci是第i枚硬币的面值，xi是面值为ci的硬币数量，由于xi*ci不能超过S，可以得出xi的取值范围[0,S/xi]

一个简单的解决方案是枚举每个硬币数量子集[x0,...,xn-1]。如果满足上述约束条件，计算硬币数量总和并返回所有子集中的最小值

for循环每一个硬币，选择0个1面值硬币，判断当前选择情况*面值是否小于等于总面值S，进入下层递归选择硬币应该固定1面值，选择2面值，`idxCoin+1`，总面值应该减去当前选择的硬币个数乘以面值数，即` amount - i * coins[idxCoin]`，选择0个2面值硬币，进行判断...依次列推。固定某一面值选择数，深度优先穷举后续面值可能的选择数目，且硬币选择数目范围在`[0,S/xi]`

由于有重复计算，所以回溯的效率并不是很高

**方法2、动态规划-自上而下：**

利用动态规划，改进上面的指数时间复杂度的解，定义

- F(S)：组成金额S所需的最少硬币数量
- [c0,...,cn-1]：可选的n枚硬币面额值

这个问题有一个最优的子结构性质，这是解决动态规划问题的关键。最优解可以从其子问题的最优解构造出来。如何将问题分解成子问题？

假设我们知道F(S)，即组成金额S最少的硬币数，最后一枚硬币的面值是C。那么由于问题的最优子结构，转移方程应为：

`F(S)=F(S-C)+1`

但我们不知道最后一枚硬币的面值是多少，所以我们需要枚举每个硬币面额值c0,c1,c2,...,cn-1并选择其中的最小值。下列递推关系成立：

![image-20200821132154572](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/img/image-20200821132154572.png)

在上面的递归树中，可以发现有许多子问题被多次计算。例如，F(1)被计算了13次。为了避免重复的计算，我们将每个子问题的答案存在一个数组中进行记忆化，如果下次还要计算这个问题的值直接从数组中去除返回即可，这样能保证每个子问题最多只被计算一次。

**方法3、动态规划-自下而上：**

采用自下而上的方式进行思考，仍定义F(i)为组成金额i所需最少的硬币数量，假设在计算F(i)之前，我们已经计算出F(0)-F(i-1)的答案，则F(i)对应的转移方程为

![image-20200821153508353](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/img/image-20200821153508353.png)

其中cj代表的是第j枚硬币的面值，即我们枚举最后一枚硬币面额是cj，那么需要从i-cj这个金额的状态F(i-cj)转移过来，再算上枚举的这个硬币数量1的贡献，由于要硬币数量最少，所以F(i)为：前面能转移过来的状态的最小值加上枚举的硬币数量1。

例子1：假设

```java
coins = [1,2,5],amount=11
```

则，当i==0时无法用硬币组成，为0。当i<0时，忽略F(i)

| F(i)  | 最小硬币数量                               |
| ----- | ------------------------------------------ |
| F(0)  | 0 //金额为0不能由硬币组成                  |
| F(1)  | 1 //F(1)=min(F(1-1),F(1-2),F(1-5))+1=1     |
| F(2)  | 1 //F(2)=min(F(2-1),F(2-2),F(2-5))+1=1     |
| F(3)  | 2 //F(3)=min(F(3-1),F(3-2),F(3-5))+1=2     |
| F(4)  | 2 //F(4)=min(F(4-1),F(4-2),F(4-5))+1=2     |
| ...   | ...                                        |
| F(11) | 3 //F(11)=min(F(11-1),F(11-2),F(11-5))+1=3 |

我们可以看到问题的答案是通过子问题的最优解得到的

例子2：假设

```java
coins = [1,2,3],amount = 6
```

![image-20200821155315909](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/img/image-20200821155315909.png)

### Java代码1

```java
public class LeetCode322 {
    public static void main(String[] args) {
        int[] coins = new int[]{1, 2, 5};
        int amount = 11;
        System.out.println(coinChange(coins, amount));
    }

    public static int coinChange(int[] coins, int amount) {
        return coinChanges(0, coins, amount);
    }

    private static int coinChanges(int idxCoin, int[] coins, int amount) {
        if (amount == 0)
            return 0;
        if (idxCoin < coins.length && amount > 0) {
            int maxVal = amount / coins[idxCoin];
            int minCost = Integer.MAX_VALUE;
            for (int i = 0; i <= maxVal; i++) {
                if (i * coins[idxCoin] <= amount) {
                    int res = coinChanges(idxCoin + 1, coins, amount - i * coins[idxCoin]);
                    // 说明需要更新
                    if (res != -1) {
                        minCost = Math.min(minCost, res + i);
                    }
                }
            }
            return (minCost == Integer.MAX_VALUE) ? -1 : minCost;
        }
        return -1;
    }
}

```
### Java代码2

```java
class Solution {
    public int coinChange(int[] coins, int amount) {
        if (amount < 1) return 0;
        return coinChanges(amount, coins, new int[amount]);
    }

    private static int coinChanges(int amount, int[] coins, int[] count) {
        if (amount < 0) return -1;
        if (amount == 0) return 0;
        if (count[amount - 1] != 0) return count[amount - 1];
        int min = Integer.MAX_VALUE;
        for (int coin : coins) {
            int res = coinChanges(amount - coin, coins, count);
            if (res >= 0 && res < min) {
                min = 1 + res;
            }
        }
        count[amount - 1] = (min == Integer.MAX_VALUE) ? -1 : min;
        return count[amount - 1];
    }
}
```

### Java代码3

```java
import java.util.Arrays;

public class LeetCode322_DP {
    public static void main(String[] args) {
        int[] coins = new int[]{1, 2, 5};
        int amount = 11;
        System.out.println(coinChange(coins, amount));
    }

    public static int coinChange(int[] coins, int amount) {
        int max = amount + 1;
        int[] dp = new int[max];
        // 因为需要比较最小，所以初始化数组为最大值
        Arrays.fill(dp, max);
        // 没有数值为0的硬币
        dp[0] = 0;
        // 自底向上
        for (int i = 1; i <= amount; i++) {
            // 遍历硬币面值cj
            for (int j = 0; j < coins.length; j++) {
                if (coins[j] <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}
```

