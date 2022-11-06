import React from "react";
import "./Person.css";
import profileimg from "../../../assets/crew/image-anousheh-ansari.png";
import datas from "../../../data.json";
import hurly from "../../../assets/crew/image-douglas-hurley.png";
import mark from "../../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../../assets/crew/image-victor-glover.png";
import ansari from "../../../assets/crew/image-anousheh-ansari.png";

function Person({ index }) {
  let image;
  switch (index) {
    case 0:
      image = hurly;
      break;
    case 1:
      image = mark;

      break;
    case 2:
      image = victor;

      break;
    case 3:
      image = ansari;
      break;

    default:
      image = hurly;
      break;
  }
  console.log(index);
  console.log(datas.crew);
  return (
    <div className="persondiv">
      <div className="imagediv">
        <img src={image} alt="" className="profilediv" />
      </div>
      <div className="ansari">
        <h1 className="flight">{datas.crew[index].role}</h1>
        <h2 className="anou">{datas.crew[index].name}</h2>
        <h3 className="iran">{datas.crew[index].bio}</h3>
      </div>
    </div>
  );
}

export default Person;
