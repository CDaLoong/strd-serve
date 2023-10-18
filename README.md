## 开发注意事项

- 注意代码规范，安装`eslint`和`prettier`插件进行代码格式约束
- 注意不要重复封装工具函数

## bug 记录

## 项目 node 版本

`node16+`

推荐：`v16.20.0`

## src 简要说明

```bash
|-- common/ # 一些通用或全局方法
    |-- database/ # 数据库连接方法
        |-- database.module.ts # 数据库连接模块，目前仅连接mysql数据库
    |-- decorator/ # 自定义装饰器
        |-- skipAuth.ts # 公开路由装饰器，使用该装饰器的路由不用进行权限校验
    |-- error/ # 自定义异常过滤器
        |-- global-exception.filter.ts # 全局报错过滤加工处理
        |-- http-exception.filter.ts # 负责捕获作为HttpException类实例的异常
    |-- interceptor/ # 拦截器
        |-- global.interceptor.ts # 全局路由拦截器，目前处理缓存和时间反馈
    |-- middleware/ # 自定义中间件
        |-- logger.middleware.ts # 日志中间件
    |-- pipe/ # 自定义管道
        |-- validate.pipe.ts # 
|-- controller/ # 控制器模块组
    |-- articles/ # 文章控制器组
        |-- articles.controller.ts # 文章控制器
        |-- articles.module.ts # 文章模块
        |-- articles.service.ts # 文章服务器
    |-- auth/ # 权限控制器组
        |-- auth.controller.ts # 权限控制器
        |-- auth.guard.ts # 
        |-- auth.module.ts # 权限模块
        |-- auth.service.ts # 权限服务器
        |-- auth.strategy.ts # 
        |-- constants.ts # 
    |-- comments/ # 评论控制器组
        |-- comments.controller.ts # 评论控制器
        |-- comments.module.ts # 评论模块
        |-- comments.service.ts # 评论服务器
    |-- likes/ # 点赞控制器组
        |-- likes.controller.ts # 点赞控制器
        |-- likes.module.ts # 点赞模块
        |-- likes.service.ts # 点赞服务器
    |-- users/ # 用户控制器组
        |-- users.controller.ts # 用户控制器
        |-- users.module.ts # 用户模块
        |-- users.service.ts # 用户服务器
|-- entity/ # 数据库表
    |-- articles.entity.ts # 文章表
    |-- comments.entity.ts # 评论表
    |-- likes.entity.ts # 点赞表
    |-- users.entity.ts # 用户表
|-- app.module.ts # 整体框架
|-- main.ts # 全局入口
```
