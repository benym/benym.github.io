---
title: LogisticRegression(逻辑回归)
date: 2018/10/21 16:27:14
description: 逻辑回归原理以及代码实现
categories: 机器学习
sticky: 9
tags: 
- 逻辑回归
- python
- 机器学习
keywords: 机器学习,python,逻辑回归
---

### LogisticRegression定义

logistic回归，是一种广义的线性回归分析模型，常用于数据挖掘，疾病自动诊断，经济预测等领域。例如，探讨引发疾病的危险因素，并根据危险因素预测疾病发生的概率等。以胃癌病情分析为例，选择两组人群，一组是胃癌组，一组是非胃癌组，两组人群必定具有不同的体征与生活方式等。一般来说逻辑回归用来做分类任务，**本文列举的是以线性的2分类为例， 除此之外还可以拓展到多更多参数实现非线性分类，以及多分类问题等。在文章中主要写了其推导过程以及部分代码实现**



### 构造函数h(x)

$$h_{\theta}(x)=g(\theta^{T}x)=g(\theta_{0}+\theta_{1}x_{1}+\theta_{2}x_{2}+...\theta_{n}x_{n}) $$

其中sigmoid函数形式为：$$g(z)=\frac{1}{1+e^{-z}}$$,所以$$h_{\theta}(x)=\frac{1}{1+e^{-\theta^{T}x}}$$

对应的函数图像是一个取值在0和1之间的曲线：

![sigmoid函数图像](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/LogisticRegression/sigmoid.jpg)

因为：

$$P(y=1|x;\theta )=h_{\theta}(x)$$

$$P(y=0|x;\theta )=1-h_{\theta}(x)$$

由上两式联立可得:

$$P(y|x;\theta )=(h_{\theta}(x))^{y}(1-h_{\theta}(x))^{1-y}$$

## 使用极大似然估计法

取似然函数(离散型):

$$L(\theta)=\prod_{i=1}^{m}P(y^{(i))}|x^{(i)};\theta)=\prod_{i=1}^{m}(h_{\theta}(x^{(i)}))^{y^{(i)}}(1-h_{\theta}(x^{(i)}))^{(1-y^{(i)})}$$

对似然函数取ln，转换为：

$$l(\theta )=lnL(\theta)=\sum_{i=1}^{m}(y^{(i)}lnh_{\theta}(x^{(i)}))+(1-y^{(i)})ln(1-h_{\theta}(x^{(i)}))$$

极大似然估计就是要求得使$$l(\theta )$$取最大值时的$$\theta$$，所以如果是这样的话会对应这梯度上升算法，虽然和梯度下降效果一样但是为了便于理解，将$$J(\theta)$$定义为如下式子，以变化为梯度下降算法求解。

$$J(\theta )=-\frac{1}{m}l(\theta)$$

因为乘以了一个负的系数，所以$$J(\theta)$$取最小值时的$\theta$是最优参数

## 梯度下降算法求$J(\theta)$的最小值

根据梯度下降法可知，更新过程为：

$$\theta _{j}:=\theta _{j}-\alpha (\frac{\partial }{\partial \theta}J(\theta)),(j=0,1,2,....n)$$

式中$$\alpha$$为学习率，求偏导数步骤：

![偏导数](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/%E4%BC%BC%E7%84%B6%E5%87%BD%E6%95%B0%E6%8E%A8%E5%AF%BC.png)

所以更新过程可以写成：

$$\theta _{j}:=\theta _{j}-\frac{\alpha }{m} \sum_{i=1}^{m}(h_{\theta}(x^{(i)})-y^{(i)})x_{j}^{(i)}$$

因为$$\alpha$$是常量，所以1/m可以省略，最后更新过程变为：

$$\theta _{j}:=\theta _{j}-\alpha  \sum_{i=1}^{m}(h_{\theta}(x^{(i)})-y^{(i)})x_{j}^{(i)},(j=0,1,2,....n)$$

## 梯度下降的向量化(vectorization)

约定训练数据的矩阵形式如下，**x**的每一行为一条训练样本，而每一列为不同的特称取值 ：

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/vector/%E5%90%91%E9%87%8F%E5%8C%961.png)

约定待求的参数**θ**的矩阵形式为:

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/vector/%E5%90%91%E9%87%8F%E5%8C%962.png)

先求**x*θ**并记为**A** :

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/vector/%E5%90%91%E9%87%8F%E5%8C%963.png)

求**hθ(x)-y**并记为**E**:

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/vector/%E5%90%91%E9%87%8F%E5%8C%964.png)

**g(A)**的参数**A**为一列向量，所以实现**g**函数时要支持列向量作为参数，并返回列向量。由上式可知**hθ(x)-y**可以由**g(A)-y**一次计算求得。

更新过程可以转化为：

$$\theta _{j}:=\theta _{j}-\alpha  \sum_{i=1}^{m}(h_{\theta}(x^{(i)})-y^{(i)})x_{j}^{(i)}$$

