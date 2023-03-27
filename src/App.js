import { BrowserRouter, Route, Routes } from "react-router-dom";
import Annie from "./components/Annie";
import Login from "./components/Login";

function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<Annie />} />
      
   
    <Route path="/login" element={<Login />} />

    </Routes>
    
  



    </>
  );
}

export default App;
