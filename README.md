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

  - 1、判断新老节点的 type
  - 2、给节点带上标签 effectTag(placement、update)
  - 3、重置 oldFiber

- 3、新老节点对比
  - 1、重构 updateProps
    - 1、old 有 new 没有 删除
    - 2、new 有 old 没有 添加
    - 3、new 有 old 有 修改

# day5

1、 type 不一致,更新删除

- 获取到老节点 oldFiber
- 统一删除
- 删除函数组件 dom 问题循环找 parent

2、删除多余的老节点

- oldFiber 位置
- 不止一个子节点情况 循环找 sibling

3、解决 edge case

- child 为 false 如何解决
- child 为 false 时下一个 sibling 问题

4、优化更新

- 更新子组件时，其他不相关的组件也重新渲染了

- 拿到开始节点- 当前的更新组件

- 结束点下一个任务是它的兄弟节点

# day6

1、 实现 useState

- 先实现执行 function
- oldHook 如何存储

2、 批量执行 action

- 当每次执行 setState 的时候收集所有 action
- 下次调用 useState 的时候批量调用 action

3、提前监测，建没必要的更新

- 在执行 setState 时，提前执行 action 跟 stateHook.state 对比
