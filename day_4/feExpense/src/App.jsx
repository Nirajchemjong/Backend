import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/LoginForm";
import Dashboard from "./pages/dashboard/Dashboard";
import { Register } from "./pages/register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
        {/* <Route path="/nav" element={< NavBar/>} /> */}
        <Route
          path='/register'
          element={<Register/>}
        />        
         <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
