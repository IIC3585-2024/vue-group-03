<script setup>
import { RouterView } from 'vue-router'
import MainContainer from './components/Containers/MainContainer.vue'
import NavBar from './components/NavBar/NavBar.vue'
import FooterComponent from './components/Footer/FooterComponent.vue'
import SeparatingLine from './components/Misc/Separator.vue'

</script>

<template>
  <MainContainer>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <SeparatingLine />
    <main class="flex-grow">
      <RouterView />
    </main>
  </div>
</MainContainer>
<FooterComponent />
</template>

