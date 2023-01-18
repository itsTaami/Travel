import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CssBaseline, Modal } from "@mui/material";
import AuthPage from "./pages/Auth";
import BasicModal from "./pages/Modal";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BasicModal/>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
