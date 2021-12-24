import { createContext, useMemo, useState } from "react";
import { MenuType } from "./interface";

export const MenuContext = createContext<MenuType>({
  mainMenu: false,
  setMainMenu: () => {},
  subMenu: false,
  setSubMenu: () => {},
  subSubMenu: false,
  setSubSubMenu: () => {},
  subSubSubMenu: false,
  setSubSubSubMenu: () => {},
});

const MenuContextProvider = (props: React.PropsWithChildren<{}>) => {
  const [mainMenu, setMainMenu] = useState<boolean>(true);
  const [subMenu, setSubMenu] = useState<boolean>(false);
  const [subSubMenu, setSubSubMenu] = useState<boolean>(false);
  const [subSubSubMenu, setSubSubSubMenu] = useState<boolean>(false);
  const value = useMemo(
    () => ({
      mainMenu,
      setMainMenu,
      subMenu,
      setSubMenu,
      subSubMenu,
      setSubSubMenu,
      subSubSubMenu,
      setSubSubSubMenu,
    }),
    [mainMenu, subMenu, subSubMenu, subSubSubMenu]
  );
  return (
    <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>
  );
};

export default MenuContextProvider;