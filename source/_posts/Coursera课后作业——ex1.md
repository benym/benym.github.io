---
title: Coursera课后作业——ex1
date: 2018/10/7 20:10:56
description: 线性回归和梯度下降
categories: 机器学习
mathjax: true
tags: 
- matlab
- 机器学习
- Coursera
keywords: 机器学习,matlab,Coursera
---

很久以前做的，还是提交一下

## 线性回归基础（ *Linear regression* ）

- Hypothesis:        $$h_{\theta }(x)=\theta _{0}+\theta _{1}x$$
- Parameters:       $$\theta _{0},\theta _{1}$$
- cost Funcition:      $$J(\theta _{0},\theta _{1})=\frac{1}{2m}\sum_{i=1}^{m}(h_{\theta}(x^{(i)})-y^{(i)})^{2}$$
- goal:          $$minimize_{\theta _{0},\theta _{1}}J(\theta _{0},\theta _{1})$$

在最小化损失函数的过程中需要用到梯度下降算法（Gradient descent）

## 梯度下降算法（*Gradient descent*  ）

Have some function:	 	$$J(\theta _{0},\theta _{1})$$

Want: 				$$minimize_{\theta _{0},\theta _{1}}J(\theta _{0},\theta _{1})$$

Outline: 

- start with some $\theta _{0},\theta _{1}$,(一般都取0)
- keep changing $\theta _{0},\theta _{1}$ to reduce $J(\theta _{0},\theta _{1})$，直到我们找到J的最小值或是局部最小值

repeat until convergence｛

​					$$\theta _{j}:=\theta _{j}-\frac{\alpha }{m}(h_{\theta^{(i)} }-y^{(i))})x_{j}^{(i)}$$(***simultaneously update θj for all j***)

｝

<!--more-->

## 代码

***主函数ex1.m***

```matlab
%% Machine Learning Online Class - Exercise 1: Linear Regression

%  Instructions
%  ------------
% 
%  This file contains code that helps you get started on the
%  linear exercise. You will need to complete the following functions 
%  in this exericse:
%
%     warmUpExercise.m
%     plotData.m
%     gradientDescent.m
%     computeCost.m
%     gradientDescentMulti.m
%     computeCostMulti.m
%     featureNormalize.m
%     normalEqn.m
%
%  For this exercise, you will not need to change any code in this file,
%  or any other files other than those mentioned above.
%
% x refers to the population size in 10,000s
% y refers to the profit in $10,000s
%

%% Initialization
clear ; close all; clc

%% ==================== Part 1: Basic Function ====================
% Complete warmUpExercise.m 
fprintf('Running warmUpExercise ... \n');
fprintf('5x5 Identity Matrix: \n');
warmUpExercise()

fprintf('Program paused. Press enter to continue.\n');
pause;


%% ======================= Part 2: Plotting =======================
fprintf('Plotting Data ...\n')
data = load('ex1data1.txt');
X = data(:, 1); y = data(:, 2);%第一列数据给X，第二列数据给y
m = length(y); % 训练样本的个数

% Plot Data
% Note: You have to complete the code in plotData.m
plotData(X, y);   %传入X和y进行画图

fprintf('Program paused. Press enter to continue.\n');
pause;

%% =================== Part 3: Gradient descent ===================
fprintf('Running Gradient Descent ...\n')

X = [ones(m, 1), data(:,1)]; % Add a column of ones to x  考虑到截取项theta0，为X增加额外的一列
theta = zeros(2, 1); % initialize fitting parameters  定义一个2行1列值为0的向量

% Some gradient descent settings
iterations = 1500;  %迭代次数
alpha = 0.01;   %学习率

% compute and display initial cost
computeCost(X, y, theta)   %计算代价函数J（theta）

% run gradient descent
theta = gradientDescent(X, y, theta, alpha, iterations); %获得theta0和theta1

% print theta to screen
fprintf('Theta found by gradient descent: ');
fprintf('%f %f \n', theta(1), theta(2));

% Plot the linear fit
hold on; % keep previous plot visible
plot(X(:,2), X*theta, '-')  %以X的第2列为横坐标，X*theta为纵坐标，横线为标记画图
legend('Training data', 'Linear regression')
hold off % don't overlay any more plots on this figure

% Predict values for population sizes of 35,000 and 70,000
predict1 = [1, 3.5] *theta;  %预测人口为35000的时候的利润
fprintf('For population = 35,000, we predict a profit of %f\n',...
    predict1*10000);
predict2 = [1, 7] * theta;    %预测人口为70000的时候的利润
fprintf('For population = 70,000, we predict a profit of %f\n',...
    predict2*10000);

fprintf('Program paused. Press enter to continue.\n');
pause;

%% ============= Part 4: Visualizing J(theta_0, theta_1) =============  可视化J（theta）
fprintf('Visualizing J(theta_0, theta_1) ...\n')

% Grid over which we will calculate J
theta0_vals = linspace(-10, 10, 100);% 生成-10到10之间，间距为（10-（-10)）/（100-1）的长度为100的数组（即间距为0.2020）
theta1_vals = linspace(-1, 4, 100); % 生成-1到4，间距为0.051的长度为100的数组

% initialize J_vals to a matrix of 0's
J_vals = zeros(length(theta0_vals), length(theta1_vals));

% Fill out J_vals
for i = 1:length(theta0_vals)
    for j = 1:length(theta1_vals)
	  t = [theta0_vals(i); theta1_vals(j)];    
	  J_vals(i,j) = computeCost(X, y, t);
    end
end


% Because of the way meshgrids work in the surf command, we need to 
% transpose J_vals before calling surf, or else the axes will be flipped
J_vals = J_vals';
% Surface plot
figure;
surf(theta0_vals, theta1_vals, J_vals)  % 三维图
xlabel('\theta_0'); ylabel('\theta_1');

% Contour plot
figure;
% Plot J_vals as 15 contours spaced logarithmically between 0.01 and 100
contour(theta0_vals, theta1_vals, J_vals, logspace(-2, 3, 20)) % 等高线
xlabel('\theta_0'); ylabel('\theta_1');
hold on;
plot(theta(1), theta(2), 'rx', 'MarkerSize', 10, 'LineWidth', 2);
```

