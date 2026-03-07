import Home3 from "./pages/Home3";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CannonPage from "./pages/CannonPage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ContactSection from "./components/ContactSection";
import ScrollToTop from "./components/ScrollToTop";
import ProductPage from "./pages/ProductPage";
import CannonProductPage from "./pages/CannonProductPage";

function Layout() {
  const location = useLocation();

  const isProductPage = location.pathname.startsWith("/product");

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cannon" element={<CannonPage />} />
        <Route path="/cannon/:id" element={<CannonProductPage />} />
      </Routes>

      {!isProductPage && (
        <>
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;