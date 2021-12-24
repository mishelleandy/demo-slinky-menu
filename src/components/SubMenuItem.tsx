import { useContext } from "react";
import { ItemProps } from "../interface";
import { MenuContext } from "../MenuContext";
import SubSubMenu from "./SubSubMenu";

const SubMenuItem = ({ title, menu }: ItemProps) => {
  const { subMenu, setSubMenu, subSubMenu, setSubSubMenu } =
    useContext(MenuContext);
  return (
    <li>
      <button
        type="button"
        className={`menu-item${menu ? " next" : ""}`}
        onClick={e => {
          if (menu) {
            setSubMenu(!subMenu);
            setSubSubMenu(!subSubMenu);
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
                setSubMenu(!subMenu);
                setSubSubMenu(!subSubMenu);
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
            <SubSubMenu key={index} {...item} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SubMenuItem;