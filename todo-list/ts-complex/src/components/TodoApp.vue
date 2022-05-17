<template>
  <div class="wrapper">
    <header>Todo App</header>
    <todo-form />
    <todo-list />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
</script>
<style scoped>
.wrapper{
  background: #fff;
  max-width: 400px;
  width: 100%;
  margin: 120px auto;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
}
.wrapper header{
  font-size: 30px;
  font-weight: 600;
}
</style>