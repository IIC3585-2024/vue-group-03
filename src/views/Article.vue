<template>
    <div>
      <h1>Article: {{ shortTitle }}</h1>
      <p>Category: {{ category }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      category: {
        type: String,
        required: true,
      },
      shortTitle: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  