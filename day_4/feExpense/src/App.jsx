import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/LoginForm";

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
      </Routes>
    </>
  );
}

export default App;
