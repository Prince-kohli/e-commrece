import Data from "./Data";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./About";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Data />}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
