# 学习 mini-react 记录

# day1

1、先实现写死的版本，让其写展示出来

2、再实现 js object 版本

3、同过 createTextNode、createElement 动态创建

4、动态创建 el 节点, 实现 render 函数

# day2

1、实现任务调度器

2、现实 fiber 架构

- 链表渲染
- 如何转换成链表
- 创建 dom
- 处理 props
- 转换链表 设置好指针
- 返回下一个要执行的任务

# day3

1、实现统一提交

- 解决浏览器没有空余时间，统一提交
- 不要中途添加 dom，最后一起添加
- 记录 root 节点
  2、实现函数组件

3、重构函数组件

# day4

1、实现绑定事件

- 1、观察 vdom 数据
- 2、判断处理的地方在 updateProps 的时候

2、更新 props

- 1、如何得到新的 dom 树 执行了 render -> 实现 update 定义 currentRoot

- 2、如何找到老的节点 创建一个属性指向老的节点 alternate

- 3、
