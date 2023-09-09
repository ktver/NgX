import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/NgX/",
  title: "NgX NaiveProxy GUI",
  description: "NaiveProxy GUI",
  srcDir:"src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用示例', link: '/examples' },
      { text: '更新日志', link: '/changelog' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '使用示例', link: '/examples' },
          { text: '更新日志', link: '/changelog' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/topoge/NgX' }
    ]
  }
})
