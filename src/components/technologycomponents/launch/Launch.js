import React from "react";
import "./Launch.css";
import rocketpic from "../../../assets/technology/image-launch-vehicle-portrait.jpg";

function Launch() {
  return (
    <div className="launchdiv">
      <div className="launchfirstline">
        <h1 className="numb">
          03
          <h1 className="spacelaunch">SPACE LAUNCH 101</h1>
        </h1>
      </div>
      <div className="launchseconddiv">
        <div className="launchpicdiv">
          <img src={rocketpic} alt="" className="launchpic" />
        </div>
        <div className="writting">
          <h1 className="thetech">THE TECHNOLOGY..</h1>
          <h2 className="launchvehicle">LAUNCH VEHICLE</h2>
          <h3 className="carrier">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Launch;
