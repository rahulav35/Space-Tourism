import React from "react";
import Mars from "../../components/destinationcomponents/mars/Mars";
import Header from "../../components/header/Header";
import "./Destination.css";

function Destination() {
  return (
    <div className="destinationdiv">
      <Header />
      <Mars />
    </div>
  );
}

export default Destination;
