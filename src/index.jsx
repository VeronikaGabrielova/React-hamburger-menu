import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const MenuItem = ({text, onSelect}) => {
  const handleClick = () => {
    onSelect(text)
  }
  return (
    <a href="#" className="menu-item" onClick={handleClick}>
      {text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(true);
  const [pageTitle, setPageTitle] = useState("Domů")

  const handleSelectItem = (page) => {
    setPageTitle(page);
    setMenuOpened(false);
  };

  return (
    <>
      <header>
        <div className="menu">
          <button
            onClick={() => setMenuOpened(!menuOpened)}
            className="menu__btn"
          ></button>

          {menuOpened ? (
            <div className="menu__items">
              <MenuItem text="Domů" onSelect={handleSelectItem} />
              <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
              <MenuItem text="Náš tým" onSelect={handleSelectItem} />
              <MenuItem text="Blog" onSelect={handleSelectItem}/>
              <MenuItem text="Kontakt"onSelect={handleSelectItem} />
            </div>
          ) : (
            <div className="menu--closed"></div>
          )}
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
