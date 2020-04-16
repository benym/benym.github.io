---
title: 动态规划问题——最长上升子序列(LIS)(一)
date: 2018/8/25 15:43:49
description: 样本代码时间复杂度为〇(n²)
categories: 算法
tags: 
- 算法
- Java
- Python
- DP
keywords: 算法,Java,DP,Python
---

推荐链接：

1. {% post_link 动态规划问题——最长上升子序列(LIS)(二) %}

2. {% post_link 动态规划问题——最长上升子序列(LIS)(三) %}

   如：求 2 7 1 5 6 4 3 8 9 的最长上升子序列。我们定义d(i) (i∈[1,n])来表示前i个数以A[i]结尾的最长上升子序列长度。 

- 　    前1个数 d(1)=1 子序列为2；
- 　　前2个数 7前面有2小于7 d(2)=d(1)+1=2 子序列为2 7
- 　　前3个数 在1前面没有比1更小的，1自身组成长度为1的子序列 d(3)=1 子序列为1
- 　　前4个数 5前面有2小于5 d(4)=d(1)+1=2 子序列为2 5
- 　　前5个数 6前面有2 5小于6 d(5)=d(4)+1=3 子序列为2 5 6
- 　　前6个数 4前面有2小于4 d(6)=d(1)+1=2 子序列为2 4
- 　　前7个数 3前面有2小于3 d(3)=d(1)+1=2 子序列为2 3
- 　　前8个数 8前面有2 5 6小于8 d(8)=d(5)+1=4 子序列为2 5 6 8
- 　　前9个数 9前面有2 5 6 8小于9 d(9)=d(8)+1=5 子序列为2 5 6 8 9
- 　　d(i)=max{d(1),d(2),……,d(i)} 我们可以看出这9个数的LIS为d(9)=5

<!--more-->

## Java代码

```java
public class Main {
    int LIS(int A[], int n) {
        int d[] = new int[n];
        int len = 1;
        int i, j;
        for (i = 0; i < n; i++) {
            d[i] = 1;
            for (j = 0; j < i; j++) {
                // 当前的位置的数与之前的数比较，如果数列是上升的，且序列长度+1比当前序列长度大或相等
                if (A[j] <= A[i] && (d[j] + 1) >= d[i])
                    //使这个数之前的最大长度加1（最长上升序列加上这个数）
                    d[i] = d[j] + 1;
            }
            // 把当前d[i]的最大长度赋值给len
            if (d[i] > len)
                len = d[i];
        }
        // 返回最长上升子序列的长度
        return len;
    }

    public static void main(String[] args) {
        int A[] = {2, 7, 1, 5, 6, 4, 3, 8, 9};
        int n = A.length;
        Main test = new Main();
        int count = test.LIS(A, n);
        System.out.println(count);
    }
}
```

## 运行结果

```
5
```

## Python代码

```python
# 第一种写法
def longestIncreasingSubsequence(nums, length):
    # 如果列表为空或者列表长度为0就直接返回0
    if nums == None or len(nums) == 0:
        return 0
    # 初始化列表为length个0，用来记录到当前位置的最长升序序列的长度
    sublongest = [0 for i in range(length)]
    sublongest[0] = 1
    longest = 0
    for i in range(1, length):
        sublong = 0
        for j in range(0, i):
            # 如果当前元素比前面的元素大
            if nums[j] <= nums[i]:
                # 则将前面元素的最长序列和当前的最长序列比较大小，把大的赋值给sublong
                sublong = max(sublongest[j], sublong)
        # 加上到自身位置那个元素
        sublongest[i] = sublong + 1
        # 比较长度列表末尾的元素和longest的大小，把两者大的赋值给longest
        longest = max(sublongest[i], longest)
    return longest

# 第二种写法
def longestIncreasingSubsequence2(Testarray, num):
    d = [0 for i in range(num)]
    longest = 1
    for i in range(num):
        d[i] = 1
        for j in range(i):
            if (Testarray[j] <= Testarray[i]) and (d[j] + 1) >= d[i]:
                d[i] = d[j] + 1
        if d[i] > longest:
            longest = d[i]
    return longest


if '__name__ = __main__':
    a = [2, 7, 1, 5, 6, 4, 3, 8, 9]
    # count = longestIncreasingSubsequence(a,len(a))
    count = longestIncreasingSubsequence2(a, len(a))
    print(count)

```

## 运行结果

```
5
```

