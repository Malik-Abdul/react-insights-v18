import { Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
// import Layout from "./components/ui/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/ui/Navbar"; // Optional if you have a navbar
import Header from "./components/ui/Header";
import ReactRedux from "./pages/ReactRedux";

const App: React.FC = () => {
  return (
    <Fragment>
      {/* <Layout /> */}
      <Router>
        <Header /> {/* Optional: Navigation Component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="ReactRedux" element={<ReactRedux />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
