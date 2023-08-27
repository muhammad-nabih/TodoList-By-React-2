import { v4 as uuidv4 } from "uuid";

export default function todosReducer(currentTodos, { type, payload }) {
  switch (type) {
    case "added": {
      const newTodo = {
        id: uuidv4(),
        title: payload.newTitle,
        details: "",
        isCompleted: false,
      };
      // use another const to skip mutation
      const updatedTodos = [...currentTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "deleted": {
      const updatedTodos = currentTodos.filter((t) => {
        return t.id !== payload.dialogTodo.id;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "updated": {
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === payload.dialogTodo.id) {
          return {
            ...t,
            title: payload.dialogTodo.title,
            details: payload.dialogTodo.details,
          };
        } else {
          return t;
        }
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "getTodos": {
      const storageTodos = JSON.parse(localStorage.getItem("todos")) || [];
      return storageTodos;
    }
    case "switchToggleCompleted": {
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === payload.id) {
          const updateTodo = { ...t, isCompleted: !t.isCompleted };
          return updateTodo;
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    default: {
      throw new Error("what do think oƒ" + type);
    }
  }
}
