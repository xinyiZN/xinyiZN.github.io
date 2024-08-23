const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  // 给文档中的代码块添加 copy 能力
  defaultShowCopyCode: true,
  // 支持 latex
  latex: true,
  // 支持静态图片
  staticImage: true,
})

module.exports = withNextra()
