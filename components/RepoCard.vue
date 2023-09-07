
<template>
    <div class="VPFeature repocard">
        <h2 class="title">{{ repo.name }}</h2>        
        {{ repoInfo.description }}
        <div>stars: {{ repoInfo.stargazers_count }}</div>        
        <div>forks: {{ repoInfo.forks }}</div>          
    </div>
</template>

<script setup lang="ts">
import { Repo } from './types';

const props = defineProps<{
    repo: Repo
}>()
</script>
<script lang="ts">
export default { 
    data() {
        return {
            repoInfo: {
                stargazers_count: 0,
                forks: 0,
                description: '',
            }
        }
    },
    mounted() {
        const repoUrl = `https://api.github.com/repos/${this.repo.author}/${this.repo.repo}`;
        // fetch(cardUrl).then(response => {
        //     this.cardhtml = response.data;
        // });
        fetch(repoUrl).then(response=>{
            response.json().then(data=>{
                console.log("data=",data )
                Object.assign(this.repoInfo,data)
            }) 
        })
    }
}
</script>

<style scoped>
.repocard{
    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: border-color 0.25s, background-color 0.25s;
    padding: 24px;
}

.repocard > .title{
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
}

</style>