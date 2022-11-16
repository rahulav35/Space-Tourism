import React, { useContext } from "react";
import Mars from "../../components/destinationcomponents/mars/Mars";
import Header from "../../components/header/Header";
import { headerContext } from "../../components/header/HeaderContext";
import "./Destination.css";
import Drawer from "../../components/drawer/Drawer.js";

function Destination() {
  const { open, setOpen } = useContext(headerContext);
  return (
    <div className="destinationdiv">
      <Header />
      <Mars />
      {open && <Drawer />}
    </div>
  );
}

export default Destination;
