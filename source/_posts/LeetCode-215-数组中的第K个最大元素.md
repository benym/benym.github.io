---
title: LeetCode-215-数组中的第K个最大元素
date: 2020/6/24 10:18:17
description: 数组中的第K个最大元素
categories: LeetCode
tags: 
- 数组
- Java
- Python
- Medium
- LeetCode
keywords: 数组,Java,Python,Medium,LeetCode
---

## LeetCode-215-数组中的第K个最大元素

在未排序的数组中找到第 **k** 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

 <!--more-->

**示例 1:**

```
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```

**示例2：**

```
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```

**说明:**

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

### 解题思路

**方法1、优先队列：**

首先想到的是给数组进行排序，排序之后就很容易找到第k个最大的元素

那么有没有不排序的方法，自然就会想到建立堆来进行操作

我们可以建立一个大顶堆，最大的数在建堆的过程中排最上面，一次遍历就能完成数组从大到小的构建

寻找排序之后的第k个最大的元素，也就是寻找大顶堆的正序第k个元素

之后一直弹出到k-1为止，下一个位置就是第k个最大的元素

**方法2、暴力破解：**

排序之后，倒置一下，第k-1个位置就是第k个最大的元素，不倒置就是nums.length-k个位置

**方法3、快速选择：**

摘自[LeetCode官方题解](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/shu-zu-zhong-de-di-kge-zui-da-yuan-su-by-leetcode/)

就像快速排序那样，本算法也是 Tony Hoare 发明的，因此也被称为 Hoare选择算法。

本方法大致上与快速排序相同。简便起见，注意到第 k 个最大元素也就是第 N - k 个最小元素，因此可以用第 k 小算法来解决本问题。

首先，我们选择一个枢轴，并在线性时间内定义其在排序数组中的位置。这可以通过 划分算法 的帮助来完成。

为了实现划分，沿着数组移动，将每个元素与枢轴进行比较，并将小于枢轴的所有元素移动到枢轴的左侧。

这样，在输出的数组中，枢轴达到其合适位置。所有小于枢轴的元素都在其左侧，所有大于或等于的元素都在其右侧。

这样，数组就被分成了两部分。如果是快速排序算法，会在这里递归地对两部分进行快速排序。

而在这里，由于知道要找的第 N - k 小的元素在哪部分中，我们不需要对两部分都做处理。

最终的算法十分直接了当 :

- 随机选择一个枢轴。

- 使用划分算法将枢轴放在数组中的合适位置 pos。将小于枢轴的元素移到左边，大于等于枢轴的元素移到右边。

- 比较 pos 和 N - k 以决定在哪边继续递归处理。


### Java代码

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int len = nums.length;
        if (len == 1) {
            return nums[0];
        }
        if (len <= 2) {
            Arrays.sort(nums);
            return nums[len - k];
        }
        Queue<Integer> queue = new PriorityQueue<>((v1,v2)->v2-v1);
        for (int i = 0; i < len; i++) {
            queue.add(nums[i]);
        }
        int i=0;
        while (!queue.isEmpty()&&i<k-1){
            queue.poll();
            i++;
        }
        return queue.poll();
    }
}
```

### Python代码

```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        nums.sort(reverse=True)
        return nums[k-1]
```

### Java代码2

```java
class Solution {
    int[] nums;

    public void swap(int a, int b) {
        int tmp = this.nums[a];
        this.nums[a] = this.nums[b];
        this.nums[b] = tmp;
    }


    public int partition(int left, int right, int pivot_index) {
        // 优化之后的快排，比枢轴元素大的理论应该放右边，但右边这部分甚至不需要排序
        // 只需要找到N-k个位置就可以了
        int pivot = this.nums[pivot_index];
        // 1. 移动枢轴到最右
        swap(pivot_index, right);
        int store_index = left;

        // 2. 移动所有小的元素到枢轴左边
        for (int i = left; i <= right; i++) {
            if (this.nums[i] < pivot) {
                swap(store_index, i);
                store_index++;
            }
        }

        // 3. 还原枢轴到最终位置，左边的元素全部比他小
        swap(store_index, right);

        return store_index;
    }

    public int quickselect(int left, int right, int k_smallest) {
        if (left == right) // 如果list只包含一个元素
            return this.nums[left];  // 则返回这个元素

        // 选择一个随机的枢轴
        Random random_num = new Random();
        int pivot_index = left + random_num.nextInt(right - left);

        pivot_index = partition(left, right, pivot_index);

        // 枢轴在N-k小的位置上，比较pos和N-k
        if (k_smallest == pivot_index)
            return this.nums[k_smallest];
            // 左递归
        else if (k_smallest < pivot_index)
            return quickselect(left, pivot_index - 1, k_smallest);
        // 右递归
        return quickselect(pivot_index + 1, right, k_smallest);
    }

    public int findKthLargest(int[] nums, int k) {
        this.nums = nums;
        int size = nums.length;
        // 第k个最大的元素，也就是第N-k个最小的元素
        return quickselect(0, size - 1, size - k);
    }
}
```





