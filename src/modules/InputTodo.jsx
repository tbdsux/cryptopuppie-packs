import { useTodos } from "./Provider";

function InputTodo() {
  let inputTodo;

  const {
    dispatch: { addTodo },
  } = useTodos();

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="input-todo" className="mb-2 font-medium">
        Enter a TODO:
      </label>
      <div className="flex items-center">
        <input
          type="text"
          ref={inputTodo}
          name="input-todo"
          className="w-full border-2 rounded-lg mr-2 py-2 px-4 outline-none focus:border-rose-300 font-medium tracking-wide"
        />
        <button
          onClick={() => {
            addTodo(inputTodo.value);

            inputTodo.value = "";
          }}
          className="py-2 px-6 rounded-lg bg-rose-400 hover:bg-rose-500 text-white text-lg uppercase"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default InputTodo;
