import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { Lobby } from "./components/Lobby";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/lobby" element={<Lobby />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
