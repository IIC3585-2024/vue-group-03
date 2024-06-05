<template>
    <div>
        <FirstLandingContainer :news="newsForFirstContainer" :category="randomCategories[0]" />
        <SeparatingLine />
        <SecondLandingContainer :news="newsForSecondContainer" :category="randomCategories[1]" />
        <SeparatingLine />
        <FirstLandingContainer :news="newsForThirdContainer" :category="randomCategories[2]" />
        <SeparatingLine />
        <SecondLandingContainer :news="newsForFourthContainer" :category="randomCategories[3]" />
        <SeparatingLine />
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useNewsStore } from '@/stores/news'
import { categories } from '@/api/category'
import { getRandomSubset } from '@/utils/getRandomSubset'
import FirstLandingContainer from '@/components/Containers/FirstLandingContainer.vue'
import SecondLandingContainer from '@/components/Containers/SecondLandingContainer.vue';
import SeparatingLine from '@/components/Misc/Separator.vue'

export default {
    name: 'LandingPage',
    components: {
        FirstLandingContainer,
        SecondLandingContainer,
        SeparatingLine,
    },
    setup() {
        const newsStore = useNewsStore()
        const randomCategories = ref([])
        const newsForFirstContainer = ref([])
        const newsForSecondContainer = ref([])
        const newsForThirdContainer = ref([])
        const newsForFourthContainer = ref([])

        async function loadNewsForCategory(category, count) {
            await newsStore.loadNews(category)
            return getRandomSubset(newsStore.newsByCategory[category], count)
        }

        onMounted(async () => {
            randomCategories.value = categories.sort(() => Math.random() - 0.5).slice(0, 4)
            newsForFirstContainer.value = await loadNewsForCategory(randomCategories.value[0], 5)
            newsForSecondContainer.value = await loadNewsForCategory(randomCategories.value[1], 3)
            newsForThirdContainer.value = await loadNewsForCategory(randomCategories.value[2], 5)
            newsForFourthContainer.value = await loadNewsForCategory(randomCategories.value[3], 3)
        })
        return {
            newsForFirstContainer,
            newsForSecondContainer,
            newsForThirdContainer,
            newsForFourthContainer,
            randomCategories,
        }
    },

}
</script>

