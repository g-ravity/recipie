import React, { Component } from "react";

import "../assets/css/SearchBar.css";
import Chip from "./Chip";
import Input from "./Input";

class SearchBar extends Component {
  renderChips = () => {
    return this.props.searchTerms.map((cur, index) => (
      <Chip
        text={cur}
        key={index}
        keyid={`${index}-${cur}`}
        onDelete={this.onChipDelete}
      />
    ));
  };

  onChipDelete = key => {
    this.props.onSearchDelete(key);
  };

  render() {
    return (
      <div id="search-bar" className="flex-parent">
        <div id="chip-terms" className="flex-parent">
          {this.renderChips()}
          {this.props.searchTerms.length < 5 && (
            <Input onInputSubmit={this.props.onSearchAdd} />
          )}
        </div>
        <button onClick={this.props.onSearchSubmit}>SEARCH</button>
        <p id="terms-warning">{`${5 -
          this.props.searchTerms.length} terms remaining`}</p>
      </div>
    );
  }
}

export default SearchBar;
