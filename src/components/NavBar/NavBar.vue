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
            <NavBarContextMenuItem v-for="option in menuContextOptions" :key="option.id" :icon="option.icon" :title="option.title" :options="option.options" :path="`/category${option.path}`"/>
        </div>
    </nav>
</template>

<script>
import NavBarItemVue from './NavBarItem.vue'
import NavBarItemSearch from './NavBarItemSearch.vue';
import NavBarItemTitle from './NavBarItemTitle.vue';
import NavBarContextMenuItem from './NavBarContextMenuItem.vue';
import menuContextOptions from '@/docs/NavBar/MenuContextOptions.js'


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
    data() {
        return {
            menuContextOptions
        };
    }
}
</script>