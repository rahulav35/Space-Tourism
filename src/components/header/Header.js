import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { headerContext } from "./HeaderContext";

const Header = () => {
  const { open, setOpen } = useContext(headerContext);
  console.log(open);
  return (
    <div className="headerdiv">
      <img className="logo" src={logo} alt="" />
      <div className="linediv"></div>
      <div className="detailsdiv">
        <Link to={"/"} className="numberdiv">
          <h1 className="number">
            00
            <span className="name">Home</span>
          </h1>
        </Link>
        <Link to={"/destination"} className="numberdiv">
          <h1 className="number">
            01
            <h1 className="name">DESTINATION</h1>
          </h1>
        </Link>

        <Link to={"/crew"} className="numberdiv">
          <h1 className="number">
            02
            <h1 className="name">CREW</h1>
          </h1>
        </Link>

        <Link to={"/technology"} className="numberdiv">
          <h1 className="number">
            03
            <h1 className="name">TECHNOLOGY</h1>
          </h1>
        </Link>
      </div>
      <FaBars
        color="white"
        size={35}
        className="menubar"
        onClick={() => {
          setOpen(!open);
        }}
      />
    </div>
  );
};

export default Header;
