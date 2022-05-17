type ToDoItem = {
  item: string;
  id: number;
  completed: boolean;
}

export type State = {
  todoList: ToDoItem[],
  id: number,
  showAlert: boolean
}

export const initialState: State = {
    todoList: [],
    id: 0,
    showAlert: false
}