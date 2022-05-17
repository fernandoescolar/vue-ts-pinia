import { State } from "./state";

type Actions = {
    addTodo(item: string): void,
    deleteTodo(itemID: number): void,
    toggleCompleted(idToFind: number): void,
    inputAlert(): Promise<void>
}

type ActionTree<A extends Record<string, (...args: any) => any>, S> = {
    [Key in keyof A]: (this: S, ...p: Parameters<A[Key]>) => ReturnType<A[Key]>
}

export const actions: ActionTree<Actions, State> = {
  addTodo(item: string) {
    this.todoList.push({ item, id: this.id++, completed: false })
  },
  deleteTodo(itemID: number) {
    this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID
    });
  },
  toggleCompleted(idToFind: number) {
    const todo = this.todoList.find((obj) => obj.id === idToFind)
    if (todo) {
      todo.completed = !todo.completed
    }
  },
  inputAlert() {
    return new Promise<void>((resolve) => {
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false
          resolve()
        }, 1000);
    })
  }
}