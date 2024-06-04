<template>
    <div class="grid grid-cols-6 grid-rows-4 gap-4">
        <LandingCard v-for="(new_, index) in news" :key="index" :title="new_.title" :author="new_.author" :image="new_.urlToImage" :path="new_.title" />
    </div>
</template>

<script>
import LandingCard from '@/components/Misc/LandingCard.vue'

export default {
    name: 'SecondLandingContainer',
    components: {
        LandingCard
    },
    props: {
        news: {
            type: Array,
            required: true
        }
    },
}

</script>