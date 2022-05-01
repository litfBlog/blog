# 小程序
- ### 使用微信登录
新版不再需要注册账号，使用微信扫码即可一键注册/登录
- ### 阅读文章
小程序可以阅读文章，也可使用小程序分享文章

# 新版特性

- ### 使用 Vue3 开发
使用 `Vue3` 开发，全面拥抱 Vue3 生态

- ### 使用 Typescript
前后端及小程序均使用`ts`开发

- ### 支持主题定制
可以修改 `src/assets/theme/themes.ts` 实现主题色切换


- ### 完善的 api 文档
每一个接口都有apipost生成的api文档
[点击查看](https://console-docs.apipost.cn/preview/30d1279e811bef63/63ef8f71eaea6784)
![](https://blog-1259453062.cos.ap-beijing.myqcloud.com/user1%2FH0%5BAH%5BQ%24E9EGVT\(QNM%259E%5D8.png)

- ### 搜索
优化了搜索逻辑
![](https://blog-1259453062.cos.ap-beijing.myqcloud.com/user1%2Fjpbo5-vxtfl.gif)


- ### 友链支持自助申请
交换友链时可以自行填写信息，审核后就能看到咯~

# UI升级

- ### 全新UI
![66XCRDFC7LEP_~Z9C57KL.png](https://blog-1259453062.cos.ap-beijing.myqcloud.com/user1/20220429180720-66XC%29RDFC7LEP_~%7BZ9C57KL.png)
推出了全新的页面布局，修复了旧版排版错乱等问题。

- ### 支持暗色模式，夜间阅读更护眼
推出了暗色模式，可以随系统切换，也可通过右下角主题切换按钮手动切换
![8VS6VP~VU4A~OVY29S78HN.png](https://blog-1259453062.cos.ap-beijing.myqcloud.com/user1%2Fnb1q1-w1kj1.gif)

# 编辑器升级

- ### 全新的编辑器
新的编辑器使用`v-md-editor` 解决了旧版预览不同步的问题，同时限制了整体的宽度。(由于微信限制，暂时不能使用小程序投稿)
![](https://blog-1259453062.cos.ap-beijing.myqcloud.com/user1%2Fgnfdy-k957c.gif)

- ### 支持存草稿
新版支持了保存草稿功能。后续将支持自动保存等功能.

- ### 封面
可以为文章设置封面，web端及小程序都能看到

# 文章升级
- ### 调整了点赞按钮的位置
将点赞等按钮移至右侧，并加入评论跳转、回顶部等功能
- ### 增加了评论功能
评论还支持emoji哦~
![](https://blog-1259453062.cos.ap-beijing.myqcloud.com/user1%2Fh9qnv-mti2j.gif)
- ### 举报功能
预防用户发布违规内容，推出了举报功能，用户可对文章及评论发起举报。审核后将删除内容并封禁用户
![](https://blog-1259453062.cos.ap-beijing.myqcloud.com/user1%2F637d0-aohiw.gif)

# 缺陷
~~没有缺陷~~

由于时间紧迫，还有部分功能尚未完善，比如 搜索、关注等，这些会在上线后逐步完善。

由于目前是单页面应用，对搜索引擎并不友好，不能爬到文章的内容，后续会考虑使用[nuxtjs](https://v3.nuxtjs.org/)框架优化.

关于微信小程序  
微信小程序目前使用 `uniapp vue3` 开发,目前没有完善的组件库，同时微信的各种限制: 不能跳转链接、不支持解析`markdown`等  
因此功能较少, 暂时不支持 投稿、点赞、暗色模式、查看/发送评论等，这些也会逐步完善

当前版本还存在部分bug：
- 暗色模式没有完全适配
- 文章不能触底加载
- 没有快捷分享
- 审核结果无法通知
- ……
若您发现其他问题可以通过github 提交issus 
[web](https://github.com/litfBlog/blog/issues)  
[小程序](https://github.com/litfBlog/blog-miniprogram/issues)  
[后端](https://github.com/litfBlog/admin/issues)  
[管理后台](https://github.com/litfBlog/blog-service/issues)  
或通过网站底部联系方式联系  
也欢迎提交[pr](https://github.com/litfBlog/blog/pulls)
