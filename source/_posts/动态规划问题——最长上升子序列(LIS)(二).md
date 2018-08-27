---
title: 动态规划问题——最长上升子序列(LIS)(二)
date: 2018/8/25 17:44:35
description: 样本代码时间复杂度为〇(nlogn),笔试题
categories: 算法
tags: 
- 算法
- Java
- python
- 动态规划
keywords: 算法,Java,动态规划,python
---

推荐链接：

1. {% post_link 动态规划问题——最长上升子序列(LIS)(一) %}

2. {% post_link 动态规划问题——最长上升子序列(LIS)(三) %}


## 题目描述

一天，小凯同学震惊的发现，自己无内的PM2.5指标是有规律的！小凯采样了PM2.5数值，发现PM2.5数值以小时为周期循环，即任意时刻的PM2.5总是和一小时前相等！他的室友小文同学提出了这样一个问题，在t小时内的所有采样点中，选取若干采样点的数值，能否找到一个PM2.5不曾下降过的序列？这个序列最长是多少？

<!--more-->

## 输入描述

<div class="note primary"><p>第一行有两个整数n和t，表示每小时的采样点个数，和询问多少个小时的结果。第二行有n个整数，以空格分割，表示一小时内，每个采样点观测到的PM2.5数值</p></div>

## 输出描述

<div class="note primary"><p>一个整数，表示T小时内，最长的PM2.5不曾下降过的序列的长度</p></div>

## 输入

```
4 3
10 3 7 5
```

## 输出

```
4
```

## 说明

<div class="note info"><p>3小时内的所有采样点为

10 3 7 5 10 3 7 5 10 3 7 5

选取第2，3，5，9个采样点，可以得到一个不曾下降过的序列

3 7 10 10

使用其他的方法也可以得到长为4的满足条件的序列，但无法得到长度超过4的结果。

</p></div>

## 备注

```
对于20%的数据，t=1
对于50%的数据，t<=1000
对于80%的数据，PM2.5数值不超过200
对于100%的数据，1<=n<=1000,
1<=t<=1000000，PM2.5数值为正整数，且不超过1000000000
```

优化时间复杂度(外层为n，内层为logn)

这里是定义一个testarray数组，存储这个升序子序列，对于新来的元素，通过二分查找，插入到这个testarray数组中，当大于或者等于testarray数组最后一个元素的时候直接在最后插入，如果在testarray数组中间位置，就直接在中间位置插入,(Tips：说明中间位置额那个数比需要插入的数字大，我们找的是最长的升序子序列，比他大的当然需要被小的替代了)，由于testarray数组是动态变化的，最后testarray数组的大小就是最长升序子序列，并且其存储的数就是这个升序子序列。

### Java代码

```java
public class Solution {
    
    public int longestIncreasingSubsequence(int[] nums) {
        int len = nums.length;
        if(nums == null || len ==0)
            return 0;
        ArrayList<Integer> dp = new ArrayList<Integer>();
        for(int i=0;i<len ;i++){
            if(dp.isEmpty() || dp.get(dp.size() - 1) <= nums[i])
                dp.add(nums[i]);
            else{
                int index = findFirstLargeEqual(dp,nums[i]);
                dp.set(index,nums[i]);//  用指定的元素替代此列表中指定位置上的元素。 
            }
        }
        return dp.size();
    }
    public int findFirstLargeEqual(ArrayList<Integer> list,int num){
        int left = 0;
        int right = list.size() - 1;
        while(left <=right){
            int mid = (left + right)/2;
            if(list.get(mid) > num) 
                right = mid -1;
            else if(list.get(mid) < num)
                left = mid + 1;
            else
                return mid;
        }
        return left;
    }
}
```

### Python代码

```python
def longestIncreasingSubsequence(nums):
    if nums == None or len(nums) == 0:
        return 0
    testarray = list()
    for i in range(len(nums)):
        # 如果是第一个位置就直接添加进新的列表里面，如果后一个元素比新列表的最后一个元素大或者等于，则添加该元素到新列表末尾
        if len(testarray) == 0 or nums[i] >= testarray[len(testarray) - 1]:
            testarray.append(nums[i])
        else:
            # 如果这个新元素不大于等于最后一个元素的时候，利用二分查找找到他在新列表中应该插入的位置
            index = findFirstLargeEqual(testarray, nums[i])
            # 将新元素替换对应位置的列表里面的元素
            testarray[index] = nums[i]
    return len(testarray)


# 利用二分查找法
def findFirstLargeEqual(testarray, target):
    left = 0
    right = len(testarray) - 1
    if testarray[0] == target:
        return 0
    while left <= right:
        # 双斜杠整除
        mid = (left + right) // 2
        if testarray[mid] > target:
            right = mid - 1
        elif testarray[mid] < target:
            left = mid + 1
        else:
            return mid
    return left


if __name__ == "__main__":
    a = list()
    # 输入n m
    n, m = input().split()
    # 输入采样点
    n = int(n)
    a = input().split()
    # 截取输入的前n个（控制输入）
    a = a[:n]
    # 全部转化为整形
    for i in range(n):
        a[i] = int(a[i])
    # 按照小时数重复
    a = a * int(m)
    count = longestIncreasingSubsequence(a)
    print(count)
```

### 运行结果

```python
4 3
10 3 7 5
4
```

