import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CssBaseline, Modal } from "@mui/material";
import AuthPage from "./pages/Auth";
import "./App.css";
import Second from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<ThirdPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
