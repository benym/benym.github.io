---
title: LeetCode-347-前K个高频元素
date: 2020/7/15 09:14:34
description: 前K个高频元素
categories: LeetCode
tags: 
- Java
- 数组
- Medium
keywords: Java,数组,Medium,LeetCode
---

## LeetCode-347-前K个高频元素

给定一个非空的整数数组，返回其中出现频率前 **k** 高的元素。

<!--more-->

**示例1：**

```
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
```

**示例2：**

```
输入: nums = [1], k = 1
输出: [1]
```

提示：

- 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
- 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
- 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
- 你可以按任意顺序返回答案。

### 解题思路

**方法1、最小堆：**

首先利用Map来计算数组中数字出现的频率

之后利用一个优先队列，在存储的过程中按照频率进行排序，且只存储频率最高的前K个数

由于题目要求的顺序可以不同，所以最后一次弹出queue中的数字到list中就好了

计算频率这个步骤需要 O(N)时间其中 N是列表中元素个数。

第二步建立堆，堆中添加一个元素的复杂度是 O(log(k))，要进行 N 次复杂度是 O(N)。

最后一步是输出结果，复杂度为 O(klog(k))。第二步和最后一步复杂度综合O(Nlog(k))。

**因此总复杂度为O(N+Nlog(k)) = O(Nlog(k))**

### Java代码


```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        List<Integer> list = new ArrayList<>();
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        PriorityQueue<Map.Entry<Integer, Integer>> queue = new PriorityQueue<>((v1, v2) -> v1.getValue() - v2.getValue());
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (queue.size() < k) {
                queue.add(entry);
            } else {
                if (entry.getValue() > queue.peek().getValue()) {
                    queue.poll();
                    queue.add(entry);
                }
            }
        }
        while (!queue.isEmpty()) {
            list.add(queue.poll().getKey());
        }
        return list.stream().mapToInt(Integer::intValue).toArray();
    }
}
```



