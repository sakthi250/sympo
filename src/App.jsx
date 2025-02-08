import "./App.css";
import Header from "./components/Home/Header";
import Home from "./components/Home";
import Events from "./components/Event/Event";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/Contact";
import New from "./components/new/New";

const App = () => (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
    {/* <Home /> */}
  </>
);
export default App;
