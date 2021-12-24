export interface ItemProps {
  title?: string;
  menu?: {}[];
}

export interface MenuType {
  mainMenu: boolean;
  setMainMenu: (mainMenu: boolean) => void;
  subMenu: boolean;
  setSubMenu: (mainMenu: boolean) => void;
  subSubMenu: boolean;
  setSubSubMenu: (mainMenu: boolean) => void;
  subSubSubMenu: boolean;
  setSubSubSubMenu: (mainMenu: boolean) => void;
}