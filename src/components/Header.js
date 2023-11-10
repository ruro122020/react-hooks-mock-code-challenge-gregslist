import React, { useState } from "react";
import Search from "./Search";

function Header({ onSearchSubmit, setSort }) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit} setSort={setSort} />
    </header>
  );
}

export default Header;
