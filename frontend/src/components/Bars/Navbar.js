import classes from "./Navbar.module.css";
import { FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa";
// import { TfiAlarmClock } from "react-icons/tfi";
// import { SlBadge } from "react-icons/sl";
// import { BsPersonArmsUp } from "react-icons/bs";
import { FaTableList } from "react-icons/fa6";
import { useState } from "react";
import { DropdownMenu } from "../Menu/DropdownMenu";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const navLinksStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#7b280c" : "",
    };
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div
      className={`${classes["top-bar"]} ${
        navbarVisible ? "" : classes["hidden"]
      }`}
    >
      <div className={classes["logo"]}>
        <div className={classes["just-logo"]}>
          <FaBook />
        </div>
        <span>moj e-Dnevnik</span>
      </div>
      <div className={classes["top-navigation"]}>
        <button
          className={classes["menu-button"]}
          onClick={() => {
            toggleMenu();
          }}
        >
          {showMenu ? <VscChromeClose /> : <IoMenu />}
        </button>
        <ul
          className={`${classes["top-navigation-list"]} ${
            showMenu ? classes["show"] : ""
          }`}
        >
          <li className={`${classes["top-nav-item"]}`}>
            <NavLink
              to="/"
              className={classes["link"]}
              style={navLinksStyles}
              onClick={() => {
                closeMenu();
              }}
            >
              <span className={classes["name"]}>Vremenska linija</span>
              <RxCalendar />
            </NavLink>
          </li>
          <li className={`${classes["top-nav-item"]}`}>
            <NavLink
              to="/grades"
              className={classes["link"]}
              style={navLinksStyles}
            >
              <span className={classes["name"]}>Ocjene</span>
              <FaGraduationCap />
            </NavLink>
          </li>
          <li className={`${classes["top-nav-item"]}`}>
            <NavLink
              to="/activities"
              className={classes["link"]}
              style={navLinksStyles}
            >
              <span className={classes["name"]}>Aktivnosti</span>
              <FaRegChartBar />
            </NavLink>
          </li>
          {/* <li className={`${classes["top-nav-item"]}`}>
            <NavLink
              to="izostanci"
              className={classes["link"]}
              style={navLinksStyles}
            >
              <span>Izostanci</span>
              <TfiAlarmClock />
            </NavLink>
          </li> */}
          {/* <li className={`${classes["top-nav-item"]}`}>
            <NavLink
              to="/pohvale"
              className={classes["link"]}
              style={navLinksStyles}
            >
              <span>Pohvale i mjere</span>
              <SlBadge />
            </NavLink>
          </li> */}
          {/* <li className={`${classes["top-nav-item"]}`}>
            <NavLink
              to="/vladanje"
              className={classes["link"]}
              style={navLinksStyles}
            >
              <span>Vladanje</span>
              <BsPersonArmsUp />
            </NavLink>
          </li> */}
          <li className={`${classes["top-nav-item"]}`}>
            <NavLink
              to="/courses"
              className={classes["link"]}
              style={navLinksStyles}
            >
              <span className={classes["name"]}>Svi predmeti</span>
              <FaTableList />
            </NavLink>
          </li>
          <li>
            <DropdownMenu className={classes["dropdown"]}></DropdownMenu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
