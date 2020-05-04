---
title: LeetCode-面试题40-最小的k个数
date: 2020/5/4 17:38:24
description: 最小的k个数
categories: 剑指Offer
tags: 
- 数组
- Python
- Java
- Medium
- 剑指Offer
keywords: 数组,Python,Java,Medium,剑指Offer
---

## LeetCode-面试题40-最小的k个数 

输入整数数组 `arr` ，找出其中最小的 `k` 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 <!--more-->

**示例1：**

```
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
```

**示例2：**

```
输入：arr = [0,1,2,1], k = 1
输出：[0]
```

**限制：**

- `0 <= k <= arr.length <= 10000`
- `0 <= arr[i] <= 10000`

### 解题思路

**方法1、快排+选择：**

基于之前快速排序的代码实现，现在加了几个条件，如下：

每快排切分1次，找到切分点，比较切分点和k的关系

- 如果相等则意味着，切分点左边的数字已经是最小数组集合，直接返回
- 如果k小于m说明需要在左子数组进行搜索
- 如果k大于m说明需要在右子数组进行搜索

**方法2、最大堆：**

使用Java的优先级队列PriorityQueue，实现最大堆

当队列不足k个的时候，传入一个元素

当队列大于k个的时候，判断下一个元素是否小于堆顶，如果小于就把堆顶弹出，把下一个元素传入

之后返回对应的数组

### Java代码

```java
class Solution {
    public int[] getLeastNumbers(int[] arr, int k) {
        if(k==0)
            return new int[0];
        else if(arr.length<=k)
            return arr;
        quickSort(arr,0,arr.length-1,k);
        int[] res = new int[k];
        for(int i = 0;i < k; i++){
            res[i] = arr[i];
        }
        return res;
    }

    public void quickSort(int[] list, int left, int right,int k) {
        // 每快排切分1次，找到切分点，比较切分点和k的关系
        int m = partition(list,left,right);
        // 如果相等则意味着，切分点左边的数字已经是最小数组集合，直接返回
        if(k==m){
            return;
        }
        // 如果k小于m说明需要在左子数组进行搜索
        else if(k<m){
            quickSort(list,left,m-1,k);
        }
        // 如果k大于m说明需要在右子数组进行搜索
        else{
            quickSort(list,m+1,right,k);
        }
    }

    public int partition(int[] list, int left, int right) {
        // 用数组的第一个元素作为基准数
        int first = list[left];
        while (left < right) {
            while (left < right && list[right] >= first) {
                right--;
            }
            swap(list, left, right);
            while (left < right && list[left] <= first) {
                left++;
            }
            swap(list, left, right);
        }
        // 返回分割点所在的位置
        return left;
    }

    public void swap(int[] list, int left, int right) {
        int temp;
        if (list != null && list.length > 0) {
            temp = list[left];
            list[left] = list[right];
            list[right] = temp;
        }
    }
}
```

### Java代码

```java
class Solution {
    public int[] getLeastNumbers(int[] arr, int k) {
        if(k==0||arr.length==0)
            return new int[0];
        // 使用一个最大堆
        // 默认最小堆，需要转化，默认是升序的，转化之后是降序的
        Queue<Integer> stack = new PriorityQueue<>((v1,v2)->v2-v1);
        for(int num:arr){
            if(stack.size()<k){
                stack.offer(num);
            }
            // peek队首元素
            else if(num<stack.peek()){
                // 因为是降序，所以poll队首是最大元素
                stack.poll();
                stack.offer(num);
            }
        }
        int[] res = new int[stack.size()];
        int i = 0;
        for(int num:stack){
            res[i++] = num;
        }
        return res;
    }
}
```

