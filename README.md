# vue-cli多页面应用
> A Vue.js project

### 文章地址：http://www.cnblogs.com/fengyuqing/p/vue_cli_webpack.html

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
#### 针对在webstorm里面不能hot reload的问题大家可以按如下步骤设置一下就行：
> Please try turning 'Safe write' option ( Settings | Appearance & Behavior | System Settings | Use "safe write" (save changes to temporary file first)) off

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

vue-cli-multipage
  |---build
  |---config
  |---src
    |---assets
      |---img 图片文件
      |---css 样式文件
      |---font 字体文件      
    |---components  组件
      |---Button.vue 按钮组件
      |---Hello.vue
    |---module
      |---index  首页模块
        |---index.html
        |---index.js
        |---App.vue
      |---detail  详情页模块
        |---detail.html
        |---detail.js
        |---App.vue
