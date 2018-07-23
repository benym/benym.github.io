---
title: python的pickle模块
date: 2018年7月23日 19:45:46
categories: 
- Python
tags: 
- python模块
---

### python的pickle模块

Python 提供了一个叫作 Pickle 的标准模块，通过它你可以将任何纯 Python 对象存储到一个文件中，并在稍后将其取回。这叫作持久地（Persistently）存储对象。

## 代码

```python
'''
在Pickle模块中有2个常用的函数方法，一个叫做dump()，另一个叫做load()。

pickle.dump(对象, 文件，[使用协议])

load()方法的作用正好与上面的dump()方法相反，上面是序列化数据，
这个方法作用是反序列化。

pickle.load(文件)

目的主要是为了将一些数据，如字符串、列表、字典等长期的以文件形式保存下来
'''
import pickle

# The name of the file where we will store the object
shoplistfile = 'shoplist.data'
# The list of things to buy
shoplist = ['apple', 'mango', 'carrot']

# Write to the file
f = open(shoplistfile, 'wb')
# Dump the object to a file
pickle.dump(shoplist, f)
f.close()

# Destroy the shoplist variable
del shoplist

# Read back from the storage
f = open(shoplistfile, 'rb')
# Load the object from the file
storedlist = pickle.load(f)
print(storedlist)
```

## 运行结果

```bash
['apple', 'mango', 'carrot']
```

