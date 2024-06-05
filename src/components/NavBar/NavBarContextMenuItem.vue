<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBarContextMenuItem',
  components: {
    RouterLink
  }, 
  props: {
    icon: {
      type: String,
      default: 'home'
    }, 
    title: {
      type: String,
      default: 'OutdoorLife'
    },
    news: {
      type: Array,
      default: () => []
    },
    category: {
      type: String,
      default: '/'
    }
  }
}

</script>

<template>

    <div class="flex items-center border p-2 rounded-xl shadow-md gap-2 pl-4 pr-4">
      <RouterLink :to="`/category${category}`" class="flex items-center gap-2">
        <span class="font-bold"> {{ title }} </span>
        <v-icon class="text-2xl" :name="icon"/>
      </RouterLink>
    </div>
</template>