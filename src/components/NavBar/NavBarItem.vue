<template>
    <li>
    <RouterLink :to="path">
        <div class="flex justify-center items-center gap-1">
            <v-icon :name="icon"/>
            <span class="font-bold text-xs">{{ text }}</span>
        </div>
    </RouterLink>
    </li>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'NavBarItem',
    props: {
        icon: {
            type: String,
            default: 'home'
        },
        path: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    components: {
        RouterLink
    }
}
</script>