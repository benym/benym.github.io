---
title: 利用python进行文件的自动备份（第二版）
date: 2018/7/23 18:49:11
categories: 
- Python
tags: 
- 基本教程
---

### 利用python进行文件的自动备份（第二版）

## 代码

```python
import os
import time

'''
第二版是第一版的改进，
启用一种更好的文件命名机制——使用时间作为文件名，存储在以当前时间为名字的文件夹中，这一文件夹则照常存储在主备份目录下。

'''

# 例如在 Windows 下：
source = [r'E:\aaa.txt']
# 在这里要注意到我们必须在字符串中使用双引号
# 用以括起其中包含空格的名称。
# 2. 备份文件必须存储在一个
# 主备份目录中
# 例如在 Windows 下：
target_dir = 'E:\\Backup\\'
# 要记得将这里的目录地址修改至你将使用的路径
# 如果目标目录还不存在，则进行创建
if not os.path.exists(target_dir):
    os.mkdir(target_dir)  # 创建目录

# 3.备份文件将打包压缩成zip文件
# 4.zip压缩文件的文件名由当前日期与时间构成
# 其中os.sep 表示更改操作系统中的路径分隔符
today = target_dir + os.sep + time.strftime('%Y%m%d')
# 将当前时间作为zip文件的文件名
now = time.strftime('%H%M%S')

# zip文件名称格式
target = today + os.sep + now + 'zip'
# 如果子目录尚不存在则创建一个
if not os.path.exists(today):
    os.mkdir(today)
    print('Successfully created diectory', today)

# 5.原本这里是使用zip命令，但是在windows环境下面这个是不是系统命令，所以解决方案如下：
'''
1.1.下载7-Zip并安装
2.将安装文件中的7z.exe移至‘C:\Windows’目录下
3.将程序中的 zip_command = "zip -qr '%s' %s"%(target,''.join(source))
改为：zip_command = "7z a %s %s"%(target, ' '.join(source))
或者是"7z a {0} {1}".format(target, ' '.join(source))
'''
zip_command = "7z a {0} {1}".format(target, ' '.join(source))

# 运行备份
print('Zip command is:')
print(zip_command)
print('Running:')
if os.system(zip_command) == 0:
    print('Successful backup to', target)
else:
    print('Backup FAILED')
```

## 运行结果

```bash
Zip command is:
7z a E:\Backup\\20180723\185035zip E:\aaa.txt
Running:

7-Zip 18.05 (x64) : Copyright (c) 1999-2018 Igor Pavlov : 2018-04-30

Scanning the drive:
1 file, 10 bytes (1 KiB)

Creating archive: E:\Backup\\20180723\185035zip.7z

Add new data to archive: 1 file, 10 bytes (1 KiB)


Files read from disk: 1
Archive size: 136 bytes (1 KiB)
Everything is Ok
Successful backup to E:\Backup\\20180723\185035zip
```

