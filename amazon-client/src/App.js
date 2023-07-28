import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import MainComp from "./Components/Home/MainComp";
import Newnav from "./Components/Newnav/Newnav";
import Sign_in from "./Components/Signup_Signin/Sign_in";
import Sign_up from "./Components/Signup_Signin/Sign_up";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Routes>
        <Route path="/" element={<MainComp />} />
        <Route path="/login" element={<Sign_in />} />
        <Route path="/register" element={<Sign_up/> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
