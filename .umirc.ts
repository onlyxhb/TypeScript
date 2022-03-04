import { defineConfig } from 'dumi'

export default defineConfig({
  mode: 'site',
  locales: [['zh-CN', '中文']],
  title: 'TypeScript手册',
  description: 'JavaScript 完全知识体系',
  base: '/typescript/',
  publicPath: '/typescript/',
  favicon: 'https://yun.duiba.com.cn/developer_new/images/new/icons/typescript.jpeg',
  logo: 'https://yun.duiba.com.cn/developer_new/images/new/icons/typescript.jpeg',
  styles: [`.markdown a.beian { color: #b0b1ba; }`, `.markdown a.beian svg { display: none; }`],
  hash: true,
  outputPath: 'docs-dist',
  exportStatic: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/onlyxhb/typescript',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  resolve: {
    includes: ['zh', 'src'],
    excludes: ['config', 'scripts'],
    previewLangs: []
  }
})
