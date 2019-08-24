import React from "react";

import Header from "./Header";
import RecipeCard from "./RecipeCard";
import "../assets/css/App.css";

const App = () => {
  return (
    <div>
      <Header />
      <div id="container" className="flex-parent">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
};

export default App;
