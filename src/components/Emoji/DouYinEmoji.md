## 抖音emoji获取
由于没找到表情列表的api，使用这种方式获取的表情

抖音网页版，打开表情选择框，复制html，通过js遍历获取链接  
这里不包含表情名称，只能拿到图片，网页版点击表情后，会在输入框加一个 [表情名]  
获取选择框的dom,遍历dom，调用 `click()` 方法，就能把所有表情添加到输入框  
通过 `split(']  [')` 方法转换成数组，再手动去掉首尾多出来的中括号  
此时得到了 url 和 名字  
通过for循环将两个数组合并，使用 mjs 下载到本地  
emoji 文件夹放了图片和 list.ts（默认导出了名字的数组）,最后渲染到页面上 
```html
<!-- 省略head等标签 -->
<script>
     let arr = []
     window.onload = () => {
          document.querySelectorAll('img').forEach(e => {
               arr.push(e.src)
          })
          console.log(arr)
     }
</script>

<body>
     <div class="oYaAD_fv">
          <div class="gETXElOH">
               <span class="dXGx1zv9">

                    <img
                         src="https://p3-pc-sign.douyinpic.com/obj/tos-cn-i-tsj2vxp0zn/281b5659e6fb46bebb2b29fb1b443643?x-expires=1964419200&x-signature=Czuj7S1c4U%2Bv%2B%2Fxx5oUzErKSHH0%3D&from=876277922"></span><span
                     class="dXGx1zv9">

                    <img
                         src="https://p3-pc-sign.douyinpic.com/obj/tos-cn-i-tsj2vxp0zn/03e08f87351e4260a796c4955588051a?x-expires=1964419200&x-signature=MDA6LzbT5xJHY38YpXomTcIquC0%3D&from=876277922"></span><span
                     class="dXGx1zv9">
                     <!-- 省略多个…… -->
                    <img
                         src="https://p3-pc-sign.douyinpic.com/obj/tos-cn-i-tsj2vxp0zn/329fefe6d32a431aaff4cbd200d11e33?x-expires=1964419200&x-signature=TDHfx9tbOm4XSzxtU4tRIwqtzdI%3D&from=876277922"></span>
          </div>
     </div>
</body>
```

mjs下载
```js
// mjs
// 上一步获取的链接
const images = [
  "https://p3-pc-sign.douyinpic.com/obj/tos-cn-i-tsj2vxp0zn/281b5659e6fb46bebb2b29fb1b443643?x-expires=1964419200&x-signature=Czuj7S1c4U%2Bv%2B%2Fxx5oUzErKSHH0%3D&from=876277922",
  "https://p3-pc-sign.douyinpic.com/obj/tos-cn-i-tsj2vxp0zn/03e08f87351e4260a796c4955588051a?x-expires=1964419200&x-signature=MDA6LzbT5xJHY38YpXomTcIquC0%3D&from=876277922",
  "https://p3-pc-sign.douyinpic.com/obj/tos-cn-i-tsj2vxp0zn/28f581e687cb4f2fa5ecdacb2f950ce8?x-expires=1964419200&x-signature=XqWDtik8ixUP7x8A4kpZ1JTKOsI%3D&from=876277922",
  "https://p3-pc-sign.douyinpic.com/obj/tos-cn-i-tsj2vxp0zn/6135c3fd1aba48f8b95c74f58ed62cd2?x-expires=1964419200&x-signature=q6asK1eIZrPhOBJVYl0stuUcRLg%3D&from=876277922",
]

// 上一步获取的名字
const text = [
  "微笑",
  "色",
  "发呆",
  "酷拽",
  "抠鼻",
  "流泪",
  "捂脸",
  "发怒",
  "呲牙",
  "一起加油",
  "害羞",
  // 省略多个……
]

// 合并两个数组
const data = []
for (let i = 0; i < images.length; i++) {
  data.push({
    src: images[i],
    title: text[i]
  })
}
// 将请求到的 arrayBuffer 转为 Buffer
function toBuffer (ab) {
  var buf = new Buffer.alloc(ab.byteLength)
  var view = new Uint8Array(ab)
  for (var i = 0; i < buf.length; ++i) {
    buf[i] = view[i]
  }
  return buf
}

// 遍历、下载
data.forEach(async e => {
  let file = await fetch(e.src)
  let arrayBuffer = await file.clone().arrayBuffer()
  // 写入到文件夹
  await fs.writeFileSync(`./images/${e.title}.jpg`, toBuffer(arrayBuffer))
})
```