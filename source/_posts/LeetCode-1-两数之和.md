---
title: LeetCode-1-两数之和
date: 2020/6/16 09:30:40
description: 两数之和
categories: LeetCode
tags: 
- 数组
- Java
- Easy
- LeetCode
keywords: 数组,Java,Easy,LeetCode
---

## LeetCode-1-两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 <!--more-->

**示例 1:**

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

### 解题思路

**方法1、**暴力破解：

暴力破解就是固定一个往后面挨个找，时间上比较耗时

**方法2、**哈希表：

暴力破解比较耗时，那么有没有更快的方法，比如一次遍历搞定？

通过思考可以发现，数字固定一个再往后面找，这种方法不变的是数字，变化的是数字加和的顺序

把数字全部存储起来，并得到target和当前数字的差值，如果这个差值在存储的数字里面，就说明和为target找到了，返回对应下标即可。

于是可以利用hash表存储对应的数字和下标，按照这个思路实现，一次遍历就可以完成target下标和的寻找

### Java代码

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        if(nums.length==0||nums==null) return nums;
        int sum = 0;
        for(int i=0;i<nums.length-1;i++){
            for(int j=i+1;j<nums.length;j++){
                sum = nums[i]+nums[j];
                if(sum==target){
                    return new int[]{i,j};
                }
            }
        }
        return new int[]{0};
    }
}
```

### Java代码2

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        if(nums.length==0||nums==null) return nums;
        Map<Integer,Integer> map = new HashMap<>();
        for(int i=0;i<nums.length;i++){
            int out = target-nums[i];
            if(map.containsKey(out)){
                return new int[]{map.get(out),i};
            }
            map.put(nums[i],i);
        }
        return new int[]{0};
    }
}
```

