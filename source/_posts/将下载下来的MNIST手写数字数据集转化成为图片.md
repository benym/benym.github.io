---
title: 将下载下来的MNIST手写数字数据集转化成为图片
date: 2018/8/26 20:32:57
description: MNIST数据集
categories: 机器学习
tags: 
- MNIST
- python
- 机器学习
keywords: 机器学习,python,MNIST
---

解析源文件下载（总共包含60000个训练数据和10000个测试数据）

1. [训练集解析](http://pd10tty87.bkt.clouddn.com/train_release.py)
2. [测试集解析](http://pd10tty87.bkt.clouddn.com/test_release.py)

<!--more-->

## 对于训练集的代码

```python
import numpy as np
import struct

from PIL import Image
import os

data_file = 'MNIST_data\\train-images.idx3-ubyte'  # 需要修改的路径
# It's 47040016B, but we should set to 47040000B
data_file_size = 47040016
data_file_size = str(data_file_size - 16) + 'B'

data_buf = open(data_file, 'rb').read()

magic, numImages, numRows, numColumns = struct.unpack_from(
    '>IIII', data_buf, 0)
datas = struct.unpack_from(
    '>' + data_file_size, data_buf, struct.calcsize('>IIII'))
datas = np.array(datas).astype(np.uint8).reshape(
    numImages, 1, numRows, numColumns)

label_file = 'MNIST_data\\train-labels.idx1-ubyte'  # 需要修改的路径

# It's 60008B, but we should set to 60000B
label_file_size = 60008
label_file_size = str(label_file_size - 8) + 'B'

label_buf = open(label_file, 'rb').read()

magic, numLabels = struct.unpack_from('>II', label_buf, 0)
labels = struct.unpack_from(
    '>' + label_file_size, label_buf, struct.calcsize('>II'))
labels = np.array(labels).astype(np.int64)

datas_root = 'MNIST_data\\'  # 需要修改的路径
if not os.path.exists(datas_root):
    os.mkdir(datas_root)

for i in range(10):
    file_name = datas_root + os.sep + str(i)
    if not os.path.exists(file_name):
        os.mkdir(file_name)

for ii in range(numLabels):
    img = Image.fromarray(datas[ii, 0, 0:28, 0:28])
    label = labels[ii]
    file_name = datas_root + os.sep + str(label) + os.sep + \
                'mnist_train_' + str(ii) + '.png'
    img.save(file_name)
```

## 对于测试集的代码

```python
import numpy as np
import struct

from PIL import Image
import os

data_file = 'MNIST_data\\t10k-images.idx3-ubyte'  # 需要修改的路径

# It's 7840016B, but we should set to 7840000B
data_file_size = 7840016
data_file_size = str(data_file_size - 16) + 'B'

data_buf = open(data_file, 'rb').read()

magic, numImages, numRows, numColumns = struct.unpack_from(
    '>IIII', data_buf, 0)
datas = struct.unpack_from(
    '>' + data_file_size, data_buf, struct.calcsize('>IIII'))
datas = np.array(datas).astype(np.uint8).reshape(
    numImages, 1, numRows, numColumns)

label_file = 'MNIST_data\\t10k-labels.idx1-ubyte'  # 需要修改的路径

# It's 10008B, but we should set to 10000B
label_file_size = 10008
label_file_size = str(label_file_size - 8) + 'B'

label_buf = open(label_file, 'rb').read()

magic, numLabels = struct.unpack_from('>II', label_buf, 0)
labels = struct.unpack_from(
    '>' + label_file_size, label_buf, struct.calcsize('>II'))
labels = np.array(labels).astype(np.int64)

datas_root = 'MNIST_data\\test_dataset'  # 需要修改的路径

if not os.path.exists(datas_root):
    os.mkdir(datas_root)

for i in range(10):
    file_name = datas_root + os.sep + str(i)
    if not os.path.exists(file_name):
        os.mkdir(file_name)

for ii in range(numLabels):
    img = Image.fromarray(datas[ii, 0, 0:28, 0:28])
    label = labels[ii]
    file_name = datas_root + os.sep + str(label) + os.sep + \
                'mnist_test_' + str(ii) + '.png'
    img.save(file_name)
```

