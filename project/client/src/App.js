import React from "react";
//import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/Carousel";
import SectionCards from "./components/SectionCards/SectionCards";
import SectionForm from "./components/SectionForm/SectionForm";
import SectionContent from "./components/SectionOne/SectionContent";
import Footer from "./components/Footer/Footer";
import "./stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      <Carousel />
      <SectionContent />
      <SectionCards />
      <SectionForm />
      <Footer />
    </div>
  );
}

export default App;
