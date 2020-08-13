# :seven: :cow:小程序

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

项目的主体代码都放在 `./src` 中，相当于一般 `React` 项目中的根目录。其文件划分基本类似 `Portal React / www-2020 React` 项目，目前具体划分如下：

```shell
/
├── apis # 接口相关
├── components # 自定义组件
├── constants # 常量相关
├── hooks # 各种 hooks
├── pages # 小程序页面
├── stores
└── utils # 各种 tools
└── ... # 后续有需要再添加新的目录
```

- `apis` / `components` / `constants` / `hooks` / `stores` / `utils`

  类似 `Portal React / www-2020 React` 项目中的规范所定义的功能

- `pages`

  小程序中的页面文件夹，其中每一个文件夹都对应一个页面（需要在 `src/constants/route.ts` 文件的 `routes` 字段中声明）

  `app` 的配置在 `src/app.config.ts` 文件中进行，页面的单独配置在 `src/pages/xxx/index.config.ts` 文件中进行

### 开发 Tips

- 目前的代码框架只提供了一些基础的能力，后续有需要再慢慢进行扩展

- 不打算引入任何 `UI` 框架，所有的组件需要自己实现

- 基础组件，例如 `View, Button, Text...` 建议使用 `Remax One`，[参考文档](https://remaxjs.org/api/remax-one/components)

- ...

## 构建

```bash
# 选定要构建的平台，如 wechat，并执行构建
npm run build wechat
# or
yarn build wechat
```

使用小程序开发者工具打开项目下的 `dist/[target]` 目录（例如微信小程序，目录为 `dist/wechat`），上传代码即可
