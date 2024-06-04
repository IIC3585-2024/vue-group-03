<template>
    <div class="grid grid-cols-7 grid-rows-7 gap-4">
      <div class="col-span-7">{{ console.log(category) }}</div>
      <LandingCard
        v-for="(new_, index) in news"
        :key="index"
        :title="new_.title"
        :author="new_.author"
        :image="new_.urlToImage"
        :path="new_.title"
        :class="getClass(index)"
      />
    </div>
  </template>
  
  <script>
  import LandingCard from '@/components/Misc/LandingCard.vue'
  
  export default {
    name: 'ThirdLandingContainer',
    components: {
      LandingCard
    },
    props: {
      category: {
        type: String,
        required: true
      },
      news: {
        type: Array,
        required: true
      }
    },
    methods: {
      getClass(index) {
        const classes = [
          'col-span-3 row-span-6 row-start-2',
          'col-span-2 row-span-3 col-start-4 row-start-2',
          'col-span-2 row-span-3 col-start-6 row-start-2',
          'col-span-2 row-span-3 col-start-4 row-start-5',
          'col-span-2 row-span-3 col-start-6 row-start-5'
        ]
        return classes[index]
      }
    }
  }
  </script>
  

