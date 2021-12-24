import { useContext } from "react";
import { ItemProps } from "../interface";
import { MenuContext } from "../MenuContext";
import SubMenuItem from "./SubMenuItem";

const MainMenuItem = ({ title, menu }: ItemProps) => {
  const { mainMenu, setMainMenu, subMenu, setSubMenu } =
    useContext(MenuContext);
  return (
    <li>
      <button
        type="button"
        className={`menu-item${menu ? " next" : ""}`}
        onClick={e => {
          if (menu) {
            setMainMenu(!mainMenu);
            setSubMenu(!subMenu);
            e.currentTarget.nextElementSibling?.classList.remove("hidden");
            e.currentTarget.nextElementSibling?.classList.add("show");
          }
        }}
      >
        {title}
      </button>
      {menu && (
        <ul className="sub-menu hidden">
          <li>
            <button
              type="button"
              className="menu-item back"
              onClick={e => {
                setMainMenu(!mainMenu);
                setSubMenu(!subMenu);
                e.currentTarget.parentElement?.parentElement?.classList.remove(
                  "show"
                );
                e.currentTarget.parentElement?.parentElement?.classList.add(
                  "hidden"
                );
              }}
            />
          </li>
          {menu.map((item, index) => (
            <SubMenuItem key={index} {...item} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MainMenuItem;