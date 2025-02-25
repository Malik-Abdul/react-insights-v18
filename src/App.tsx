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
import Sigin from "./pages/Sigin";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Fragment>
      <Provider store={store}>
        {/* <Layout /> */}
        <Router>
          <Header /> {/* Optional: Navigation Component */}
          <Routes>
            <Route path="/Sigin" element={<Sigin />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="ReactRedux" element={<ReactRedux />} />
            </Route>

            <Route path="*" element={<ProtectedRoute />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </Provider>
    </Fragment>
  );
};

export default App;
