<template>
    <div class="flex justify-center items-center gap-2">
        <v-icon :name="icon"/>
        <input
        class="rounded-lg p-2 text-gray-500 focus:outline-none focus:ring-2 focus:border-transparent"
        type="text"
        placeholder="Search for news..."
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

 }

</script>