import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import classes from "./DropdownMenu.module.css";
import { IoSettingsOutline } from "react-icons/io5";

export function DropdownMenu() {
  return (
    <Menu>
      <MenuHandler>
        <Button className={classes["btn"]}>
          <div className={classes["name"]}>Dragan Badnjar</div>
          <div className={classes["icon"]}>
            <IoSettingsOutline />
          </div>
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Promjena lozinke</MenuItem>
        <MenuItem>Odjava</MenuItem>
      </MenuList>
    </Menu>
  );
}
