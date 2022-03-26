import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Blog from "./component/Blog/Blog";
import About from "./component/About/About";
// import Footer from "./component/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
