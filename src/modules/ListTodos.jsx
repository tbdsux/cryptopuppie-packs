import { For } from "solid-js";
import { useTodos } from "./Provider";

function ListTodos() {
  const { store } = useTodos();

  return (
    <div className="mt-6">
      <For each={store.todos}>
        {(t) => {
          return (
            <div className="bg-rose-100 py-2 px-4 rounded-lg my-2 tracking-wide font-medium flex items-center justify-between">
              {t}

              <button className="text-rose-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          );
        }}
      </For>
    </div>
  );
}

export default ListTodos;
