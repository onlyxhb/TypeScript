const config = {
  mode: 'site',
  locales: [['zh-CN', '中文']],
  title: 'TypeScript手册',
  description: 'JavaScript 完全知识体系',
  base: '/typescript/',
  publicPath: '/typescript/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/javascript-guidebook-favicon.png',
  hash: true,
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
    previewLangs: ['jsx', 'tsx']
  }
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
