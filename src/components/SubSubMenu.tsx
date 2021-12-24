import { useContext } from "react";
import { ItemProps } from "../interface";
import { MenuContext } from "../MenuContext";
import SubSubSubMenu from "./SubSubSubMenu";

const SubSubMenu = ({ title, menu }: ItemProps) => {
  const { subSubMenu, setSubSubMenu, subSubSubMenu, setSubSubSubMenu } =
    useContext(MenuContext);
  return (
    <li>
      <button
        type="button"
        className={`menu-item${menu ? " next" : ""}`}
        onClick={e => {
          if (menu) {
            setSubSubMenu(!subSubMenu);
            setSubSubSubMenu(!subSubSubMenu);
            e.currentTarget.nextElementSibling?.classList.remove("hidden");
            e.currentTarget.nextElementSibling?.classList.add("show");
          }
        }}
      >
        {title}
      </button>
      {subSubSubMenu && menu && (
        <ul className="sub-menu">
          <li>
            <button
              type="button"
              className="menu-item back"
              onClick={e => {
                setSubSubMenu(!subSubMenu);
                setSubSubSubMenu(!subSubSubMenu);
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
            <SubSubSubMenu key={index} {...item} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SubSubMenu;