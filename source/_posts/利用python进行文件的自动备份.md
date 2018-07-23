---
title: 利用python进行文件的自动备份
date: 2018年7月22日 16:04:32
categories: 
- Python
tags: 
- 基本教程
---

### 利用Python进行文件的自动备份（第一版）

os.system 函数的命令，这一函数可以使命令像是从系统中运行的。也就是说，从 shell 中运行的——如果运行成功，它将返回 0 ，如果运行失败，将返回一个错误代码。

## 针对 Windows 用户的提示

除了使用双反斜杠转义序列，你还可以使用原始字符串。例如使用 'C:\\Documents' 或
r'C:\Documents' 。然而，不要使用 'C:\Documents' ，因为它将被识别为你使用了一个
未知的转义序列 \D 来结束路径的输入。

## 代码

```python
import os
import time

# 1. 需要备份的文件与目录将被
# 指定在一个列表中。
# 例如在 Windows 下：
source = [r'E:\aaa.txt']
# 在这里要注意到我们必须在字符串中使用双引号
# 用以括起其中包含空格的名称。
# 2. 备份文件必须存储在一个
# 主备份目录中
# 例如在 Windows 下：
target_dir = 'E:\\Backup\\'
# 要记得将这里的目录地址修改至你将使用的路径

# 3.备份文件将打包压缩成zip文件
# 4.zip压缩文件的文件名由当前日期与时间构成

# 其中os.sep 表示更改操作系统中的路径分隔符

target = target_dir + os.sep + \
         time.strftime('%Y%m%d%H%M%S') + '.zip'
# 如果目标目录还不存在，则进行创建
if not os.path.exists(target_dir):
    os.mkdir(target_dir)  # 创建目录

# 5.原本这里是使用zip命令，但是在windows环境下面这个是不是系统命令，所以解决方案如下：
'''
1.1.下载7-Zip并安装
2.将安装文件中的7z.exe移至‘C:\Windows’目录下
3.将程序中的 zip_command = "zip -qr '%s' %s"%(target,''.join(source))
改为：zip_command = "7z a %s %s"%(target, ' '.join(source))
'''
zip_command = "7z a %s %s" % (target, ' '.join(source))

# 运行备份
print('Zip command is:')
print(zip_command)
print('Running:')
if os.system(zip_command) == 0:
    print('Successful backup to', target)
else:
    print('Backup FAILED')
```

<!--more-->

## 输出结果

> 1 file, 10 bytes (1 KiB)
>
> Creating archive: E:\Backup\\20180722160831.zip
>
> Add new data to archive: 1 file, 10 bytes (1 KiB)
>
> Files read from disk: 1
>
> Archive size: 158 bytes (1 KiB)
>
> Everything is Ok
>
> Successful backup to E:\Backup\\20180722160831.zip