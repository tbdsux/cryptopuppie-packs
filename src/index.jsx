import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import TodoProvider from "./modules/Provider";

render(
  () => (
    <TodoProvider>
      <App />
    </TodoProvider>
  ),
  document.getElementById("root")
);
