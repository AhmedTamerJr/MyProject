import React from "react"
import Hero from "./Components/Hero/Hero";
import MainBody from "./Components/MainBody/MainBody";
import NavBar from "./Components/NavBar/NavBar";
import Infos from "./Components/Infos/Infos";
import Selects from "./Components/Select/Selects";
import ImgCarousal from "./Components/ImgCarousel/ImgCarousal";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="container">
     <NavBar/>
     <Hero/>
     <MainBody/>
     <Infos/>
     <Selects/>
     <ImgCarousal/>
     <Footer/>
    </div>
  );
}

export default App;
