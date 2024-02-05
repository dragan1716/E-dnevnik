import classes from "./HomePage.module.css";
import Navbar from "../Bars/Navbar";
import SideBar from "../Bars/SideBar";
import FilterBar from "../Bars/FilterBar";
import Timeline from "./Timeline";
import { useState } from "react";

const HomePage = () => {
  //const [] = useState(false);
  return (
    <div className={classes["container"]}>
      <div className={classes["main-wrapper"]}>
        <div className={classes["nav-bar"]}>
          <Navbar />
        </div>
        <div className={classes["side-bar"]}>
          <SideBar />
        </div>
        <div className={classes["filter-bar"]}>
          <FilterBar />
        </div>
        <div>
          <Timeline></Timeline>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
