import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import { Particles } from "./components/particles/Particles";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
       <div className="m-0 mx-auto" >
       <Navbar />
       </div>
        
        
      <div className="max-w-screen-xl mx-auto">
        
        <Banner />
        
        <Projects />
       
        <Resume />
        {/* <Testimonial /> */}
        
      
        <FooterBottom />
        
      </div>
     
    </div>
  );
}

export default App;
