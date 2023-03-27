import { BrowserRouter, Route, Routes } from "react-router-dom";
import Annie from "./components/Annie";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<Annie />} />
      
   <Route path="contact" element={<Contact />} />
   <Route path="signup" element={<Signup />} />
     <Route path="/login" element={<Login />} />

    </Routes>
    
  



    </>
  );
}

export default App;
