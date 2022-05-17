<template>
  <ul class="todoList">
    <li v-for="todo in todoList" :key="todo.id">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <span @click.stop="toggleCompleted(todo.id)" class="done" v-if="!todo.completed">✔️</span>
      <span @click="deleteTodo(todo.id)" class="remove">🗑️</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useStore } from "../store";
import { storeToRefs } from "pinia";

const store = useStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;
</script>

<style scoped>
.todoList {
  max-height: 250px;
  overflow-y: auto;
}

.todoList li {
  position: relative;
  list-style: none;
  height: 45px;
  line-height: 45px;
  margin-bottom: 8px;
  background: #f2f2f2;
  border-radius: 3px;
  padding: 0 15px;
  cursor: default;
  overflow: hidden;
}

.todoList li .completed {
    text-decoration: line-through;
}
.todoList li .remove {
  position: absolute;
  right: -45px;
  background: #e74c3c;
  width: 45px;
  text-align: center;
  color: #fff;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  transition: all 0.2s ease;
}
.todoList li .done {
  position: absolute;
  right: -45px;
  background: #8E49E8;
  width: 45px;
  text-align: center;
  color: #fff;
  border-radius: 3px 0 0 3px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.todoList li:hover .remove {
  right: 0px;
}

.todoList li:hover .done {
  right: 45px;
}
</style>