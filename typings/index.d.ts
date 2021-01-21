declare module '*.icon.svg' {
  const exports: string
  export default exports
}

declare module '*.svg' {
  const exports: string
  export default exports
}

declare module '*.png' {
  const exports: string
  export default exports
}

declare module '*.jpg' {
  const exports: string
  export default exports
}

declare module '*.jpeg' {
  const exports: string
  export default exports
}

declare module '*.gif' {
  const exports: string
  export default exports
}

declare module '*.less' {
  const cssModuleExport: {
    [className: string]: string
  }

  export = cssModuleExport
}

declare namespace AliMiniprogram {
  // 仿照 WechatMiniprogram
  // 将 my（支付宝）命名成 AliMiniprogram
  export = my
}
