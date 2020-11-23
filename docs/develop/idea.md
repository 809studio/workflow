# 开发工具

统一使用`Visual Studio Code(vs code)`进行前端项目的开发

并安装如下插件：

``` md
Auto Rename Tag
自动完成另一侧标签的同步修改

Beautify
格式化代码

prettier-vscode
vscode格式化代码的插件

ESLint
js语法纠错

Bracket Pair Colorizer
给括号加上不同的颜色，便于区分不同的区块

GitLens
方便查看git日志

HTML CSS Support
智能提示CSS类名以及id

JavaScript(ES6) code snippets
ES6语法智能提示，以及快速输入，不仅仅支持.js，
还支持.ts，.jsx，.tsx，.html，.vue，省去了配置其支持各种包含js代码文件的时间

Markdown Preview Enhanced
实时预览markdown

markdownlint
markdown语法纠错

Path Intellisense
自动提示文件路径，支持各种快速引入文件

Vetur
Vue多功能集成插件，包括：语法高亮，智能提示，emmet，错误提示，格式化，自动补全，debugger。
vscode官方钦定Vue插件

VueHelper
snippet代码片段

vscode-fileheader
顶部注释模板，可定义作者、时间等信息，并会自动更新最后修改时间，
快捷键ctrl + alt + i在文件开头自动输入作者信息和修改信息等内容

CSS Peek
使用此插件，你可以追踪至样式表中 CSS 类和 ids 定义的地方。
当你在 HTML 文件中右键单击选择器时，选择“ Go to Definition 和 Peek definition ”选项，
它便会给你发送样式设置的 CSS 代码。
```

打开vscode的`File -> Preferences -> settings`，按下图打开setting的json文件

<base-img img="open-setting.png" />

用如下内容覆盖setting.json文件，重启软件生效：

``` json
{
  // 让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "window.zoomLevel": 1,
  "workbench.startupEditor": "newUntitledFile",
  "editor.fontSize": 20,
  "vetur.format.options.tabSize": 2, // 缩进字节数
  "vetur.format.options.useTabs": false, // 缩进不使用tab，使用空格
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "semi": true, // 不加分号
      "singleQuote": true, // 用单引号
      "jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
      "trailingComma": "none" // 在对象或数组最后一个元素后面不加逗号
    }
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  // 自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "[html]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  }
}
```

123在项目根目录下新建.vscode文件夹，并在该文件夹里面新建settings.json文件，然后将下面的内容复制粘贴进去：

``` json
{
  "fileheader.Author": "rigar",
  "fileheader.LastModifiedBy": "rigar"
}
```

并将里面的两个名称改成自己的名称

操作：

- `shift + alt + f`格式化css（或sass、scss）

- `ctrl + s`保存修改的同时，会自动格式化html和js

- `ctrl + alt + i`生成文件顶部的注释

::: tip
因此对于vue文件，我们先按`shift + alt + f`格式化css，之后再`ctrl + s`保存修改
:::
