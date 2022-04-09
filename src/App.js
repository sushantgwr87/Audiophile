import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;