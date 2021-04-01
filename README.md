# Vulcan

![Vulcan](./vulcan.jpg "Live long and prosper")

```bash
Vulcan: 瓦肯星、火神星、祝融星
《星际迷航》中 Mr.Spock 的出生星球
瓦肯人以信仰严谨的逻辑和推理闻名
在进行瓦肯举手礼的时候通常还伴随着一句话：Live long and prosper（生生不息，繁荣昌盛）
```

基于 [Remax](https://github.com/remaxjs/remax) 开发的跨平台小程序

目前只有微信（`wechat`）版本，后续再添加其他版本

## 文档

[Remax 开发文档](https://remaxjs.org/guide/quick-start)

[Remax One 文档](https://remaxjs.org/api/remax-one/components)

[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework)

## Getting Start

安装依赖

**注意：Remax 要求 Node.js 版本大于等于 12**

```bash
npm install
# or
yarn
```

调试项目

```bash
# 选定要进行开发的平台，如 wechat，并调试
npm run dev wechat
# or
yarn dev wechat
```

使用小程序开发者工具打开项目下的 `dist/[target]` 目录。例如微信小程序，目录为 `dist/wechat`

**注意：微信和字节跳动小程序需要在 IDE 中打开「不校验合法域名」**，[参考文档](https://remaxjs.org/guide/basic/devtools)


## 开发

### 测试数据 Mock

`Mock` 测试数据使用 [rap2-delos](https://github.com/thx/rap2-delos)，开箱即用[地址](http://rap2.taobao.org)

和 `easy-mock` 类似（但是比较稳定），新建项目、定义 `api` 地址、定义请求参数、定义返回数据格式等，例如 [测试 api](http://rap2.taobao.org:38080/app/mock/263489/api/user)

### 目录结构

`./public` 目录存放一些静态资源，该目录下的所有文件会被自动复制到 `dist` 目录下

可以将 `原生页面, tabBar 中配置的图片` 等等全局资源放在这个目录下

项目的主体代码都放在 `./src` 中，相当于一般 `React` 项目中的根目录。其文件划分基本类似 `Portal React / www-2020 React` 项目，目前具体划分如下：

```shell
./src
  ├── apis # 接口相关
  ├── components # 自定义业务相关组件
  ├── ui # 自定义 UI 相关组件
  ├── constants # 常量相关
  ├── pages # 小程序页面
  ├── stores
  ├── utils # 各种 tools
  ├── runtime # 统一各平台基础组件、API 等（可拓展）
  └── ... # 后续有需要再添加新的目录
```

- `apis` / `components` / `constants` / `stores` / `utils`

  类似 `Portal React / www-2020 React` 项目中的规范所定义的功能

- `pages`

  小程序中的页面文件夹，其中每一个文件夹都对应一个页面（需要在 `src/constants/route.ts` 文件的 `routes` 字段中声明）

  `app` 的配置在 `src/app.config.ts` 文件中进行，页面的单独配置在 `src/pages/xxx/index.config.ts` 文件中进行

### 开发 Tips

- 目前的代码框架只提供了一些基础的能力，后续有需要再慢慢进行扩展

- 不打算引入任何 `UI` 框架，所有的组件需要自己实现

- 基础组件，例如 `View, Button, Text...` 建议使用 `Remax One`，[参考文档](https://remaxjs.org/api/remax-one/components)

- ...

### 使用分包

以微信小程序为例，[参考](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html)

需要注意的是目录结构梳理、打包原则和引用原则

需要修改 `constants/route.ts` 文件中的 `urlMap`，将不同分包所包含页面的 `url` 拆分开进行定义，后续在编译和打包的过程中就是根据所拆分的 `urlMap` 将不同的页面打到不同的包下面

接着修改 `utils/config.ts` 文件中的 `getWechatAppConfig` 方法，在里面新增 `subpackages` 配置项（和 `pages` 配置项同级。这里需要注意的是虽然微信小程序官方文档中说也支持 `subPackages` 的写法，但是 `remax` 仅支持 `subpackages` 写法）

`subpackages` 是一个数组，每一项为分包的配置项，用于定义分包的 `root, name, pages`

当配置了分包的 `root` 之后，分包页面的 `url` 定义就不用再将 `root` 作为前缀拼接到 `url` 前面，否则会出现嵌套的情况，例如下面的情况


```
例如某一个分包页面的期望 url 为 pages/ui-pages/cell/index

该分包的 root 定义为 pages/ui-pages

则需要修改该页面的 url 为 cell/index 并写入分包的 pages 配置项中

这样才可以通过 /pages/ui-pages/cell/index 路由正确定位到页面

如果不修改该页面的 url（仍保持 pages/ui-pages/cell/index），则打包后页面的路由会变成 /pages/ui-pages/pages/ui-pages/cell/index，即出现所谓的嵌套情况
```

## 构建

```bash
# 选定要构建的平台，如 wechat，并执行构建
npm run build wechat
# or
yarn build wechat

# 将静态资源上传至指定账号的指定 bucket，以减小本地代码包体积
# 并删除本地的静态资源文件 && 文件夹
# 以 wechat 平台为例
node deploy.js ${TARGET} ${AK} ${SK} ${BUCKET}
# ${TARGET}: 编译目标平台
# ${AK}: 账号 ak
# ${SK}: 账号 sk
# ${BUCKET}: 目标 bucket 名称
```

使用小程序开发者工具打开项目下的 `dist/[target]` 目录（例如微信小程序，目录为 `dist/wechat`），上传代码即可

## 常见问题

参考 [Issues](https://github.com/war408705279/vulcan/issues)
