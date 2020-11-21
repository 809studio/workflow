# 技术选型

框架：

- vue@2.6.11

- vue-rouer@3.2.0

- vuex@3.4.0

- element-ui@2.14.1

- axios@0.21.0

- vue-docgen-cli@4.33.9

- vuepress@1.7.1

- sass@1.26.5

架构：

- 在`vue-element-template`项目的基础上进行构建

- 使用`vuepress`作为记录文档

- 使用`vue-docgen-cli`自动生成组件文档并用`vuepress`进行展示

- 使用`plop`自动生成组件模板

- `express` 搭建前端的数据模拟服务器，并用`MockJs`和`FakerJs`生成模拟数据

::: tip
不直接使用`MockJs`进行请求拦截是因为MockJs拦截的请求不会出现在浏览器的控制台，不方便调试

`FakerJs`比`MockJs`可以模拟的数据种类要多，特别是图片（`MockJs`无法生成图片数据）
:::
