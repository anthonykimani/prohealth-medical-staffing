// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Career from "./pages/Career";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/careers" element={<Career />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
