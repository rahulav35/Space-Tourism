import React from "react";
import Person from "../../components/crewcomponents/person/Person";
import Header from "../../components/header/Header";
import "./Crew.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Crew() {
  return (
    <div className="crewdiv">
      <Header />
      <Carousel autoPlay infiniteLoop ariaLabel="100%">
        <Person index={0} />

        <Person index={1} />
        <Person index={2} />
        <Person index={3} />
      </Carousel>
    </div>
  );
}

export default Crew;
