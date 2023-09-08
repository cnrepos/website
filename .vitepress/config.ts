import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CnRepos",
  base: '/website',
  description: "用爱开源",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '精选开源', link: '/repos' },
      { text: '开发实践', link: '/practices/index' },
      { text: '文章', link: '/articles/index' } 
    ],

    sidebar:  [
      { 
        text: '', 
        link: '/org/about',
        items: [
              { text: '关于我们', link: '/org/about' },
              { text: '加入我们', link: '/org/join' },
              { text: '任务发布', link: '/org/tasks' },
              { text: '联系方式', link: '/org/contact' }
        ]               
      },
      { 
        text: '开源项目', 
        link: '/repos' 
      },
      { 
        text: '开发实践', 
        link: '#' ,
        items: [
              { text: '开发工具库', link: '/practices/create-lib' },
              { text: '开发Vue组件库', link: '/practices/create-vue-lib' },
              { text: '开发React组件库', link: '/practices/create-react-lib' },       
            ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cnrepos/website' }
    ]
  }
})
