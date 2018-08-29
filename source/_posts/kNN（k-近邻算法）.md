---
title: kNN（k-近邻算法）
date: 2018/8/9 21:43:52
description: 用k-近邻算法实现简单的分类
categories: 机器学习
tags: 
- k-近邻算法
- python
- 机器学习
keywords: 机器学习,python,k-近邻算法
---

**k-近邻算法（kNN），**它的工作原理是：存在一个样本数据集合，也称作训练样本集，并且样本集中每个数据都存在标签，即我们知道样本集中每一数据与所属分类的对应关系。输人没有标签的新数据后，将新数据的每个特征与样本集中数据对应的特征进行比较，然后算法提取样本集中特征最相似数据（最近邻）的分类标签。一般来说，我们只选择样本数据集中前 k个最相似的数据，这就是 k- 近邻算法中k的出处 , 通常k是不大于 20 的整数。
最后，选择k个最相似数据中出现次数最多的分类，作为新数据的分类。

<!--more-->

<center>***k-近邻算法的一般流程***</center>

1. 收集数据：可以使用任何方法。
2. 准备数据：距离计算所需要的数值，最好是结构化的数据格式。
3. 分析数据：可以使用任何方法。
4. 训练算法：此步驟不适用于k-近邻算法。
5. 测试算法：计算错误率。
6. 使用算法：首先需要输入样本数据和结构化的输出结果，然后运行k-近邻算法判定输入数据分别属于哪个分类，最后应用对计算出的分类执行后续的处理。

 **使用欧氏距离公式，计算两个向量点xA和xB之间的距离：**

![KNN-01](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/KNN-01.png)

例如，点 (0 ,0) 与 (1, 2) 之间的距离计算为：

![KNN-02](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/KNN-02.png)

如果数据集存在 4 个特征值，则点 (1 ,0, 0 ,1) 与 (7, 6, 9 ,4) 之间的距离计算为:

![KNN-03](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/KNN-03.png)

计算完所有点之间的距离后，可以对数据按照从小到大的次序排序。然后，确定前 k 个距离最小元素所在的主要分类 , 输人k总是正整数；最后，将classCount字典分解为元组列表，然后使用程序第二行导入运算符模块的itemgetter方法 ,按照第二个元素的次序对元组进行排序。此处的排序为逆序，即按照从最大到最小次序排序，最后返回发生频率最高的元素标签。

## 代码

```python
from numpy import *
import operator


def createDateSet():
    group = array([[1.0, 1.1], [1.0, 1.0], [0, 0], [0, 0.1]])
    labels = ['A', 'A', 'B', 'B']
    return group, labels


'''
 用于分类的输人向量是inX，
 输入的训练样本集为dataSet,
 标签向量为labels
 最后的参数k表示用于选择最近邻居的数目，
 其中标签向量的元素数目和矩阵dataSet的行数相同
'''


def classify0(inX, dataSet, labels, k):
    dataSetSize = dataSet.shape[0]
    # 距离计算
    diffMat = tile(inX, (dataSetSize, 1)) - dataSet
    sqDiffMat = diffMat ** 2
    sqDistances = sqDiffMat.sum(axis=1)
    distances = sqDistances ** 0.5
    sortedDistIndicies = distances.argsort()
    classCount = {}
    # 选择距离最小的k个点
    for i in range(k):
        votellabel = labels[sortedDistIndicies[i]]
        classCount[votellabel] = classCount.get(votellabel, 0) + 1
    # 排序
    sortedClassCount = sorted(classCount.items(), key=operator.itemgetter(1), reverse=True)
    return sortedClassCount[0][0]


group, labels = createDateSet()
print(classify0([1.0, 1.1], group, labels, 3))
```

## 运行结果

```diff
A
```

