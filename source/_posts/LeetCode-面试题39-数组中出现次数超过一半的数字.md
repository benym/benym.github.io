---
title: LeetCode-面试题39-数组中出现次数超过一半的数字
date: 2020/4/29 20:14:13
description: 数组中出现次数超过一半的数字
categories: 剑指Offer
tags: 
- 数组
- Python
- Java
- Easy
- 剑指Offer
keywords: 数组,Python,Java,Easy,剑指Offer
---

## LeetCode-面试题39-数组中出现次数超过一半的数字 

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 <!--more-->

**示例：**

```
输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
```

**限制：**

​	`1 <= 数组长度 <= 50000`

### 解题思路

方法1、投票法：

把众数的票数记为+1，非众数票数记为-1，如果众数出现的次数超过数组长度的一般，则一定会有所有的数字的票数和>0

方法2、哈希Map

空间换时间，没有出现在map中的数添加进去，出现过了则次数+1，之后获取次数最大的key即可

### Java代码

```java
class Solution {
    public int majorityElement(int[] nums) {
        if(nums==null||nums.length==0)
            return 0;
        int result = nums[0];
        int times = 1;
        for(int i=1;i<nums.length;i++){
            if(times==0){
                result = nums[i];
                times = 1;
            }
            else if(nums[i]==result)
                times++;
            else
                times--;
        }
        return result;
    }
}
```

### Python代码

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        if not nums: return 0
        numsMap = {}
        for i in nums:
            if i not in numsMap:
                numsMap[i]=1
            else:
                numsMap[i]+=1
        return max(numsMap,key=numsMap.get)
```

