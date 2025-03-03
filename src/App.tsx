import { Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";

import "./App.css";
// import Layout from "./components/ui/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/ui/Header";
import ReactRedux from "./pages/ReactRedux";
import Signin from "./pages/Signin";
import { AuthProvider } from "../src/context/AuthContext";

const App: React.FC = () => {
  return (
    <Fragment>
      <Provider store={store}>
        {/* <Layout /> */}
        <AuthProvider>
        <Router>
          <Header /> {/* Optional: Navigation Component */}
          <Routes>
            <Route path="/Signin" element={<Signin />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="ReactRedux" element={<ReactRedux />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        </AuthProvider>
      </Provider>
    </Fragment>
  );
};

export default App;
