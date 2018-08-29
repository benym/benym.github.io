---
title: 将hexo自定义域名升级https
date: 2018/8/29 16:02:44
description: 使用腾讯云作为存储，开起强制HTTPS，保证全站资源HTTPS链接
categories: HTTPS
tags: 
- Hexo
keywords: Hexo,https,升级
---

## 前言

***Tips:有什么问题可以在下方留言板留言哦，留下自己的邮箱，可以保证快速回复***

最近在折腾博客，发现github上很多人说个人博客支持https很重要，原本的github.io域名本来支持https协议，但是在自定义域名之后，协议变成了http。这使得网站变得不够安全，容易被劫持。

但是网上的支持https很多都是反向代理，以及SSL证书等，涉及到备案还有一些配置操作，算是比较麻烦，期间如果不对还会出现各种bug。所以针对简单想支持全站https的站长而言，我们可以选择如下操作：

<!--more-->

<div class="note intfo"><p>对于github解析的用户</p></div>

## 打开Github Pages页面的强制HTTPS

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/httpsupdate/hexo%E5%8D%87%E7%BA%A7https-1.png)

**在此之前，请确认上图中的Custom domain已经写为你的自定义域名**

**然后再勾选Enforce HTTPS即可**

<div class="note intfo"><p>对于coding解析的用户</p></div>

## 打开Coding Pages服务的强制HTTPS访问

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/httpsupdate/hexo%E5%8D%87%E7%BA%A7https-2.png)



对于没有引用外部链接的同学来说，你已经获得了https认证，在谷歌浏览器中可见网站的小绿锁，**但是对于大部分站长来说都有自己的云存储来保存自己的图片或者文件**，**于是我们需要一个图床或者云对象存储*并且它支持https协议***。

## 云存储对象的选择（腾讯云）

在百度中想要支持https外链的图床有不少，如简单图床、SM.MS、imgur、路过图床等，读者如果仅仅需要引用图片文件，那么这些图床完全满足你的要求，并可以保证全站https。但是笔者需要存储的不仅仅是图片，有事还会存储文件，而这些**图床只能存储图片，不能存储其他文件**，这就无法保证我其他文件的https链接，**笔者偶然间发现，腾讯云的对象存储具有不错的空间，并且支持https协议的外链，而且免费**，于是把整个云存储搬去腾讯云，更换外链后完成了全站https。

## 腾讯云对象存储添加

### 1、在云产品中选择对象存储

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/httpsupdate/hexo%E5%8D%87%E7%BA%A7https-3.png)

### 2、创建存储桶

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/httpsupdate/hexo%E5%8D%87%E7%BA%A7https-4.png)

#### 2.1关于存储的容量问题：

**每个存储桶中的对象不限**

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/httpsupdate/hexo%E5%8D%87%E7%BA%A7https-6.png)

**每月免费存储额度50GB，下行流量10GB，对于一个个人博客流量还不大的情况下完全足够了**

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/httpsupdate/hexo%E5%8D%87%E7%BA%A7https-7.png)

### 3、创建存储桶后上传自己的文件，然后点击**详情**，可以看到他的https外部链接

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/httpsupdate/hexo%E5%8D%87%E7%BA%A7https-5.png)

### 4、更换自己的md文件的外部链接即可，然后重新部署hexo，就可以看到效果了

![](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/httpsupdate/https.png)

