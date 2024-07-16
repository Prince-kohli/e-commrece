import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { productData } from "./Context";
import AddItems from "./AddItems";

function App() {
  return (
    <div className="App">
      <productData.Provider value={productData}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addCart" element={<AddItems />} />
          </Routes>
        </BrowserRouter>
      </productData.Provider>
    </div>
  );
}

export default App;
