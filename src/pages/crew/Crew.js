import React, { useContext, useEffect } from "react";
import Person from "../../components/crewcomponents/person/Person";
import Header from "../../components/header/Header";
import "./Crew.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { headerContext } from "../../components/header/HeaderContext";
import Drawer from "../../components/drawer/Drawer.js";

function Crew() {
  const { open } = useContext(headerContext);

  return (
    <div className="crewdiv">
      <Header />

      <div className="numbers">
        02
        <h1 className="meetyour">MEET YOUR CREW</h1>
      </div>
      <Carousel
        className="carouselclass"
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
      >
        <Person index={0} />

        <Person index={1} />
        <Person index={2} />
        <Person index={3} />
      </Carousel>
      {open && <Drawer />}
    </div>
  );
}

export default Crew;
