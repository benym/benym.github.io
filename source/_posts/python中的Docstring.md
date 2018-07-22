---
title: python中的Docstring
date: 2018年6月27日 17:14:51
categories: 
- Python
tags: 
- 基本教程
---

### 基本教程

```bash
'''
文档字符串的应用

该文档字符串所约定的是一串多行字符串，其中第一行以某一大写字母开始，以句号结束。
第二行为空行，后跟的第三行开始是任何详细的解释说明。 在此强烈建议你在有关你所有非
凡功能的文档字符串中都遵循这一约定。
'''


def print_max(x, y):
    '''Prints the maximum of two numbers.打印两个数值中的最大数。

    The two values must be integers.这两个数都应该是整数
    '''
    # 如果可能，将其转换至整数类型
    x = int(x)
    y = int(y)

    if x > y:
        print(x, 'is maximum')
    else:
        print(y, 'is maximum')


print_max(3, 5)
print(print_max.__doc__)

```

