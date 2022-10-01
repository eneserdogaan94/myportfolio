import { useState } from "react";
import MySkills from "./components/MySkills";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Introduction />
      <About/>
      <MySkills />
      <Contact />
      <Footer />
      <SocialLinks/>
    </div>
  );
}

export default App;
