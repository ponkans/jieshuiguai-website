import { defineConfig } from 'dumi';

export default defineConfig({
  title: '接水怪',
  mode: 'site',
  logo: '/images/logo.png',
  locales: [['zh-CN', '中文']],
  navs: {
    'zh-CN': [
      // null,
      {
        title: '⭐️ 文章分类汇总',
        path: '/article',
        // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
        children: [
          { title: 'nodejs', path: '/nodejs' },
          { title: 'react', path: '/react' },
        ],
      },
      {
        title: '联系我 / 公众号',
        path: 'https://github.com/ponkans/F2E#%E5%85%AC%E4%BC%97%E5%8F%B7',
      },
      {
        title: '掘金',
        path: 'https://juejin.cn/user/747323638163768/posts',
      },
      {
        title: 'bilibili',
        path: 'https://space.bilibili.com/442012293/dynamic',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/ponkans',
      },
      {
        title: '友情链接',
        path: '/link',
      },
    ],
  },
});
