<template>
    <div>
        <FirstLandingContainer />
        <SeparatingLine />
        <FirstLandingContainer />
        <SeparatingLine />
        <FirstLandingContainer />
        <SeparatingLine />
    </div>
</template>

<script>
import FirstLandingContainer from '@/components/Containers/FirstLandingContainer.vue'
import SeparatingLine from '@/components/Misc/Separator.vue'
export default {
    name: 'LandingPage',
    components: {
        FirstLandingContainer,
        SeparatingLine
    }
}
</script>

