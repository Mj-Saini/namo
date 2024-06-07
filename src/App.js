import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/common/Header";
import Hero from "./components/Hero";
import YourExperince from "./components/YourExperince";
import Footer from "./components/common/Footer";
import UniqueSelling from "./components/UniqueSelling";
import OurService from "./components/OurService";
import WeChoose from "./components/WeChoose";
import OurClients from "./components/OurClients";
import OurBlogs from "./components/OurBlogs";
import ContactUs from "./components/ContactUs";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <Hero />
      <UniqueSelling />
      <OurService />
      <WeChoose />
      <OurClients />
      <OurBlogs />
      <ContactUs />
      <YourExperince />
      <Footer />
    </>
  );
}

export default App;
