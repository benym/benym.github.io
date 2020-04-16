---
title: 动态规划问题——最长上升子序列(LIS)(三)
date: 2018/8/26 14:23:08
description: 样本代码时间复杂度为〇(nlogn),笔试题
categories: 算法
tags: 
- 算法
- Java
- Python
- DP
keywords: 算法,Java,DP,Python
---

推荐链接：

1. {% post_link 动态规划问题——最长上升子序列(LIS)(一) %}

2. {% post_link 动态规划问题——最长上升子序列(LIS)(二) %}

**大佬给的思路，[宝石叔叔](https://unclegem.cn/)博客里面有更多精彩！** :sunglasses: 

<div class="note primary"><p>上一个版本用二分法优化了时间复杂度，但其实根据数据的样本观察可知，后面的数据都是重复的，我们只需要当列表遍历到一小时数据的最后时将后面数据的最大数加入到列表即可，这样可以快速跳出循环，避免后面不必要的查找</p></div>

以下代码略有区别，一种是计算数目，一种是使用新列表存储，但大致思路类似。

写完之后发现可以考虑的情况还是有的，还可以继续优化，不过优化到这里应该也差不多了，列表的append方法性能上是非常好的。两个版本Java耗时0.000196s，Python耗时0.000050s

<!--more-->

### Java代码

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        while (true) {
            int k = scan.nextInt();
            int t = scan.nextInt();
            int[] arr = new int[k];
            for (int i = 0; i < arr.length; ++i)
                arr[i] = scan.nextInt();
            System.out.println(new Main().lengthOfLIS(arr, t));
        }
    }
    
    public int lengthOfLIS(int[] nums, int count) {

        int[] dp = new int[nums.length];
        dp[0] = -1;
        // 获取nums数组里面的最大数字
        int[] maxCount = getMaxCount(nums);
        int maxLen = 0, t = 1;
        boolean flag = true;
        for (; t <= count; t++) {
            int count2 = 0;
            if (flag) {
                for (int i = 0; i < nums.length; i++) {
                    if (maxLen == 0) {
                        dp[maxLen++] = nums[i];
                    } else {
                        if (nums[i] >= dp[maxLen - 1]) {
                            if (nums[i] == maxCount[0])
                                count2++;
                            dp[maxLen++] = nums[i];
                            if (maxLen - 1 == nums.length - 1) {
                                flag = false;
                                maxLen += maxCount[1] - count2;
                                break;
                            }
                        } else {
                            int index = binarySearch(dp, maxLen - 1, nums[i]);
                            dp[index] = nums[i];
                        }
                    }
                }
                if (!flag)
                    break;
            }
        }
        return maxLen + (count - t) * maxCount[1];
    }

    public int binarySearch(int[] dp, int len, int target) {
        int start = 0, end = len - 1;
        while (start <= end) {
            int mid = (start + end) / 2;
            if (dp[mid] > target)
                end = mid - 1;
            else if (dp[mid] > target)
                start = mid + 1;
            else
                return mid;
        }
        return start;
    }

    public int[] getMaxCount(int[] nums) {

        int max = Integer.MIN_VALUE, count = 0;
        for (int i = 0; i < nums.length; i++)
            max = Math.max(max, nums[i]);
        for (int i = 0; i < nums.length; i++) {
            if (max == nums[i])
                count++;
        }
        return new int[]{max, count};
    }
}
```

### Python代码

```python
def longestIncreasingSubsequence(nums, n, m):
    if nums == None or len(nums) == 0:
        return 0
    testarray = list()
    maxNum = max(nums)
    minNum = min(nums)
    count = 0
    for i in range(len(nums)):
        if i == n:
            for j in range(m - 1):
                testarray.append(maxNum)
            break
        # 如果是第一个位置就直接添加进新的列表里面，如果后一个元素比新列表的最后一个元素大或者等于，则添加该元素到新列表末尾
        if len(testarray) == 0 or nums[i] >= testarray[len(testarray) - 1]:
            testarray.append(nums[i])
        # 这一行的目的是保证新列表中的数据全部都是顺序递增的，不让后面的小的数据插入到前面，防止数列个数对了，但是实际上数据不是正序的情况
        # 1、如果是一小时采样点的最后一个，比如8 6 7 4，  4就是一小时中最后一个采样点，而且这个数是最小值，就跳过本次循环
        # 2、如果是一小时采样点的最后一个，比如10 3 7 5， 5就是一小时中最后一个采样点，而且这个数比之前数列的最后一个值小，就跳过本次循环
        elif nums[i] == minNum and (i % (n - 1) == 0) or nums[i] < testarray[len(testarray) - 1] and (i % (n - 1) == 0):
            continue
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
    count = longestIncreasingSubsequence(a, n, int(m))
    print(count)
```

### 运行结果

```
5 10
5 6 7 9 1
13
```

