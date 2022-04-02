import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;