# 全局 Toast 组件

### ToastProps 说明

```ts
tip: string // 提示文案
icon?: 'loading' | 'success' | 'warning' | 'fail' | 'none' // icon 类型，默认为 'none'
duration?: number // 显示时间，若 duration <= 0 则 toast 不会自动销毁，默认为 1500ms
coverTopNav?: boolean // 是否遮罩顶部导航栏，默认为 false
className?: string // 自定义 class
```

### 如何调起全局 Toast

```tsx
import { View } from 'remax/one'

import { useToast } from '@/utils/toast'

function Foo() {
  const showToast = useToast()

  // 在需要的地方调用 showToast(options: ToastProps) 即可，如：
  return (
    <View
      onTap={() => {
        showToast({
          tip: '成功',
          icon: 'success'
        })
      }}
    >
      成功 Toast
    </View>
  )
}
```
