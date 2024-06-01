<script setup>
import { RouterView } from 'vue-router'
import MainContainer from './components/Containers/MainContainer.vue'
import NavBar from './components/NavBar/NavBar.vue'
import SeparatingLine from './components/Misc/Separator.vue'

</script>

<template>
  <MainContainer>
    <NavBar/>
    <SeparatingLine />
    <RouterView />
  </MainContainer>
</template>

