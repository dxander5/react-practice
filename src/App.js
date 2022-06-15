import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Home2 from './pages/Home2.js';
import Submit from "./pages/Submit";
import Radio from "./pages/Radio";
import Form from "./pages/Form";
import State from "./pages/State";
function App() {
  return (
    //npm i react-router-dom
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/submit" element={<Submit />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/radio" element={<Radio />} />
        <Route exact path="/state" element={<State />} />

      </Routes>
    </Router>
  );
}
export default App;
