---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "CnRepos"
  text: "人类高质量开源项目"
  tagline: 用爱开源，用心维护，拒绝垃圾
  actions:
    - theme: brand
      text: 加入我们
      link: /markdown-examples
    - theme: alt
      text: 关于
      link: /docs/about


---



<script setup>
import RepoList from './components/RepoList.vue' 
import { data } from './repos.data.ts'


</script>

<RepoList :repos="data" /> 
