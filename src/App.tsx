import { useState, useRef, useEffect, useContext } from "react";
import data from './data.json';
import './App.css';
import MainMenuItem from "./components/MainMenuItem";
import { MenuContext } from "./MenuContext";

function App() {
  const { subMenu, subSubMenu, subSubSubMenu } = useContext(MenuContext);
  const [menuHeight, setMenuHeight] = useState<number | undefined>(undefined);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuHeight(menuRef.current?.firstElementChild?.clientHeight);
  }, []);

  return (
    <>
      <h1 className="header">
        <img src="./logo.svg" className="logo" alt="logo" />
        <span>slinky</span>
      </h1>
      <main ref={menuRef} className="main" style={{ height: menuHeight }}>
        {data && (
          <ul
            className="main-menu"
            style={{
              transform: subMenu
                ? "translateX(-100%)"
                : subSubMenu
                ? "translateX(-200%)"
                : subSubSubMenu
                ? "translateX(-300%)"
                : "",
            }}
          >
            {data.map((item, index) => (
              <MainMenuItem key={index} {...item} />
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default App;
