import React from "react";
import Search from "../search/Search.tsx";
import {UI_TEXT} from "../../helpers/constants.ts";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="title">{UI_TEXT.VIRTUALIZED_MASONRY_GRID}</h1>
      <Search />
    </nav>
  );
};

export default Navbar;
