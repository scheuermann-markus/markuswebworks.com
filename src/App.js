import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Home from "./Home";
import SimonGame from "./projects/SimonGame/SimonGame.jsx";
import Notify from "./projects/Notify/Notify";
import Wpprojects from "./projects/WP-Projects/wp-projects";
import ScrollToTop from "./functions/ScrollToTop";
import OldtimerSearch from "./projects/OldtimerSearch/indexOS";

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
        <Route path="oldtimer" element={<OldtimerSearch />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
