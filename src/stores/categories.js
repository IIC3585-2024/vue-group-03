import { defineStore } from 'pinia'
import { categories } from '@/api/category'

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories,
    }),
})