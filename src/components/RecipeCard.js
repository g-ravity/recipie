import React from "react";

import arrow from "../assets/img/arrow.png";
import "../assets/css/RecipeCard.css";

const RecipeCard = ({ title, image, children, recipeLink }) => {
  return (
    <div id="card-container">
      <div id="card-header" className="flex-parent">
        <p style={image ? { width: "80%" } : { width: "100%" }}>{title}</p>
        {image && <img src={image} alt={title} />}
      </div>
      <div id="card-content">
        <p id="header">INGREDIENTS</p>
        <div id="chip-group">
          {children}
          <span id="footer">and 3 more...</span>
        </div>
      </div>
      <a href={recipeLink} target="blank">
        <div id="card-footer" className="flex-parent">
          <p>VIEW RECIPE</p>
          <img src={arrow} alt="Arrow Icon" width="30" />
        </div>
      </a>
    </div>
  );
};

export default RecipeCard;
