import React from "react";

function Header() {
  return (
    <header className="header">
      <span className="header__title">Joke Mate</span>
      <nav className="nav">
        <span className="nav__item--active">Random Joke</span>
      </nav>
    </header>
  );
}

export default Header;
