import classes from "./Navbar.module.css";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { SlBadge } from "react-icons/sl";
import { BsPersonArmsUp } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("vremenska-linija");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    setIsDropdownVisible(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={classes["top-bar"]}>
      <div className={classes["logo"]}>
        <div className={classes["just-logo"]}>
          <FaBook />
        </div>
        <span>moj e-Dnevnik</span>
      </div>
      <div className={classes["top-navigation"]}>
        <ul className={classes["top-navigation-list"]}>
          <li
            className={`${classes["top-nav-item"]} ${
              activeNavItem === "vremenska-linija" ? classes["active"] : ""
            }`}
          >
            <Link
              className={classes["link"]}
              onClick={() => handleNavItemClick("vremenska-linija")}
            >
              <span>Vremenska linija</span>
              <RxCalendar />
            </Link>
          </li>
          <li
            className={`${classes["top-nav-item"]} ${
              activeNavItem === "ocjene" ? classes["active"] : ""
            }`}
          >
            <Link
              className={classes["link"]}
              onClick={() => handleNavItemClick("ocjene")}
            >
              <span>Ocjene</span>
              <FaGraduationCap />
            </Link>
          </li>

          <li
            className={`${classes["top-nav-item"]} ${
              activeNavItem === "aktivnosti" ? classes["active"] : ""
            }`}
          >
            <Link
              className={classes["link"]}
              onClick={() => handleNavItemClick("aktivnosti")}
            >
              <span>Aktivnosti</span>
              <FaRegChartBar />
            </Link>
          </li>

          <li
            className={`${classes["top-nav-item"]} ${
              activeNavItem === "izostanci" ? classes["active"] : ""
            }`}
          >
            <Link
              className={classes["link"]}
              onClick={() => handleNavItemClick("izostanci")}
            >
              <span>Izostanci</span>
              <TfiAlarmClock />
            </Link>
          </li>

          <li
            className={`${classes["top-nav-item"]} ${
              activeNavItem === "pohvale-i-mjere" ? classes["active"] : ""
            }`}
          >
            <Link
              className={classes["link"]}
              onClick={() => handleNavItemClick("pohvale-i-mjere")}
            >
              <span>Pohvale i mjere</span>
              <SlBadge />
            </Link>
          </li>

          <li
            className={`${classes["top-nav-item"]} ${
              activeNavItem === "vladanje" ? classes["active"] : ""
            }`}
          >
            <Link
              className={classes["link"]}
              onClick={() => handleNavItemClick("vladanje")}
            >
              <span>Vladanje</span>
              <BsPersonArmsUp />
            </Link>
          </li>

          <li
            className={`${classes["top-nav-item"]} ${
              activeNavItem === "svi-predmeti" ? classes["active"] : ""
            }`}
          >
            <Link
              className={classes["link"]}
              onClick={() => handleNavItemClick("svi-predmeti")}
            >
              <span>Svi predmeti</span>
              <FaTableList />
            </Link>
          </li>

          <li
            className={`${classes["top-nav-item"]} ${
              isDropdownVisible ? classes["active"] : ""
            } `}
          >
            <Link className={classes["link"]} onClick={handleDropdownClick}>
              <span>Ime i prezime</span>
              <IoSettingsOutline />
            </Link>
            {isDropdownVisible && (
              <ul>
                <li>Odjava</li>
                <li>asdf</li>
                <li>promjena lozinke</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
