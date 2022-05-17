<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
        <div class="inputField">
            <input type="text" placeholder="Add your new todo" v-model="todo">
            <button type="submit" class="active">➕</button>
        </div>
    </form>
    <div class="alert-div">
        <div v-show="store.showAlert" class="alert">
            Please type something...
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../store";
const store = useStore();

const todo = ref("");
const addItemAndClear = (item: string) => {
    if (item.length === 0) {
    store.inputAlert();
    return;
    }
    store.addTodo(item);
    todo.value = "";
}
</script>

<style scoped>
.inputField {
  margin: 20px 0;
  width: 100%;
  display: flex;
  height: 45px;
}

.inputField input {
  width: 85%;
  height: 100%;
  outline: none;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 17px;
  padding-left: 15px;
  transition: all 0.3s ease;
}

.inputField input:focus {
  border-color: #8E49E8;
}

.inputField button {
  width: 50px;
  height: 100%;
  border: none;
  color: #fff;
  margin-left: 5px;
  font-size: 21px;
  outline: none;
  background: #8E49E8;
  cursor: pointer;
  border-radius: 3px;
  opacity: 0.6;
  pointer-events: none;
  transition: all 0.3s ease;
}

.inputField button:hover {
  background: #721ce3;
}

.inputField button.active {
  opacity: 1;
  pointer-events: auto;
}

.alert-div {
  min-height: 25px;
}

.alert {
  color: #d1495b;
  font-size: 1em;
  font-weight: 600;
}
</style>