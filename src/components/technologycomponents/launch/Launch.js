import React from "react";
import "./Launch.css";
import rocketpic from "../../../assets/technology/image-launch-vehicle-portrait.jpg";
import datas from "../../../data.json";
import launch from "../../../assets/technology/image-launch-vehicle-landscape.jpg";
import space from "../../../assets/technology/image-space-capsule-landscape.jpg";
import spaceport from "../../../assets/technology/image-spaceport-landscape.jpg";

function Launch({ index }) {
  function Getimage(index) {
    switch (index) {
      case 0:
        console.log("launch");
        return launch;
      case 1:
        console.log("space");
        return space;
      case 2:
        console.log("spaceport");
        return spaceport;

      default:
        return launch;
    }
  }

  // console.log(index);
  // console.log(datas.technology);

  let imageoftech;
  switch (index) {
    case 0:
      imageoftech = launch;

      break;
    case 1:
      imageoftech = space;
      break;
    case 2:
      imageoftech = spaceport;
    default:
      imageoftech = launch;
      break;
  }

  return (
    <div className="launchdiv">
      <div className="launchseconddiv">
        <div className="launchpicdiv">
          <img src={Getimage(index)} alt="" className="launchpic" />
        </div>
        <div className="writting">
          <h1 className="thetech">THE TECHNOLOGY..</h1>
          <h2 className="launchvehicle">{datas.technology[index].name}</h2>
          <h3 className="carrier">{datas.technology[index].description}</h3>
        </div>
      </div>
    </div>
  );
}

export default Launch;
