---
title: LeetCode-面试题57-2-和为s的连续正数序列
date: 2020/5/19 10:00:38
description: 和为s的两个数字
categories: 剑指Offer
tags:
- 数组
- Java
- Python
- Easy
- 剑指Offer
keywords: 数组,Java,Python,Easy,剑指Offer
---

## LeetCode-面试题57-2-和为s的连续正数序列

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 <!--more-->

**示例1：**

```
输入：target = 9
输出：[[2,3,4],[4,5]]
```

**示例 2:**

```
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
```

**限制：**

- `1 <= target <= 10^5`

### 解题思路

滑动窗口：

序列至少包含2个数，窗口从1(small)，2(big)开始，且small指针不会超过中值，简单例子，比如15=8+small，small是不可能比8大的，当small都已经跨过中值，big肯定也比small大，两个的组合不可能得到target，所以small<mid即可

接下来分为3种情况讨论：

- 当序列和curSum<target时，说明需要扩大窗口，这里恒向右扩大，指针右移big++，当前序列值也需要加上big，curSum+=big
- 当序列和curSum>target时，说明需要缩小窗口，从最小的值开始缩小，curSum-=small，之后指针左移small--
- 当序列和curSum==target时，说明序列和满足要求，由于要求二维数组存储，这里新开辟一个big-small+1大小的数组，存储[small,big]范围内的数字，之后添加进res中。之后使big指针右移，curSum+=big，继续下一轮的窗口计算

实际上序列和可以由公式`(left+right)*(right-left+1)//2`得到，Python代码返回更加轻松

### Java代码

```java
class Solution {
    public int[][] findContinuousSequence(int target) {
        int small = 1;
        int big = 2;
        int mid = (target+1)/2;
        int curSum = small+big;
        List<int[]> res = new ArrayList<>();
        while(small<mid){
            if(curSum==target){
                int[] nums = new int[big-small+1];
                int i = 0;
                for(int k=small;k<=big;k++){
                    nums[i] = k;
                    i++;
                }
                res.add(nums);
                big++;
                curSum+=big;
            }
            else if(curSum<target){
                big++;
                curSum+=big;
            }else{
                curSum-=small;
                small++;
            }
        }
        return res.toArray(new int[res.size()][]);
    }
}
```

### Python代码

```python
class Solution:
    def findContinuousSequence(self, target: int) -> List[List[int]]:
        res = []
        left,right = 1,2
        mid = (target+1)//2
        while left<mid:
            sum = (left+right)*(right-left+1)//2
            tlist = []
            if sum<target:
                right+=1
            elif sum>target:
                left+=1
            else:
                for i in range(left,right+1):
                    tlist.append(i)
                res.append(tlist)
                left+=1
                right+=1
        return res

```

