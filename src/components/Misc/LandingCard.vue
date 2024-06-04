<template>
    <div class="flex flex-col justify-between col-span-2 row-span-4 max-w-sm bg-white border border-gray-100 rounded-lg shadow-2xl dark:bg-card-bg dark:border-slate-950 p-5 ">
        <img class="w-full h-full object-cover rounded-lg" :src="image" alt="" />

        <div class="flex flex-col justify-start p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ author }}</p>
        </div>

        <RouterLink :to="path" class="flex justify-center"> 
            <ButtonComponent />
        </RouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import ButtonComponent from '@/components/Misc/ButtonComponent.vue'

export default {
    name: 'LandingCard',
    components: {
        RouterLink,
        ButtonComponent
    },
    props: {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        layout: {
            type: String,
            default: 'items-center'
        }
    }
}
</script>