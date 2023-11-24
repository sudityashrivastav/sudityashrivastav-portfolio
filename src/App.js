import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";
import ScrollToTop from "./utitls/scrollToTop";
import Skills from "./components/Skills/Skills";
import { Analytics } from '@vercel/analytics/react';
import Projects from "./components/Projects/Projects";
import ContactButton from "./components/ContactButton";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App h-screen w-full bg-bg_theme
    ">
      <div className=" bg-bg_theme w-full backdrop-blur-2xl px-2 sm:px-10 lg:px-[120px] ">
        <BrowserRouter>
          <Header />
          <MobileMenu />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Analytics />
          <ScrollToTop />
          <ContactButton />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
