import { useState } from "react";
import MySkills from "./components/MySkills";
import DevApi from "./components/DevApi";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Prodcuts from "./components/Prodcuts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Prodcuts />
      <DevApi />
      <MySkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
