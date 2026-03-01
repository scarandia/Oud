/* import Home from "./pages/Home"; */
/* import Home2 from "./pages/Home2"; */
import Home3 from "./pages/Home3";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CannonPage from "./pages/CannonPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  /* return <Home />; */
  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/cannon" element={<CannonPage />} />
      </Routes>
      <Navbar />
      <Footer />
      </BrowserRouter>
    </>
  );
  /* return <Home3 />; */
};

export default App;
