import classes from "./SideBar.module.css";
import { BsPersonCircle } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <div className={classes["logo"]}>
          <BsPersonCircle />
        </div>
        <div className={classes["name"]}>
          <span>Dragan Badnjar</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
