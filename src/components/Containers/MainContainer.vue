<template>
    <div class="flex flex-col min-h-screen">
      <main class="flex-grow m-auto mt-5 max-w-6xl px-3">
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainContainer'
  }
  </script>
  