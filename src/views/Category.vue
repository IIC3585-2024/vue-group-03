<template>
    <div>
      <h1>Category: {{ category }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      category: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  