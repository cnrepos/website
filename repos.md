# 开源项目

以下是我们在`GitHub`和`Gitee`上的开源项目，欢迎`Star`和`Fork`。


<script setup>
import RepoList from './components/RepoList.vue' 
import { data } from './repos.data.ts'


</script>

<RepoList :repos="data" :only-one="true" /> 
