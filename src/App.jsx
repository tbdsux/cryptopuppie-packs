import Header from "./components/Header";
import Container from "./modules/Container";

function App() {
  return (
    <div className="w-5/6 mx-auto min-h-screen">
      <div className="w-full">
        <Header />

        <Container />
      </div>
    </div>
  );
}

export default App;
