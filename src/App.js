import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import SimonGame from "./projects/SimonGame/SimonGame.jsx";
import Notify from "./projects/Notify/Notify";
import Wpprojects from "./projects/WP-Projects/wp-projects";
import RandomUser from "./projects/RandomUser/RandomUser";
import ScrollToTop from "./functions/ScrollToTop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />{" "}
        {/* default redirect to Home */}
        <Route exact path="/" element={<Home />} />
        <Route path="simongame" element={<SimonGame />} />
        <Route path="notify" element={<Notify />} />
        <Route path="wordpress" element={<Wpprojects />} />
        <Route path="randomUser" element={<RandomUser />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
