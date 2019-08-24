import React from "react";

import img1 from "../assets/img/img-1.png";
import arrow from "../assets/img/arrow.png";
import Chip from "./Chip";
import "../assets/css/RecipeCard.css";

const RecipeCard = () => {
  return (
    <div id="card-container">
      <div id="card-header" className="flex-parent">
        <p>Roasted Chicken with smoked capsicum</p>
        <img src={img1} alt="Chicken" width="50" />
      </div>
      <div id="card-content">
        <p id="header">INGREDIENTS</p>
        <div id="chip-group">
          <Chip text="Capsicum" />
          <Chip text="Garlic" />
          <Chip text="Bacon" />
          <Chip text="Chicken" />
          <Chip text="Butter" />
          <span id="footer">and 3 more...</span>
        </div>
      </div>
      <div id="card-footer" className="flex-parent">
        <p>VIEW RECIPE</p>
        <img src={arrow} alt="Arrow Icon" width="30" />
      </div>
    </div>
  );
};

export default RecipeCard;
