# 博客前端 litfBlog  
本项目的其他仓库:
[后端](https://github.com/litfBlog/blog-service)
[小程序](https://github.com/litfBlog/blog-miniprogram)
[后台](https://github.com/litfBlog/admin)

### [网站](https://www.litf.com.cn)

# 特性
- 使用`vue3`开发, 使用`script setup`语法
- 使用`TypeScript`
- 可配置主题
- 支持暗色模式


# 使用
推荐使用 [yarn](https://www.yarnpkg.cn/) 替代 `npm`

### 克隆仓库
```bash
$ git clone https://github.com/litfa/blog.git
```
### 安装模块
```bash
$ yarn
```
### 运行
```bash
$ yarn serve
```
### 构建
```bash
$ yarn build
```

# 配置
使用`.env`配置
- `VUE_APP_ApiBaseutl` api请求地址

# 代码规范
### 组件
在 src/components 中, 文件夹与文件名首字母大写  

### 头部注释
推荐使用 vscode `korofileheader` 插件添加

### 代码规则
遵守 eslint 配置即可

### 变量名
使用驼峰命名法
