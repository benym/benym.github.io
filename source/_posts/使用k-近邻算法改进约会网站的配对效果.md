---
title: 使用k-近邻算法改进约会网站的配对效果
date: 2018/8/11 11:47:52
description: 在约会网站上使用k-近邻算法
categories: 机器学习
tags: 
- k-近邻算法
- python
- 机器学习
- matplotlib
keywords: 机器学习,python,k-近邻算法
---

<center>***实例：在约会网站上使用k-近邻算法***</center>

(1) 收集数据：提供文本文件。
(2) 准备数据 :  使用python解析文本文件。
(3) 分析数据    使用 Matplotlib画二维扩散图 。
(4) 训练算法：此步驟不适用于k-近邻算法。
(5) 测试算法：使用海伦提供的部分数据作为测试样本。
测试样本和非测试样本的区别在于：测试样本是已经完成分类的数据，如果预测分类与实际类别不同，则标记为一个错误。
(6) 使用算法：产生简单的命令行程序，然后可以输入一些特征数据以判断对方是否为自己喜欢的类型。

<!--more-->

## 代码

```python
from numpy import *
import operator
import matplotlib
import matplotlib.pyplot as plt



# 将文本记录转换到Numpy的解析程序
def file2matrix(filename):
    fr = open(filename)
    arrayOLines = fr.readlines()
    # 得到文件行数
    numberOfLines = len(arrayOLines)
    # 创建返回的Numpy矩阵，将该矩阵的另一维度设置为3
    returnMat = zeros((numberOfLines, 3))
    classLabelVector = []
    index = 0
    # 解析文件数据到列表，循环处理每行数据
    for line in arrayOLines:
        # 截取掉所有的回车字符
        line = line.strip()
        # 使用tab字符\t将上一步得到的整行数据分割成一个元素列表
        listFromLine = line.split('\t')
        # 选取前3个元素，将他们存储到特征矩阵中
        returnMat[index, :] = listFromLine[0:3]
        # -1表示列表中的最后一列元素，将最后一列元素存储到向量classLabelVector中
        classLabelVector.append(int(listFromLine[-1]))
        index += 1
    return returnMat, classLabelVector

datingDataMat, datingLabels = file2matrix('datingTestSet2.txt')
print("array:\n", datingDataMat)
print("datingLabels[0:20]\n", datingLabels[0:20])

# 绘制散点图
# 定义figure
fig = plt.figure()
#add_subplot()返回一个axes对象，里面的参数abc表示在一个figure窗口中，有a行b列个小窗口，然后本次plot在第c个窗口中。
ax = fig.add_subplot(111)
# 设置颜色和散点图数据
ax.scatter(datingDataMat[:, 1], datingDataMat[:, 2], 15.0 * array(datingLabels), 15.0 * array(datingLabels))
plt.show()
```

<div class="note info"><p>[数据集](http://pd10tty87.bkt.clouddn.com/datingTestSet.txt)</p></div>

## 运行结果

```python
array:
 [[  4.09200000e+04   8.32697600e+00   9.53952000e-01]
 [  1.44880000e+04   7.15346900e+00   1.67390400e+00]
 [  2.60520000e+04   1.44187100e+00   8.05124000e-01]
 ..., 
 [  2.65750000e+04   1.06501020e+01   8.66627000e-01]
 [  4.81110000e+04   9.13452800e+00   7.28045000e-01]
 [  4.37570000e+04   7.88260100e+00   1.33244600e+00]]
datingLabels[0:20]
 [3, 2, 1, 1, 1, 1, 3, 3, 1, 3, 1, 1, 2, 1, 1, 1, 1, 1, 2, 3]
```

散点图结果：

![散点图](http://pd10tty87.bkt.clouddn.com/2.2%E6%95%A3%E7%82%B9%E5%9B%BE.png)

