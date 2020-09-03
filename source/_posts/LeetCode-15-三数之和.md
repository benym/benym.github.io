---
title: LeetCode-15-三数之和
date: 2020/6/23 17:01:45
description: 三数之和
categories: LeetCode
tags: 
- 数组
- Java
- Medium
- LeetCode
keywords: 数组,Java,Medium,LeetCode
---

## LeetCode-15-三数之和

给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 <!--more-->

**示例 1:**

```
给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

### 解题思路

**方法1、双指针：**

不重复问题首先一步是要对数组进行排序

排序之后固定一个数`nums[i]`，之后利用左右指针找`nums[left]+nums[right]+nums[i]==0  (sum)`的数，就可以添加进入结果集合

但过程中需要考虑数据重复的问题

如果`nums[i]>0`，则说明三数之和必然无法等于`0`，直接跳出循环

如果`nums[i]==nums[i-1]`，则说明该数字重复，会导致重复的结果，所以直接跳过

之后当`left<right`的时候，且

`sum==0，nums[left]==nums[left+1]`会导致重复的结果，应该跳过，所以`left++`

`sum==0，nums[right]==nums[right-1]`时，会导致重复的，应该跳过，所以`right--`

当`sum>0`的时候说明区间数太大了，由于此时是排序是所以，右移指针可以减小`sum`的值

当`sum<0`的时候说明区间数太小了，左移指针可以增大`sum`的值

### Java代码

```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        int len = nums.length;
        List<List<Integer>> res = new ArrayList<>();
        if(len<3) return res;
        Arrays.sort(nums);
        for(int i=0;i<len-2;i++){
            if(nums[i]>0) break;
            if(i>0&&nums[i]==nums[i-1]) continue;
            int left = i+1;
            int right = len-1;
            while(left<right){
                if(nums[i]+nums[left]+nums[right]==0){
                    res.add(Arrays.asList(nums[i],nums[left],nums[right]));
                    while(left<right&&nums[left]==nums[left+1]) left++;
                    while(left<right&&nums[right]==nums[right-1]) right--;
                    left++;
                    right--;
                }else if(nums[i]+nums[left]+nums[right]>0){
                    right--;
                }else{
                    left++;
                }
            }
        }
        return res;
    }
}
```

