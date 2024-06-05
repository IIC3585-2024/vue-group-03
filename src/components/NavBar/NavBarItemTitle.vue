<template>
    <div class="flex justify-center items-center">
        <RouterLink to="/">
            <img src="https://www.outdoorlife.com/wp-content/uploads/2023/11/outdoor-life-logo-1-1-1.svg" alt="Outdoor Logo" class="sm:object-cover h-20">
        </RouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    name: 'NavBarItemTitle',
    components: {
        RouterLink
    }
}
</script>