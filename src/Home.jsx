import HeroSection from "./sections/HeroSection.jsx";
import FeaturedProjects from "./sections/FeaturedProjects.jsx";
import About from "./sections/About.jsx";

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <About />
    </div>
  );
}

export default Home;