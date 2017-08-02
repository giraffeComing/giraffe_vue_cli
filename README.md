# giraffe_vue_cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# 目录结构
```
├─build
├─config
├─src
│  ├─api
│  │  ├─fund
│  │  └─user
│  ├─assets
│  │  ├─images
│  │  └─scss
│  ├─components
│  │  ├─common
│  │  │  └─button
│  │  ├─layout
│  │  │  ├─container
│  │  │  ├─dialog
│  │  │  ├─footer
│  │  │  ├─header
│  │  │  └─loading
│  │  └─plug
│  │      └─swiper
│  ├─demos
│  ├─router
│  ├─store
│  │  ├─modules_A
│  │  └─modules_B
│  └─views
│      ├─404
│      ├─allDemos
│      └─index
└─static
```

### 一、vue-cli脚手架的初始化及git仓库初始化
1. 先vue init webpack pjc-name先新建vue脚手架
2. 在脚手架目录下通过git brash命令行工具执行git init命令，这样就得到了一个本地的git仓库
3. 在sourcetree中打开该仓库，然后如下图，在设置中关联远程已有的仓库地址


### 二、统一缩进
- 4个空格

### 三、新建scss文件夹，定义全局reset.scss、global.scss
- scss文件夹规划在assets目录下
1. 新装的vue-cli脚手架中不包含sass，所以要先安装sass

```
npm install node-sass --save-dev
npm install sass-loader --save-dev
<style lang="scss" scoped="" type="text/css"></style>
```
2. 在app.vue中引入全局scss
import reset from './scss/reset.scss'
切记一定不要省略.scss，这个真不能省
先定义了两个，一个是reset.scss，一个是global.scss
3. 定义全局样式base.scss，html，body，font....
4. 全局变量global.scss的使用要通过npm先安装sass-resources-loader
具体的使用效果及打包是否会有bug还要观察
https://github.com/shakacode/sass-resources-loader
5. app.vue中设置rem



### 四、vue组件目录规划
1. views视图文件夹和app.vue同级
2. 组件以文件夹形式管理，内含vue文件、md文件、组件依赖的图片资源
3. 组件import的时候统一命名管理 
eg: VButton


### 五、vuex引入，模块拆分
1. vuex的主入口文件是store/index.js，vuex的模块化拆分在这里进行配置
2. main.js中进行vuex store的注册及引入
在每个模块内：

```
mutation_types.js   内定义常量
mutation            内定义同步方法改变state
action              内定义异步方法，commit mutation
getter              内对state进行取值
index               是模块的出口
```


### 六、引入axios及本地存储
1. axios、localstorge都在main.js中进行配置

### 七、API接口的模块化管理
*首先一定要搞清楚import from 和 import { } from之间的区别：*
1. 带花括号说明里面写的是一个一个的function，{ }里面是模块内导出的方法名
2. 不带花括号的说明里面是export default 这是整体导出的

### 八、页面滚动组件BS
1. 天坑！div ref="comBody" class="test"这个标签里的高度一定要用class来定义，千万不要用style="height:100%" ，这样会导致滑动下面多出一个页面高度的空白区域
2. import导入better-scroll
3. 挂载点，在最外层要有一个ref,且该挂载点要有一个明确的高度值，用于new BScroll时候的初始化
4. 挂载点内只能有一个根节点
5. 要在this.$nextTick内执行BS的初始化
6. new BScroll的时候一定要记得click:true，否则页面内的所有点击事件都将失效
7. 如果是axios请求数据，要在数据请求完之后的回调函数中初始化BS

### 九、路由拆分
1. 一级路由规划
2. 子路由规划









