import { Route, Routes } from "react-router-dom";
import Navebar from "./compononts/Navebar/Navebar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact.jsx/Contact";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";





function App() {


  return (
    <div>
      {/* <Navebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes> */}

      {/* <Register/> */}
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App
