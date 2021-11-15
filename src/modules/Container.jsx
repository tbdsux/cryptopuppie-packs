import InputTodo from "./InputTodo";
import ListTodos from "./ListTodos";

function Container() {
  return (
    <div className="mt-8">
      <div className="w-3/4 mx-auto">
        <InputTodo />

        <ListTodos />
      </div>
    </div>
  );
}

export default Container;
