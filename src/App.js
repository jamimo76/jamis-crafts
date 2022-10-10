import "./App.css";
import Header from "./components/Header";
import CrochetsList from "./features/yarn/CrochetsList";

function App() {
  return (
    <div className="App">
      <Header />
      <CrochetsList />
    </div>
  );
}

export default App;
