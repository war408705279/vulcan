# runtime

一些组件是以微信小程序 / 支付宝小程序 / xxx 提供的组件为基础，外面包一层得到的

根据 `remax` 提供的能力，可以用不同的文件名后缀区分不同平台在编译或运行时（根据 `dev || run` 命令后面跟的平台变量）暴露出来的组件，[参考](https://remaxjs.org/guide/one#%E4%BD%BF%E7%94%A8%E6%96%87%E4%BB%B6%E5%90%8D%E5%90%8E%E7%BC%80%E5%8C%BA%E5%88%86%E4%B8%8D%E5%90%8C%E5%B9%B3%E5%8F%B0%E4%BB%A3%E7%A0%81)

### 如何暴露统一的 component

以 `checkbox` 组件为例，目录结构应该为

```shell
./src/runtime
  ├── checkbox # 基础组件
  ├      ├── index.tsx # 微信小程序 checkbox
  ├      ├── index.ali.tsx # 支付宝小程序 checkbox
  ├      └── ... # 其他平台 checkbox
  └── index.ts # 对外暴露统一的 checkbox 组件
```

**注：这里默认 `index.tsx` 对应的微信小程序的组件，支付宝小程序使用 `index.ali.tsx` 的命名方式命名**
