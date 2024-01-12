import classes from "./HomePage.module.css";
import Navbar from "../Bars/Navbar";
import SideBar from "../Bars/SideBar";
import FilterBar from "../Bars/FilterBar";
const HomePage = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["main-wrapper"]}>
        <div className={classes["nav-bar"]}>
          <Navbar></Navbar>
        </div>
        <div className={classes["side-bar"]}>
          <SideBar></SideBar>
        </div>
        <div className={classes["filter-bar"]}>
          <FilterBar></FilterBar>
        </div>
        <div className={classes["main-content"]}></div>
      </div>
    </div>
  );
};

export default HomePage;
