<template>
    <div class="grid grid-cols-5 grid-rows-9 gap-4 text-slate-200">
      <div class="col-span-4 row-span-6">
        <img :src="news[0]?.urlToImage" alt="main-new-photo" class="w-full h-full object-cover rounded-lg">
      </div>
  
    <RouterLink :to="`/${category}/${news[1]?.title}`" class="row-span-2 col-start-5 flex flex-col justify-between cursor-pointer">
        <img :src="news[1]?.urlToImage" alt="second-new-photo" class="w-full h-full object-cover rounded-lg">
        <p class="mt-2 text-md font-semibold">{{ news[1]?.title }}</p>
    </RouterLink>

    <RouterLink :to="`/${category}/${news[2]?.title}`" class="row-span-2 col-start-5 row-start-3 flex flex-col justify-between cursor-pointer">
        <img :src="news[2]?.urlToImage" alt="third-new-photo" class="w-full h-full object-cover rounded-lg">
        <p class="mt-2 text-md font-semibold">{{ news[2]?.title }}</p>
    </RouterLink>

  
    <RouterLink :to="`/${category}/${news[3]?.title}`" class="row-span-2 col-start-5 row-start-5 flex flex-col justify-between cursor-pointer">
        <img :src="news[3]?.urlToImage" alt="fourth-new-photo" class="w-full h-full object-cover rounded-lg">
        <p class="mt-2 text-md font-semibold">{{ news[3]?.title }}</p>
    </RouterLink>

  
    <div class="col-span-4 row-start-7 text-center flex items-center justify-center">
        <h1 class="text-5xl font-bold">{{ news[0]?.title }}</h1>
    </div>
  
      <div class="col-span-4 col-start-1 row-start-8 text-center flex flex-col justify-around gap-6 items-center">
       <h3 class="text-xl"> {{ news[0]?.description }}</h3>
       <RouterLink :to="`${category}/${news[0]?.title}`" class="w-full"> 
            <ButtonComponent />
        </RouterLink>
    </div>
  

    <RouterLink :to="`/${category}/${news[4]?.title}`" class="row-span-2 col-start-5 row-start-7 flex flex-col justify-between cursor-pointer">
        <img :src="news[4]?.urlToImage" alt="fifth-new-photo" class="w-full h-full object-cover rounded-lg">
        <p class="mt-2 text-md font-semibold">{{ news[4]?.title }}</p>
    </RouterLink>
    
    </div>
</template>
  
<script>
import ButtonComponent from '@/components/Misc/ButtonComponent.vue'
import { RouterLink } from 'vue-router'

export default {
    name: 'FirstLandingContainer',
    components: {
        ButtonComponent,
        RouterLink
    },
    props: {
        news: {
            type: Array,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    }
}
</script>
