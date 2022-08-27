import React from "react"
import Hero from "./Components/Hero/Hero";
import MainBody from "./Components/MainBody/MainBody";
import NavBar from "./Components/NavBar/NavBar";
import Infos from "./Components/Infos/Infos";

function App() {
  return (
    <div className="container">
     <NavBar/>
     <Hero/>
     <MainBody/>
     <Infos/>
    </div>
  );
}

export default App;
