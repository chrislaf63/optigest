
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import MainPage from "./MainPage";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    </Router>

  );
}


export default App;
