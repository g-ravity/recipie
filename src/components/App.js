import React, { Component } from "react";

import { BASE_URL, CORS_PROXY } from "../config";
import Header from "./Header";
import RecipeCard from "./RecipeCard";
import "../assets/css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: [],
      recipeList: []
    };
  }

  onSearchAdd = term => {
    term = term[0].toUpperCase() + term.substring(1, term.length).toLowerCase();
    this.setState({ searchTerms: [...this.state.searchTerms, term] });
  };

  onSearchDelete = key => {
    const searchTerms = this.state.searchTerms.filter(
      (cur, index) => key !== index
    );
    this.setState({ searchTerms });
  };

  onSearchSubmit = async () => {
    const URL = CORS_PROXY + BASE_URL + this.state.searchTerms.join(",");
    const results = await fetch(URL);
    const data = await results.json();
    this.setState({ recipeList: data.results });
  };

  renderRecipes = () => {
    return this.state.recipeList.map((cur, index) => (
      <RecipeCard
        title={cur.title}
        image={cur.thumbnail}
        recipeLink={cur.href}
        ingredients={cur.ingredients}
        key={index}
      />
    ));
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
