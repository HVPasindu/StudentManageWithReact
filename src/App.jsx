import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";


import Students from "./pages/Students/Students";
import AddStudent from "./pages/AddStudent/AddStudent";
import EditStudent from "./pages/EditStudent/EditStudent";
import Contact from "./pages/Contact.jsx/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/students" element={<Students/>} />
      <Route path="/add-student" element={<AddStudent/>} />
      <Route path="/edit-student/:id" element={<EditStudent/>} />
    </Routes>
  );
}

export default App;