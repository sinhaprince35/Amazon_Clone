import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import MainComp from "./Components/Home/MainComp";
import Newnav from "./Components/Newnav/Newnav";

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <MainComp />
      <Footer />
    </>
  );
}

export default App;
