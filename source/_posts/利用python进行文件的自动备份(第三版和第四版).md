---
title: 利用python进行文件的自动备份(第三版和第四版)
date: 2018年7月23日 18:54:24
categories: 
- Python
tags: 
- 基本教程
---

### 利用python进行文件的自动备份(第三版和第四版)

## 代码

```python
import os
import time

'''
第三版和第四版差别不大整合在一起，用户注释的内容可以添加到文件名中来实现
'''
source = [r'E:\aaa.txt']

target_dir = 'E:\\Backup\\'

if not os.path.exists(target_dir):
    os.mkdir(target_dir)
# 子目录名称
today = target_dir + os.sep + time.strftime('%Y%m%d')
# 将当前时间作为zio文件的文件名
now = time.strftime('%H%M%S')

# 添加一条来自用户的注释以创建
# zip文件的文件名

comment = input('Enter a comment -->')
# 检查是否有评论键入
if len(comment) == 0:
    target = today + os.sep + now + '.zip'
# replace函数中前面的将被替换为后面的
else:
    target = today + os.sep + now + '_' + \
             comment.replace(' ', '_') + '.zip'
# 如果子目录尚不存在则创建一个
if not os.path.exists(today):
    os.mkdir(today)
    print('Successfully created directory', today)

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

<!--more-->

```bash
Enter a comment -->This is my backup
Zip command is:
7z a E:\Backup\\20180723\185735_This_is_my_backup.zip E:\aaa.txt
Running:

7-Zip 18.05 (x64) : Copyright (c) 1999-2018 Igor Pavlov : 2018-04-30

Scanning the drive:
1 file, 10 bytes (1 KiB)

Creating archive: E:\Backup\\20180723\185735_This_is_my_backup.zip

Add new data to archive: 1 file, 10 bytes (1 KiB)


Files read from disk: 1
Archive size: 158 bytes (1 KiB)
Everything is Ok
Successful backup to E:\Backup\\20180723\185735_This_is_my_backup.zip
```

