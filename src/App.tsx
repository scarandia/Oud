import Home3 from "./pages/Home3";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CannonPage from "./pages/CannonPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/cannon" element={<CannonPage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
