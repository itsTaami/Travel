import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CssBaseline } from "@mui/material";
import AuthPage from "./pages/Auth";

function App() {
  return (
    <div className="App">
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
