## 常见问题

### `my is not defined` 抛错

参考这个 [官方 issues](https://github.com/remaxjs/remax/issues/1394) 和 [commit](https://github.com/remaxjs/remax/commit/9d1f33342b43df734ebed83cb12e30607372a1df)

官方把支付宝 `API` 从微信端移除了

也就是说如果代码的编译目标平台为 `wechat`，那么编译过后的代码将不会包含支付宝 `API` 相关定义

如果你的代码中类似下面的实现

```ts
// some-folder/index.ts
import * as ali from 'remax/ali'
import * as wechat from 'remax/wechat'

function someFunc() {
  if (isAli) {
    // 支付宝相关的实现
    ali.xxx
  }

  // 微信相关的实现
  wechat.xxx
}
```

那么在编译完成后就会出现 `my is not defined` 的抛错

建议改成

```ts
// 其他地方引用方式不变

// some-folder/index.ts
import * as wechat from 'remax/wechat'

function someFunc() {
  // 微信相关的实现
  wechat.xxx
}

// some-folder/index.ali.ts
import * as ali from 'remax/ali'

function someFunc() {
  // 支付宝相关的实现
  ali.xxx
}
```
