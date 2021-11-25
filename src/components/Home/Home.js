import React from "react";
import AllServices from "../AllServices/AllServices"
import footer from "../footer/Footer";
import SetMenu from "../SetMenu/SetMenu";
import Header from "./../Header/Header";
import Slider from "./../Slider/Slider";


const Home = () => {
  return (
    <div>
      
      <AllServices></AllServices>
      <Slider></Slider>
      
      <footer></footer>
      
    </div>
  );
};

export default Home;
