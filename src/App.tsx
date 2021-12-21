import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import logo from './logo.svg';
import data from './data.json';
import './App.css';

type PropsType = {
  children?: React.ReactNode;
  goToMenu?: string;
  back?: boolean;
};

function App() {
  return (
    <>
      <h1 className="header">
        <img src={logo} className="logo" alt="logo" />
        <span>slinky</span>
      </h1>
      <MainMenu />
    </>
  );
}

function MainMenu() {
  const [activeMenu, setActiveMenu] = useState<string>("main");
  const [back, setBack] = useState<boolean>(false);
  const [menuHeight, setMenuHeight] = useState<number | undefined>(undefined);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuHeight(menuRef.current?.firstElementChild?.clientHeight);
  }, []);

  function calcHeight(el: HTMLElement) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function SubMenu({ children, goToMenu, back }: PropsType) {
    return (
      <li>
        <button
          type="button"
          className={`menu-item${goToMenu ? " next" : ""}${back ? " back" : ""}`}
          onClick={() => {
            goToMenu && setActiveMenu(goToMenu);
            setBack(true);
          }}
        >
          {children}
        </button>
      </li>
    );
  }

  return (
    <div ref={menuRef} className="menu-wrapper" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={300}
        classNames="menu-slideRight"
        unmountOnExit
        onEnter={calcHeight}
      >
        <ul className="menu">
          {data?.map((d, index) => (
            <SubMenu key={index} goToMenu={d.menu && d.title} back={false}>
              {d.title}
            </SubMenu>
          ))}
        </ul>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "artists"}
        timeout={300}
        classNames={`${back ? "menu-slideRight" : "menu-slideLeft"}`}
        unmountOnExit
        onEnter={calcHeight}
      >
        <ul className="menu">
          <SubMenu goToMenu="main" back={back}></SubMenu>
          {data
            ?.find((d) => d.title === "artists")
            ?.menu?.map((m, index) => (
              <SubMenu key={index} goToMenu={m.menu && m.title} back={false}>
                {m.title}
              </SubMenu>
            ))}
        </ul>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "aerosmith"}
        timeout={300}
        classNames={`${back ? "menu-slideRight" : "menu-slideLeft"}`}
        unmountOnExit
        onEnter={calcHeight}
      >
        <ul className="menu">
          <SubMenu goToMenu="artists" back={back}></SubMenu>
          {data
            ?.find((d) => d.title === "artists")
            ?.menu?.find((m) => m.title === "aerosmith")
            ?.menu?.map((m, index) => (
              <SubMenu key={index} goToMenu={m.menu && m.title} back={false}>
                {m.title}
              </SubMenu>
            ))}
        </ul>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "get your wings"}
        timeout={300}
        classNames={`${back ? "menu-slideRight" : "menu-slideLeft"}`}
        unmountOnExit
        onEnter={calcHeight}
      >
        <ul className="menu">
          <SubMenu goToMenu="aerosmith" back={back}></SubMenu>
          {data
            ?.find((d) => d.title === "artists")
            ?.menu?.find((m) => m.title === "aerosmith")
            ?.menu?.find((m) => m.title === "get your wings")
            ?.menu?.map((m, index) => (
              <SubMenu key={index} back={false}>
                {m.title}
              </SubMenu>
            ))}
        </ul>
      </CSSTransition>
    </div>
  );

}

export default App;
