import Header from "./components/Header";
import logo from "./logo.svg";
import Container from "./modules/Container";
import TodoProvider from "./modules/Provider";

function App() {
  return (
    <div className="w-2/3 mx-auto min-h-screen flex items-center justify-center">
      <div className="w-full">
        <Header />

        <Container />
      </div>
    </div>
  );
}

export default App;
