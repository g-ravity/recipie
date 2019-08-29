import React, { Component } from "react";
import { animateScroll as scroll, Events } from "react-scroll";
import CSSTransition from "react-transition-group/CSSTransition";

import { BASE_URL, CORS_PROXY } from "../config";
import Header from "./Header";
import RecipeCard from "./RecipeCard";
import Loader from "./Loader";
import "../assets/css/App.css";
import { toTitleCase, checkSubArray } from "../utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: [],
      recipeList: [],
      isWaiting: false,
      isLanding: true
    };
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  onSearchAdd = term => {
    term = toTitleCase(term);
    this.setState({ searchTerms: [...this.state.searchTerms, term] });
  };

  onSearchDelete = term => {
    const searchTerms = this.state.searchTerms.filter(cur => cur !== term);
    this.setState({ searchTerms });
  };

  onSearchSubmit = () => {
    if (this.state.isLanding) {
      this.setState({ isWaiting: true, isLanding: false });
    } else this.setState({ isWaiting: true });
    this.scrollToBottom();
    Events.scrollEvent.register("end", async () => {
      const URL = CORS_PROXY + BASE_URL + this.state.searchTerms.join(",");
      const results = await fetch(URL);
      const data = await results.json();
      this.setState({
        recipeList: [...this.state.recipeList, ...data.results],
        isWaiting: false
      });
    });
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
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={this.state.isLanding}
          timeout={300}
          classNames="fade"
        >
          <div className="filter"></div>
        </CSSTransition>
        <Header
          onSearchAdd={this.onSearchAdd}
          onSearchDelete={this.onSearchDelete}
          searchTerms={this.state.searchTerms}
          onSearchSubmit={this.onSearchSubmit}
          isLanding={this.state.isLanding}
        />
        {!this.state.isLanding && (
          <div
            id="container"
            className="flex-parent"
            style={{ alignItems: "flex-start" }}
          >
            {this.renderRecipes()}
          </div>
        )}
        {this.state.isWaiting && <Loader />}
      </div>
    );
  }
}

export default App;
