import React, { useEffect, useState } from "react";
import "./Mars.css";
import marspic from "../../../assets/destination/image-mars.png";
import datas from "../../../data.json";
import moon from "../../../assets/destination/image-moon.png";
import mars from "../../../assets/destination/image-mars.png";
import europa from "../../../assets/destination/image-europa.png";
import titan from "../../../assets/destination/image-titan.png";
function Mars() {
  const [index, setIndex] = useState(0);

  function Images() {
    if (index === 0) {
      return moon;
    } else if (index === 1) {
      return mars;
    } else if (index === 2) {
      return europa;
    } else {
      return titan;
    }
  }

  return (
    <div className="marsdiv">
      <div className="firstline">
        <h1 className="num">
          01
          <h1 className="pick">PICK YOUR DESTINATION</h1>
        </h1>
      </div>
      <div className="picdiv">
        <img className="pic" src={Images()} alt="" />
        <div className="planetname">
          <h1 className="planet" onClick={() => setIndex(0)}>
            Moon
          </h1>
          <h1 className="planet" onClick={() => setIndex(1)}>
            Mars
          </h1>
          <h1 className="planet" onClick={() => setIndex(2)}>
            Europa
          </h1>
          <h1 className="planet" onClick={() => setIndex(3)}>
            Titan
          </h1>
        </div>
      </div>
      <div className="detaildiv">
        <h1 className="marss">{datas.destinations[index].name}</h1>
        <h2 className="dont"> {datas.destinations[index].description}</h2>
      </div>
      <div className="line2"></div>
      <div className="lastdiv">
        <h1 className="dis">AVG,DISTANCE</h1>
        <h2 className="km">{datas.destinations[index].distance}</h2>
      </div>
    </div>
  );
}

export default Mars;
