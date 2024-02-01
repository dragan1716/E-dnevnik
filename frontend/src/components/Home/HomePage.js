import classes from "./HomePage.module.css";
import Navbar from "../Bars/Navbar";
import SideBar from "../Bars/SideBar";
import FilterBar from "../Bars/FilterBar";
import Card from "../Card/Card";
import Timeline from "./Timeline";

const HomePage = () => {
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
        {/* <div className={classes["main-content"]}> */}
        {/* <div className={classes["wrapper"]}>
            <div className={classes["date"]}>
              <div>01. 01. 2001</div>
            </div>
            <div className={classes["card"]}>
              <Card />
            </div>
          </div> */}
        {/* <div className={classes["wrapper"]}>
            <div className={classes["date"]}>
              <div>01. 01. 2001</div>
            </div>
            <div className={classes["card"]}>
              <Card />
            </div>
          </div> */}
        {/* <div className={classes["wrapper"]}> */}
        {/* <div className={classes["date"]}>
              <div>01. 01. 2001</div>
            </div> */}
        {/* <div className={classes["card"]}>
              <Card />
            </div> */}
        {/* </div> */}
        {/* </div> */}
        <div>
          <Timeline></Timeline>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
