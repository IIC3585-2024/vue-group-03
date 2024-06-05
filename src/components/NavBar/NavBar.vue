<template>
    <nav>
        <div class="flex flex-col items-center gap-5 md:flex-row">
            <ul class="flex items-center gap-4 p-2">
                <NavBarItemVue path="/contact" text="735k" icon="bi-facebook" />
                <NavBarItemVue path="/about" text="133k" icon="bi-instagram" />
                <NavBarItemVue path="/" text="54.1k" icon="bi-youtube" />
                <NavBarItemSearch icon="bi-search" />
            </ul>
            <div class="w-1/2">
                <NavBarItemTitle class="text-center" title="OutdoorLife" />
            </div>
        </div>
        <div class="mt-10 sm:grid sm:grid-cols-2 gap-2 lg:flex lg:flex-wrap sm:gap-4">
            <NavBarContextMenuItem v-for="(option, index) in menuContextData" :key="index" :icon="option.icon" :title="option.title" :news="news[options.title]" :path="`/category${option.path}`"/>
        </div>
    </nav>
</template>

<script>
import NavBarItemVue from './NavBarItem.vue'
import NavBarItemSearch from './NavBarItemSearch.vue';
import NavBarItemTitle from './NavBarItemTitle.vue';
import NavBarContextMenuItem from './NavBarContextMenuItem.vue';
import menuContextData from '@/docs/NavBar/MenuContextData'
import { onMounted, ref } from 'vue'
import { useNewsStore } from '@/stores/news'
import { getRandomSubset } from '@/utils/getRandomSubset'



export default {
    name: 'NavBar',
    components: {
        NavBarItemVue,
        NavBarItemSearch,
        NavBarItemTitle,
        NavBarContextMenuItem,
    },
    props: {
        icon: {
            type: String,
            default: 'home'
        }
    },
    setup() {
        const newsStore = useNewsStore()

        const newsForHunting = ref([])
        const newsForFishing = ref([])
        const newsForConservation = ref([])
        const newsForGuns = ref([])
        const newsForGear = ref([])
        const newsForSurvival = ref([])
        const amountOfNews = 3
        const news = {
            Hunting: newsForHunting,
            Fishing: newsForFishing,
            Conservation: newsForConservation,
            Guns: newsForGuns,
            Gear: newsForGear,
            Survival: newsForSurvival
        }

        async function loadNewsForCategory(category, count) {
            await newsStore.loadNews(category)
            return getRandomSubset(newsStore.newsByCategory[category], count)
        }

        onMounted(async () => {
            newsForHunting.value = await loadNewsForCategory('hunting', amountOfNews)
            newsForFishing.value = await loadNewsForCategory('fishing', amountOfNews)
            newsForConservation.value = await loadNewsForCategory('conservation', amountOfNews)
            newsForGuns.value = await loadNewsForCategory('guns', amountOfNews)
            newsForGear.value = await loadNewsForCategory('gear', amountOfNews)
            newsForSurvival.value = await loadNewsForCategory('survival', amountOfNews)
            console.log(news.hunting.value)
        })
        return {
            news,
            menuContextData
        }
    }
}
</script>