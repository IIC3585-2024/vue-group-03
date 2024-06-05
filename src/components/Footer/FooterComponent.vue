<template>
    <footer class="bg-white rounded-t-2xl shadow dark:bg-card-bg">
        <div class="w-full mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <NavBarItemTitle />
           
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li v-for="(category, index) in categories" :key="index" class="mr-4">
                        <RouterLink :to="`/category/${category}`" class="hover:text-gray-900 dark:hover:text-white">{{ category }}</RouterLink>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{new Date().getFullYear()}} OutdoorLife™. All Rights Reserved.</span>
            
        </div>
    </footer>
    
    
    
</template>

<script>
import NavBarItemTitle from '../NavBar/NavBarItemTitle.vue';
import { RouterLink } from 'vue-router'
import { categories } from '@/api/category'
export default {
    name: 'FooterComponent',
    components: {
        NavBarItemTitle,
        RouterLink,
    },
    setup() {
        return {
            categories
        }
    }
}
</script>