import "./App.css";
import Header from "./components/Header";
import CrochetScarf from "./features/yarn/CrochetScarf";
import { CROCHET } from './shared/CROCHET';
function App() {
  return (
    <div className="App">
      <Header />
      <CrochetScarf crochet={CROCHET[0]} />
    </div>
  );
}

export default App;