***计算损失函数部分computeCost.m***

```matlab
function J = computeCost(X, y, theta)
%COMPUTECOST Compute cost for linear regression
%   J = COMPUTECOST(X, y, theta) computes the cost of using theta as the
%   parameter for linear regression to fit the data points in X and y

% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly 
J = 0;

% ====================== YOUR CODE HERE ======================
% Instructions: Compute the cost of a particular choice of theta
%               You should set J to the cost.



predictions =  X*theta;    % h_theta(x)=thetaT*x
sqerrors = (predictions - y).^2; 
J = 1/(2*m)* sum(sqerrors);

% =========================================================================

end
```

***绘图部分plotData.m***

```matlab
function plotData(x, y)
%PLOTDATA Plots the data points x and y into a new figure 
%   PLOTDATA(x,y) plots the data points and gives the figure axes labels of
%   population and profit.

% ====================== YOUR CODE HERE ======================
% Instructions: Plot the training data into a figure using the 
%               "figure" and "plot" commands. Set the axes labels using
%               the "xlabel" and "ylabel" commands. Assume the 
%               population and revenue data have been passed in
%               as the x and y arguments of this function.
%
% Hint: You can use the 'rx' option with plot to have the markers
%       appear as red crosses. Furthermore, you can make the
%       markers larger by using plot(..., 'rx', 'MarkerSize', 10);

figure; % open a new figure window

plot(x, y, 'rx', 'MarkerSize', 10); % Plot the data   用红色的大小为10的×来进行标记，横坐标是X，纵坐标是y
ylabel('Profit in $10,000s'); % Set the y axis label
xlabel('Population of City in 10,000s'); % Set the x axis label




% ============================================================

end
```

***梯度下降gradientDescent.m***

```matlab
function [theta, J_history] = gradientDescent(X, y, theta, alpha, num_iters)
%GRADIENTDESCENT Performs gradient descent to learn theta
%   theta = GRADIENTDESENT(X, y, theta, alpha, num_iters) updates theta by 
%   taking num_iters gradient steps with learning rate alpha

% Initialize some useful values
m = length(y); % number of training examples
J_history = zeros(num_iters, 1);

for iter = 1:num_iters

    % ====================== YOUR CODE HERE ======================
    % Instructions: Perform a single gradient step on the parameter vector
    %               theta. 
    %
    % Hint: While debugging, it can be useful to print out the values
    %       of the cost function (computeCost) and gradient here.
    %
    predictions =  X * theta;
    updates = X' * (predictions - y);
    theta = theta - alpha * (1/m) * updates;
    %theta = theta - alpha * (1/m) * sum(sqerrors) * X;

    %theta - (alpha/m) * (X' * (X * theta - y));

    %theta = theta - (alpha/m) * (X' * (X * theta - y));
    % ============================================================

    % Save the cost J in every iteration    
    J_history(iter) = computeCost(X, y, theta);

end

end
```

## 运行结果

![数据可视化](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/ex1/ex1%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%9C.jpg)

线性回归拟合之后

![线性回归](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/ex1/ex1%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92.jpg)

绘制梯度下降等高线

![等高线图](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/ex1/ex13d%E5%9B%BE.jpg)

判断梯度下降是否达到最低点

![判断梯度下降最低点](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/ex1/ex1%E6%A2%AF%E5%BA%A6%E4%B8%8B%E9%99%8D%E7%A4%BA%E6%84%8F.jpg)

预测结果

![预测结果](https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/ex1/ex1%E9%A2%84%E6%B5%8B.png)

上图得到$\theta _{1},\theta _{2}$的数值以及在人口为35000和70000时，分别可以获得的利润