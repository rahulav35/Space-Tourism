import React, { useContext } from "react";
import Header from "../../components/header/Header";
import Launch from "../../components/technologycomponents/launch/Launch";
import "./Technology.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { headerContext } from "../../components/header/HeaderContext";
import Drawer from "../../components/drawer/Drawer.js";

function Technology() {
  const { open, setOpen } = useContext(headerContext);
  return (
    <div className="technologydiv">
      <Header />

      <div className="numb">
        03
        <h1 className="spacelaunch">SPACE LAUNCH 101</h1>
      </div>

      <Carousel
        className="carouseltech"
        autoPlay
        showStatus={false}
        infiniteLoop
        showArrows={false}
        axis={window.innerWidth < 600 ? "horizontal" : "vertical"}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            // <div className="container">
            <span
              style={{
                border: "1px solid white",
                color: isSelected ? "red" : "white",

                position: "absolute",
                left: window.innerWidth > 600 ? 300 : `${(index + 1) * 22}%`,
                right: window.innerWidth < 600 && 0,
                margin: "auto",
                marginLeft: window.innerWidth < 600 && "3%",
                marginBottom: window.innerWidth < 600 && 20,

                top: window.innerWidth > 600 && (index + 0.5) * 65,
                height: 40,
                width: 40,
                borderRadius: "100%",

                marginTop: window.innerWidth > 600 ? -269 : -298,
                backgroundColor: isSelected ? "white" : "transparent",
                borderColor: isSelected ? "transparent" : "white",
                borderWidth: 1,
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={onClickHandler}
            >
              {index + 1}
            </span>
            // </div>
          );
        }}
      >
        <Launch index={0} />
        <Launch index={1} />
        <Launch index={2} />
      </Carousel>
      {open && <Drawer />}
    </div>
  );
}

export default Technology;
