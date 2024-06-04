<template>
    <div>
        <FirstLandingContainer :news="newsForFirstContainer" />
        <SeparatingLine />
        <SecondLandingContainer :news="newsForSecondContainer" />
        <SeparatingLine />
        <ThirdLandingContainerVue :news="newsForThirdContainer" />
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useNewsStore } from '@/stores/news'
import { categories } from '@/api/category'
import { getRandomSubset } from '@/utils/getRandomSubset'
import FirstLandingContainer from '@/components/Containers/FirstLandingContainer.vue'
import SecondLandingContainer from '@/components/Containers/SecondLandingContainer.vue';
import ThirdLandingContainerVue from '@/components/Containers/ThirdLandingContainer.vue';
import SeparatingLine from '@/components/Misc/Separator.vue'

export default {
    name: 'LandingPage',
    components: {
        FirstLandingContainer,
        SecondLandingContainer,
        ThirdLandingContainerVue,
        SeparatingLine,
    },
    setup() {
        const newsStore = useNewsStore()
        const randomCategories = ref([])
        const newsForFirstContainer = ref([])
        const newsForSecondContainer = ref([])
        const newsForThirdContainer = ref([])

        async function loadNewsForCategory(category, count) {
            await newsStore.loadNews(category)
            return getRandomSubset(newsStore.newsByCategory[category], count)
        }

        onMounted(async () => {
            randomCategories.value = categories.sort(() => Math.random() - 0.5).slice(0, 4)
            newsForFirstContainer.value = await loadNewsForCategory(randomCategories.value[0], 5)
            newsForSecondContainer.value = await loadNewsForCategory(randomCategories.value[1], 3)
            newsForThirdContainer.value = await loadNewsForCategory(randomCategories.value[2], 5)
        })
        return {
            newsForFirstContainer,
            newsForSecondContainer,
            newsForThirdContainer,
        }
    },

}
</script>

