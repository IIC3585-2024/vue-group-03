import { defineStore } from 'pinia'
import { fetchNews } from '@/api/news'

export const useNewsStore = defineStore('news', {
    state: () => ({
        newsByCategory: {},
        lastFetched: {},
    }),
    actions: {
        async loadNews(category) {
            const now = new Date().getTime();
            if (this.newsByCategory[category] && this.lastFetched[category] && now - this.lastFetched[category] < 24 * 60 * 60 * 1000) {
                console.log('Using cached news for category:', category)
                return;
            }
            try {
                const news = await fetchNews(category);
                this.newsByCategory[category] = news.articles;
                this.lastFetched[category] = now; 
                console.log('Fetched and cached news for category:', category)
            } catch (error) {
                console.error(
                    `Failed to fetch news for category ${category}: ${error.message}`
                )
            }
        }
    }, 
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'newsByCategory',
                storage: localStorage,
                paths: ['newsByCategory', 'lastFetched'],
            }
        ]
    }
});