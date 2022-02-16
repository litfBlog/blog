# blog
博客前端  
本项目的后端仓库: [blog-service](https://github.com/litfa/blog-service)

# 前端技术
- vue3
- router
- vuex
- ts
- less
- axios
- wangEdit
- Element-plus
- ...

# 开发进度
该项目仍在开发中...

# 搭建开发环境
推荐使用 [yarn](https://www.yarnpkg.cn/) 替代 `npm`

### 克隆仓库
```bash
$ git clone https://github.com/litfa/blog-v2.git
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




# 代码规范
### 组件
统一放在 src/components 中,文件名首字母大写  
对于较为复杂的组件或多个关联性较强的组件 可在components中创建文件夹存放

### 头部注释
推荐使用 vscode `korofileheader` 插件添加

### 代码规则
遵守 eslint 配置即可

### 变量名
使用驼峰命名法