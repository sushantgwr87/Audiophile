import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ScrollToTop from "./component/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <div className="container">
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/product/:category/:id" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;