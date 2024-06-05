<template>
    <div class="flex justify-center items-center gap-2">
        <v-icon :name="icon"/>
        <input
            class="rounded-lg p-2 text-gray-500 focus:outline-none focus:ring-2 focus:border-transparent"
            type="text"
            v-model="searchQuery"
            @input="handleInput"
            @keydown.enter="handleSubmit"
        >
    </div>
</template>

<script>
export default {
    name: 'NavBarItemSearch',
    props: {
        icon: {
            type: String,
            default: 'search'
        }
    },
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        handleInput(event) {
            // Este método se llama cada vez que el usuario escribe en el input
            this.$emit('update:searchQuery', event.target.value);
        },
        handleSubmit() {
            // Este método se llama cuando el usuario presiona Enter
            this.$router.push({ path: `/search/${this.searchQuery}` });
        }
    }
}
</script>