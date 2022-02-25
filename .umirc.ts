import { defineConfig } from 'dumi'

export default defineConfig({
  mode: 'site',
  locales: [['zh-CN', '中文']],
  title: 'TypeScript手册',
  description: 'JavaScript 完全知识体系',
  base: '/typescript/',
  publicPath: '/typescript/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/javascript-guidebook-favicon.png',
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
