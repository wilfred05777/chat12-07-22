// https://www.youtube.com/watch?v=k4mjF4sPITE&list=PLj-4DlPRT48nfYgDK00oTjlDF4O0ZZyG8&index=36

// https://github.com/safak/youtube2022/tree/react-chat

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
