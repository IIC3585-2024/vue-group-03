<template>
  <div>
   
    <div v-if="loading">Loading...</div>
    <div v-else-if="article" class="flex flex-col mb-4">
      <img :src="article.urlToImage ||'https://via.assets.so/img.jpg?w=400&h=150&tc=white&bg=black&t='" class="object-cover rounded-lg border-slate-300" alt="Image not available">
      <h1 class="text-4xl font-bold text-center m-4">{{ article.title }}</h1>
      <p class="text-sm font-medium text-stone-400 text-center mb-4">By: {{ article.author }}</p>
      <h2 class="text-md mb-4">{{article.description}}</h2>
      <p class="text-sm">{{ cleanedContent }} 
        <a :href="article.url" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline"> continue reading</a>.
       </p>
       <div class="flex justify-center">
         <button class="flex justify-center gap-2 items-center bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 m-4 rounded w-1/4 text-center mt-8">
          <RouterLink :to="`/category/${route.params.category}`" >Back to {{route.params.category}} </RouterLink>
        </button>
       </div>
    </div>
    <div v-else>
      <p>Article not found.</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, watchEffect } from 'vue'
import { useNewsStore } from '@/stores/news'
import { useRoute } from 'vue-router'

export default {
  name: 'ArticleView',
  components: {
  },
  setup() {
    const newsStore = useNewsStore()
    const route = useRoute()
    const article = ref(null)
    const loading = ref(true)

    const category = computed(() => route.params.category)
    const articleTitle = computed(() => route.params.articleTitle)
    
    const findArticle = () => {
      const newsList = newsStore.newsByCategory[category.value] || []
      return newsList.find(article => article.title === articleTitle.value)
    }

    const cleanContent = (content) => {
      return content.replace(/\[\+\d+ chars\]$/, '')
    }

    const cleanedContent = computed(() => {
      if (article.value && article.value.content) {
        return cleanContent(article.value.content)
      }
      return ''
    })

    watchEffect(() => {
      loading.value = true
      article.value = findArticle()
      loading.value = false

      if (!article.value) {
        console.error(`Article not found: ${category.value}/${articleTitle.value}`)
      }
    })

    return {
      article,
      loading,
      route,
      cleanedContent,
    }
  }
}
</script>
