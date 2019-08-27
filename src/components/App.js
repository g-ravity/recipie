import React, { Component } from "react";

import { BASE_URL, CORS_PROXY } from "../config";
import Header from "./Header";
import RecipeCard from "./RecipeCard";
import "../assets/css/App.css";
import { toTitleCase, checkSubArray } from "../utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: [],
      recipeList: []
    };
  }

  onSearchAdd = term => {
    term = toTitleCase(term);
    this.setState({ searchTerms: [...this.state.searchTerms, term] });
  };

  onSearchDelete = term => {
    const searchTerms = this.state.searchTerms.filter(cur => cur !== term);
    this.setState({ searchTerms });
  };

  onSearchSubmit = async () => {
    const URL = CORS_PROXY + BASE_URL + this.state.searchTerms.join(",");
    const results = await fetch(URL);
    const data = await results.json();
    this.setState({ recipeList: data.results });
  };

  renderRecipes = () => {
    return this.state.recipeList.map((cur, index) => {
      let ingredientsList = cur.ingredients.split(", ");
      ingredientsList = ingredientsList.map(cur => toTitleCase(cur));
      if (checkSubArray(this.state.searchTerms, ingredientsList))
        return (
          <RecipeCard
            title={cur.title}
            image={cur.thumbnail}
            recipeLink={cur.href}
            ingredients={ingredientsList}
            selectedIngredients={this.state.searchTerms}
            onSearchAdd={this.onSearchAdd}
            onSearchDelete={this.onSearchDelete}
            key={index}
          />
        );
      else return null;
    });
  };

  render() {
    return (
      <div>
        <Header
          onSearchAdd={this.onSearchAdd}
          onSearchDelete={this.onSearchDelete}
          searchTerms={this.state.searchTerms}
          onSearchSubmit={this.onSearchSubmit}
        />
        <div
          id="container"
          className="flex-parent"
          style={{ alignItems: "flex-start" }}
        >
          {this.renderRecipes()}
        </div>
      </div>
    );
  }
}

export default App;
