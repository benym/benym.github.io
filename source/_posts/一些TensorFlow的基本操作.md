---
title: 一些TensorFlow的基本操作
date: 2018/8/26 16:55:33
description: Tensor,变量,Fetch,Feed的使用
categories: Tensorflow
tags: 
- Tensorflow
- Python
- 机器学习
keywords: 机器学习,Python,Tensorflow
---

简单用代码说明Tensor,变量,Fetch,Feed的使用

# Tensor

TensorFlow 程序使用 tensor 数据结构来代表所有的数据, 计算图中, 操作间传递的数据都是 tensor. 你可以把 TensorFlow tensor 看作是一个 n 维的数组或列表. 一个 tensor 包含一个静态类型 rank, 和 一个 shape. 

<!--more-->

## 代码

```python
# @Time    : 2018/8/26 16:08
# @Author  : YuanMing
# @File    : 变量.py
# @Software: PyCharm
import tensorflow as tf

# 创建一个变量，初始化变量0
state = tf.Variable(0, name="counter")
# 创建一个op，其作用是使state增加1
one = tf.constant(1)
new_value = tf.add(state, one)
'''
代码中 assign() 操作是图所描绘的表达式的一部分, 正如 add() 操作一样. 所以在调用 run() 执行表达式之前, 它并不会真正执行赋值操作.
'''
update = tf.assign(state, new_value)

# 启动图后，变量必须先经过'初始化'（init）op初始化
# 首先必须增加一个'初始化'op到图中
init_op = tf.initialize_all_variables()

# 启动图，运行op
with tf.Session() as sess:
    # 运行'init' op
    sess.run(init_op)
    # 打印'state'的初始值
    print(sess.run(state))
    # 运行op,更新'state'，并打印'state'
    for _ in range(3):
        sess.run(update)
        print(sess.run(state))
'''
Fetch
为了取回操作的输出内容, 可以在使用 Session 对象的 run() 调用 执行图时, 传入一些 tensor, 这些 tensor 会帮助你取回结果. 在之前的例子里, 我们只取回了单个节点 state, 但是你也可以取回多tensor:
'''
input1 = tf.constant(3.0)
input2 = tf.constant(2.0)
input3 = tf.constant(5.0)
intermed = tf.add(input2, input3)
mul = tf.multiply(input1, intermed)

with tf.Session() as sess:
    result = sess.run([mul, intermed])
    print(result)

'''
Feed
feed 机制, 该机制 可以临时替代图中的任意操作中的 tensor可以对图中任何操作提交补丁, 直接插入一个 tensor.最常见的用例是将某些特殊的操作指定为 "feed" 操作, 标记的方法是使用 tf.placeholder() 为这些操作创建占位符.
'''
input1 = tf.placeholder(tf.float32)
input2 = tf.placeholder(tf.float32)
output = tf.multiply(input1, input2)

with tf.Session() as sess:
  print(sess.run([output], feed_dict={input1:[7.], input2:[2.]}))
```

## 运行结果

```python
0
1
2
3
[21.0, 7.0]
[array([14.], dtype=float32)]
```

