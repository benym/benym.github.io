---
title: kNN识别手写图像
date: 2018/8/16 21:03:00
description: 机器学习实战——knn识别手写图像
categories: 机器学习
tags: 
- k-近邻算法
- Python
- 机器学习
- Numpy
keywords: 机器学习,Python,k-近邻算法
---

<center>示例 ：使用k-近邻算法的手写识别系统</center>
(1) 收集数据：提供文本文件。
(2) 准备数据：编写函数classify0(), 将图像格式转换为分类器使用的list格式。
(3) 分析数据：检查数据，确保它符合要求。
(4) 训练算法：此步驟不适用于k-近邻算法。
(5) 测试算法：编写函数使用提供的部分数据集作为测试样本，测试样本与非测试样本的区别在于测试样本是已经完成分类的数据，如果预测分类与实际类别不同，则标记为一个错误。
(6) 使用算法：本例没有完成此步骤，若你感兴趣可以构建完整的应用程序，从图像中提取数字，并完成数字识别，美国的邮件分拣系统就是一个实际运行的类似系统。

<div class="note info"><p>注：由于原本数据集已经在0和1之间，所以不需要转化数字特征值。[数据集](http://pd10tty87.bkt.clouddn.com/knn%E8%AF%86%E5%88%AB%E6%89%8B%E5%86%99%E5%9B%BE%E5%83%8F.zip)</p></div>

<!--more-->

## 代码

```python
from numpy import *
from os import listdir
import operator


def classify0(inX, dataSet, labels, k):
    dataSetSize = dataSet.shape[0]
    # 距离计算
    '''
     tile(A，rep) 
        功能：重复A的各个维度 
        参数类型： 
        A: Array类的都可以 
        rep：A沿着各个维度重复的次数
    '''
    diffMat = tile(inX, (dataSetSize, 1)) - dataSet
    sqDiffMat = diffMat ** 2
    # numpy中的 axis=0表示列,向下，axis=1表示行，向右
    # 在平时使用的sun默认的是axis=0就是普通的相加，当加入axis=1以后就是将一个矩阵的每一行向量相加
    sqDistances = sqDiffMat.sum(axis=1)
    distances = sqDistances ** 0.5
    # argsort函数返回的是数组值从小到大的索引值
    sortedDistIndicies = distances.argsort()
    classCount = {}
    # 选择距离最小的k个点
    for i in range(k):
        votellabel = labels[sortedDistIndicies[i]]
        classCount[votellabel] = classCount.get(votellabel, 0) + 1
    # 排序
    sortedClassCount = sorted(classCount.items(), key=operator.itemgetter(1), reverse=True)
    return sortedClassCount[0][0]


def img2vector(filename):
    # 将图像矩阵转化为1x1024的向量
    returnVect = zeros((1, 1024))
    fr = open(filename)
    # 循环读出文件的前32行
    for i in range(32):
        lineStr = fr.readline()
        # 将每行的头32个字符值存储在Numpy数组中
        for j in range(32):
            returnVect[0, 32 * i + j] = int(lineStr[j])
        # 返回数组
    return returnVect


def handwritingClassTest():
    hwLabels = []
    # 获取训练数据集下目录的所有文件名的列表
    trainingFileList = listdir('trainingDigits')
    # 得到文件数量
    m = len(trainingFileList)
    # 创建m行1024列的训练矩阵
    trainingMat = zeros((m, 1024))
    for i in range(m):
        # 从文件名解析分类数字
        # 解析出0_10.txt
        fileNameStr = trainingFileList[i]
        # 获得0_10
        fileStr = fileNameStr.split('.')[0]
        # 获得0
        classNumStr = int(fileStr.split('_')[0])
        hwLabels.append(classNumStr)
        trainingMat[i, :] = img2vector('trainingDigits/%s' % fileNameStr)
    # 获得测试数据集下目录的所有文件名的列表
    testFileList = listdir('testDigits')
    errorCount = 0.0
    mTest = len(testFileList)
    for i in range(mTest):
        fileNameStr = testFileList[i]
        fileStr = fileNameStr.split('.')[0]
        classNumStr = int(fileStr.split('_')[0])
        vectorUnderTest = img2vector('testDigits/%s' % fileNameStr)
        classifierResult = classify0(vectorUnderTest, trainingMat, hwLabels, 3)
        print("the classifier came back with:%d,the real answer is:%d" % (classifierResult, classNumStr))
        if (classifierResult != classNumStr):
            errorCount += 1.0
    print("\nthe total number of errors is:%d" % errorCount)
    print("\nthe total error rate is :%f" % (errorCount / float(mTest)))


testVector = img2vector('testDigits/0_13.txt')
# X[:,  m:n]，即取二维数组中的第m到n-1列的所有数据
print("测试输出:\n", testVector[0, 0:31])
handwritingClassTest()
```

## 运行结果

```python
the classifier came back with:1,the real answer is:1
the classifier came back with:1,the real answer is:1

.....

the classifier came back with:5,the real answer is:5
the classifier came back with:5,the real answer is:5
the classifier came back with:6,the real answer is:6
the classifier came back with:6,the real answer is:6

....

the classifier came back with:9,the real answer is:9
the classifier came back with:9,the real answer is:9
the classifier came back with:9,the real answer is:9

the total number of errors is:11
# 错误率为1.2%
the total error rate is :0.011628
```

