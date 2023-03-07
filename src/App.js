import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Login from "./page/Login";
import Navbar from "./page/Navbar";
import Products from "./page/Products";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path="/home" />
            <Route element={<Products />} path="/products" />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
