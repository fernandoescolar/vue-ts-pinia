import { defineStore } from "pinia";
import { initialState } from './state'
import { actions } from './actions'

export const useStore = defineStore('todoList', {
    state: () => initialState,
    actions
})