$$=\theta _{j}-\alpha\sum_{i=1}^{m}x_{j}^{(i)}E$$

$$=\theta _{j}-\alpha(x_{j}^{(1)},x_{j}^{(2)},...x_{j}^{(m)})E$$

综合起来就是:

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/vector/%E5%90%91%E9%87%8F%E5%8C%967.png)

综上所述，vectorization后**θ**更新的步骤如下 :

1. 求**A=x*θ** 
2. 求**E=g(A)-y** 
3. 求**θ:=θ-α.x'.E,**x'表示矩阵x的转置 

最后，向量化的参数更新公式为:
$$\theta :=\theta -\alpha x^{T}(g(x\theta)-y)$$

<!--more-->

### 代码实现

```python
# @Time    : 2018/10/19 16:37
# @Author  : YuanMing
# @File    : Logistic_regression.py
# @Software: PyCharm
import numpy as np
import matplotlib.pyplot as plt


def loadDataSet():
    """
    取出数据和标签
    :return:
    """
    data = np.loadtxt('testSet.txt')
    # 取数据集的第一列到最后一列的前一列
    dataMat = data[:, 0:-1]
    # 取数据集的最后一列
    lableMat = data[:, -1]
    # 为dataMat添加一列1，代表所有theta0的参数，其中0代表第1列，1代表需要插入的数值，axis=1代表横轴（即列添加）
    dataMat = np.insert(dataMat, 0, 1, axis=1)
    return dataMat, lableMat


def sigmoid(Z):
    """
    构造sigmoid函数
    :param Z:
    :return:
    """
    return 1.0 / (1 + np.exp(-Z))


def gradient_descent(dataMat, labelMat):
    """
    梯度下降算法
    :param dataMat: 特征数组
    :param labelMat: 标签数组
    :return: 最小化的theta
    """
    # 将特征数组转化为矩阵形式
    dataMatrix = np.mat(dataMat)
    # 将标签数据转化为矩阵并取矩阵的转置
    labelMatrix = np.mat(labelMat).transpose()
    # 得到特征矩阵的行数和列数
    m, n = np.shape(dataMatrix)
    # 学习率
    alpha = 0.001
    # 迭代次数
    iterations = 500
    # 生成n行1列的全1矩阵
    theta = np.ones((n, 1))
    # 执行梯度下降更新
    for k in range(iterations):
        # 求h(x)函数
        h = sigmoid(dataMatrix * theta)
        # 求误差
        error = h - labelMatrix
        # 按照推导的迭代公式求得新的theta
        theta = theta - alpha * dataMatrix.transpose() * error
    return theta


def plotBestFIt(theta):
    # 导入数据
    dataMat, lableMat = loadDataSet()
    # 获取数据行数
    n = np.shape(dataMat)[0]
    # 初始化坐标列表
    xcord1 = []
    ycord1 = []
    xcord2 = []
    ycord2 = []
    for i in range(n):
        # 如果对应的类别标签对应数值1，就添加到xcord1，ycord1中
        if lableMat[i] == 1:
            xcord1.append(dataMat[i][1])
            ycord1.append(dataMat[i][2])
        # 如果对应的类别标签对应数值0，就添加到xcord2，ycord2中
        else:
            xcord2.append(dataMat[i][1])
            ycord2.append(dataMat[i][2])
    # 创建空图
    fig = plt.figure()
    # 将画布分割成1行1列，图像画在从左到右从上到下的第1块
    # 添加subplot，三种数据都画在一张图上
    ax = fig.add_subplot(111)
    # 1类用红色标识，形状为正方形，s为标记点大小
    ax.scatter(xcord1, ycord1, s=30, c='red', marker='s')
    # 0类用蓝色标识
    ax.scatter(xcord2, ycord2, s=30, c='blue')
    # 生成一个ndarray数组范围从-3到3，步长为0.1
    x = np.arange(-3, 3, 0.1)
    '''
    这里设置了sigmoid函数的取值为1/2，也就是说取阈值为0.5来划分最后预测的结果
    根据e(−thetaTX)=1,即-thetaTX=0，可以推出x2 = (-theta0x0 - theta1x1)/theta2
    因为x1和x2是两个特征，没有一定的x和y关系，这里假设y是x2,x是x1，之前x0代表1
    '''
    y = (-theta[0, 0] - theta[1, 0] * x) / theta[2, 0]
    # 画出拟合直线
    ax.plot(x, y)
    # 规定X轴标签
    plt.xlabel('X1')
    # 规定Y轴标签
    plt.ylabel('X2')
    plt.show()


if __name__ == '__main__':
    dataMat, labelMat = loadDataSet()
    theta = gradient_descent(dataMat, labelMat)
    plotBestFIt(theta)
```

## 运行结果

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/vector/%E8%BF%90%E8%A1%8C%E7%BB%93%E6%9E%9C.png)

