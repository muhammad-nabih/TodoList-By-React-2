import { createContext, useReducer, useContext } from "react";
import todosReducer from "../../reducers/todosReducer";
export const ContextTodo = createContext([]);
export const ContextDispatch = createContext([]);

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  return (
    <>
      <ContextDispatch.Provider value={dispatch}>
        <ContextTodo.Provider value={todos}>
          {children}
        </ContextTodo.Provider>
      </ContextDispatch.Provider>
    </>
  );
};
export default TodosProvider;
export const useTodos = () => useContext(ContextTodo);
export const useDispatch = () => useContext(ContextDispatch);
