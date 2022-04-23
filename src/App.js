import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Home from "./pages/Home";
import ScrollToTop from "./component/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/earphones" element={<Earphones />} />

            {/* <Route component={NotFound} /> */}
          </Routes>
        </div>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;