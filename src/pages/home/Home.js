import React from "react";
import Header from "../../components/header/Header";
import Task from "../../components/task/Task";
import "./Home.css";

function Home() {
  return (
    <div className="maindiv">
      <Header />
      <Task />
    </div>
  );
}

export default Home;
