import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { headerContext } from "../header/HeaderContext";
import "./Drawer.css";

function Drawer() {
  const { open, setOpen } = useContext(headerContext);
  const location = useLocation();
  console.log(location);

  return (
    <div className="drawerdiv">
      <div className="icondiv">
        <FaPlus
          color="white"
          size={35}
          className="icon"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>

      <div className="icondetails">
        <Link
          style={{
            borderRight: location.pathname == "/" && "5px solid white",
          }}
          className="linkdivs"
          to={"/"}
        >
          {" "}
          <h1
            onClick={() => {
              setOpen(!open);
            }}
            className="iconhome"
          >
            00 HOME
          </h1>
        </Link>
        <Link
          style={{
            borderRight:
              location.pathname == "/destination" && "5px solid white",
          }}
          className="linkdivs"
          to={"/destination"}
        >
          {" "}
          <h1
            onClick={() => {
              setOpen(!open);
            }}
            className="iconhome"
          >
            01 DESTINATION
          </h1>
        </Link>

        <Link
          style={{
            borderRight: location.pathname == "/crew" && "5px solid white",
          }}
          className="linkdivs"
          to={"/crew"}
        >
          {" "}
          <h1
            onClick={() => {
              setOpen(!open);
            }}
            className="iconhome"
          >
            02 CREW
          </h1>{" "}
        </Link>

        <Link
          style={{
            borderRight:
              location.pathname == "/technology" && "5px solid white",
          }}
          className="linkdivs"
          to={"/technology"}
        >
          {" "}
          <h1
            onClick={() => {
              setOpen(!open);
            }}
            className="iconhome"
          >
            03 TECHNOLOGY
          </h1>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
