<template>
    <div class="flex flex-col gap-5 mb-4">
      <h1 class="text-5xl font-bold text-orange-600">Latest news for {{ route.params.category }}</h1>
      <div v-if="news" class="grid grid-cols-4 lg:grid-cols-8 gap-5">
        <LandingCard v-for="(article, index) in news" :key="index" :title="article.title" :author="article.author" :image="article.urlToImage || 'https://via.assets.so/img.jpg?w=400&h=150&tc=white&bg=black&t='" :path="`/${route.params.category}/${article.title}`"/>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue'
  import { useNewsStore } from '@/stores/news'
  import { useRoute } from 'vue-router'
  import LandingCard from '@/components/Misc/LandingCard.vue';
  export default {
  name: 'CategoryView',
  components: {
    LandingCard,
  },
  setup() {
    const newsStore = useNewsStore()
    const route = useRoute()
    const news = ref([])

    watch(() => route.params.category, (newCategory) => {
      news.value = newsStore.newsByCategory[newCategory] || []
    }, { immediate: true }) 

    return {
      news,
      route,
    }
  }
}
</script>
  