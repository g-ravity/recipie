import React, { Component } from "react";

import arrow from "../assets/img/arrow.png";
import "../assets/css/RecipeCard.css";
import Chip from "./Chip";

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullIngredientsList: this.props.ingredients.split(", "),
      halfIngredientsList: this.props.ingredients.split(", ").splice(0, 5),
      showfullIngredients: false
    };
  }

  changeIngredientList = () => {
    this.setState({
      showfullIngredients: this.state.showfullIngredients ? false : true
    });
  };

  renderIngredients = () => {
    const ingredientsList = this.state.showfullIngredients
      ? this.state.fullIngredientsList
      : this.state.halfIngredientsList;
    return ingredientsList.map((cur, index) => <Chip text={cur} key={index} />);
  };

  render() {
    const { image, title, recipeLink } = this.props;
    return (
      <div id="card-container">
        <div id="card-header" className="flex-parent">
          <p style={image ? { width: "80%" } : { width: "100%" }}>{title}</p>
          {image && <img src={image} alt={title} />}
        </div>
        <div id="card-content">
          <p id="header">INGREDIENTS</p>
          <div id="chip-group">
            {this.renderIngredients()}
            {this.state.fullIngredientsList.length !==
              this.state.halfIngredientsList.length && (
              <span id="footer" onClick={this.changeIngredientList}>
                {this.state.showfullIngredients
                  ? "show less"
                  : `and ${this.state.fullIngredientsList.length -
                      this.state.halfIngredientsList.length} more...`}
              </span>
            )}
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
  }
}

export default RecipeCard;
