import React, { useContext } from "react";
import Drawer from "../../components/drawer/Drawer";
import Header from "../../components/header/Header";
import { headerContext } from "../../components/header/HeaderContext";
import Task from "../../components/task/Task";
import "./Home.css";

function Home() {
  const { open, setOpen } = useContext(headerContext);

  return (
    <div className="maindiv">
      <Header />
      <Task />
      {open && <Drawer />}
    </div>
  );
}

export default Home;
