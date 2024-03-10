import FilterBar from "../Bars/FilterBar";
import Navbar from "../Bars/Navbar";
import SideBar from "../Bars/SideBar";
import classes from "../Home/HomePage.module.css";

const Layout = ({ children }) => {
  return (
    <>
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
        <div className={classes["main-content"]}>{children}</div>
      </div>
    </>
  );
};
export default Layout;
