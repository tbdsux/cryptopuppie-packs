import { createContext, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";

const TodoContext = createContext({
  store: { todos: [] },
  dispatch: { addTodo: (v) => {} },
});

function TodoProvider(props) {
  const [store, setStore] = createStore({ todos: [] });

  const addTodo = (v) => {
    setStore((state) => ({
      todos: [v, ...state.todos],
    }));
  };

  return (
    <TodoContext.Provider value={{ store, dispatch: { addTodo } }}>
      {props.children}
    </TodoContext.Provider>
  );
}

const useTodos = () => useContext(TodoContext);

export default TodoProvider;
export { TodoContext, useTodos };
