---

title: Java多线程实现的几种方式
date: 2020/6/28 10:25:41
description: 总结
categories: Java
tags: 
- 多线程
- Java
keywords: 多线程,Java
---

## Java多线程实现的几种方式

多进程是计算机中的一个重要概念，通常一个任务称为一个进程，比如浏览网页、播放音乐都是一个进程。

在进程内部可能还需要执行多个子任务，比如在使用word文档打字的时候，不仅要进行字符打印，同时还要进行字符统计、拼接检查等任务。

进程和线程的关系是：一个进程可以包含一个或者多个线程，但至少会包含一个线程。

在Java中，多线程的学习是非常重要的，本文主要概括Java多线程实现的几种方式。

 <!--more-->

Java中实现多进程的方式大概有3种：

1. 实现Runnable接口，重写run方法
2. 继承Thread类，重写run方法(Thread类本身也实现了Runnable接口)
3. 实现Callable接口，重写call方法(带有返回值)

#### 通过Runnable接口实现多线程

```java
public class Main {
    public static void main(String[] args) {
        Thread t = new Thread(new MyRunnable());
        t.start(); // 启动新线程
    }
}

class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("start new thread!");
    }
}

```

实现Runnable接口的类，只定义了任务，自身不具有线程能力。需要通过Thread类的构造器来将任务驱动在一个线程中。

#### 通过继承Thread类实现

Thread类中已经实现了Runnable接口，所以可以直接继承Thread类，覆写run方法实现多线程

```java
public class MyThread extends Thread{
    public void run(){
        System.out.println("New Thread : "+Thread.currentThread().getName());
    }
    public static void main (String []args){
        MyThread thread = new MyThread();
        thread.start();
        System.out.println("Main Thread : " + Thread.currentThread().getName());
    }
}
```

#### 通过继承Callable接口实现

相较于实现Runnable接口，Callable方法可以有返回值，并且可以抛出异常

执行Callable方法，需要FutureTask实现类的支持，用于接受运算的结果，FutureTask是Future接口的实现

需要覆写call方法，运行Callable任务可以拿到一个Future对象，Future表示异步计算的结果

通过Future对象可了解任务执行情况，可取消任务的执行，还可以获取任务执行的结果

```java
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

public class TestCallable {

    public static void main(String[] args) {
        ThreadDemo td = new ThreadDemo();

        FutureTask<Integer> result = new FutureTask<>(td);

        new Thread(result).start();

        try {
            Integer sum = result.get();
            System.out.println(sum);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }

}

class ThreadDemo implements Callable<Integer> {

    @Override
    public Integer call() throws Exception {
        int sum = 0;

        for (int i = 0; i <= 100; i++) {
            sum += i;
        }

        return sum;
    }

}
```



