<template>
  <todo-app />
</template>

<script setup lang="ts">
import TodoApp from "./components/TodoApp.vue";
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

::selection{
  color: #ffff;
  background: rgb(142, 73, 232);
}

body{
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */
  padding: 10px;
  background: linear-gradient(to bottom, #68EACC 0%, #497BE8 100%);
}
</style>
