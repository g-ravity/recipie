import React, { Component } from "react";

import "../assets/css/SearchBar.css";
import Chip from "./Chip";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: [
        "Bacon",
        "Ham",
        "Bacon",
        "Ham",
        "Bacon",
        "Ham",
        "Bacon",
        "Ham",
        "Bacon",
        "Ham"
      ],
      inputTerm: ""
    };
  }

  renderChips = () => {
    return this.state.searchTerms.map((cur, index) => (
      <Chip text={cur} key={cur + index} />
    ));
  };

  onInputChange = event => {
    this.setState({ inputTerm: event.target.value });
  };

  onInputSubmit = event => {
    event.preventDefault();
    const searchTerms = [...this.state.searchTerms, this.state.inputTerm];
    this.setState({ inputTerm: "", searchTerms });
  };

  render() {
    return (
      <div id="search-bar" className="flex-parent">
        <div id="chip-terms" className="flex-parent">
          {this.renderChips()}
        </div>
        {/* <form onSubmit={this.onInputSubmit}>
          <input
            type="text"
            onChange={this.onInputChange}
            value={this.state.inputTerm}
          />
        </form> */}
        <button>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
