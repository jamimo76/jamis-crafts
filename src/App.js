import "./App.css";
import Header from "./components/Header";
import CrochetsList from "./features/yarn/CrochetsList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CrochetsList />
      <Footer />
    </div>
  );
}

export default App;
