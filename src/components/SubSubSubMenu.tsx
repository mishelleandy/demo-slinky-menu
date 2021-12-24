import { useContext } from "react";
import { ItemProps } from "../interface";
import { MenuContext } from "../MenuContext";

const SubSubSubMenu = ({ title, menu }: ItemProps) => {
  const { subSubSubMenu, setSubSubSubMenu } = useContext(MenuContext);
  return (
    <li>
      <button
        type="button"
        className={`menu-item`}
        onClick={e => {
          if (menu) {
            setSubSubSubMenu(!subSubSubMenu);
            e.currentTarget.nextElementSibling?.classList.remove("hidden");
            e.currentTarget.nextElementSibling?.classList.add("show");
          }
        }}
      >
        {title}
      </button>
      {subSubSubMenu && menu && (
        <ul className="sub-menu hidden">
          {menu.map((item: ItemProps, index) => (
            <li key={index}>
              <button type="button" className={`menu-item`}>
                {title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SubSubSubMenu;