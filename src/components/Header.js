import React from "react";

import "../assets/css/Header.css";
import SearchBar from "./SearchBar";
import image1 from "../assets/img/img-1.png";
import image2 from "../assets/img/img-2.png";
import image3 from "../assets/img/img-3.png";

const Header = props => {
  return (
    <div className="flex-parent" id="header-container">
      <div id="brand-name">
        <h1>Recipie</h1>
        <p>A search engine to find recipes by their ingredients</p>
      </div>
      <div id="img-group">
        <img src={image1} alt="Veg Wrap" width="200" />
        <img src={image2} alt="Scrambled Eggs" width="200" />
        <img src={image3} alt="Biriyani" width="200" />
      </div>
      <SearchBar
        onSearchAdd={props.onSearchAdd}
        onSearchDelete={props.onSearchDelete}
        searchTerms={props.searchTerms}
        onSearchSubmit={props.onSearchSubmit}
      />
    </div>
  );
};

export default Header;
