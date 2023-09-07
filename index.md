---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "CnRepos"
  text: "用心开源"
  tagline: 高质量开源项目集中营
  actions:
    - theme: brand
      text: 加入我们
      link: /markdown-examples
    - theme: alt
      text: Github
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---



<script setup>
import RepoList from './components/RepoList.vue' 
import { data } from './repos.data.ts'


</script>

<RepoList :repos="data" /> 
