import React, { Component } from "react";

import "../assets/css/SearchBar.css";
import Chip from "./Chip";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTerm: ""
    };
  }

  renderChips = () => {
    return this.props.searchTerms.map((cur, index) => (
      <Chip text={cur} key={index} keyid={index} onClick={this.onChipDelete} />
    ));
  };

  onInputChange = event => {
    this.setState({ inputTerm: event.target.value });
  };

  onChipDelete = key => {
    this.props.onSearchDelete(key);
  };

  onInputSubmit = event => {
    event.preventDefault();
    this.props.onSearchAdd(this.state.inputTerm);
    this.setState({ inputTerm: "" });
  };

  render() {
    return (
      <div id="search-bar" className="flex-parent">
        <div id="chip-terms" className="flex-parent">
          {this.renderChips()}
          {this.props.searchTerms.length < 5 && (
            <form onSubmit={this.onInputSubmit}>
              <input
                type="text"
                onChange={this.onInputChange}
                value={this.state.inputTerm}
              />
            </form>
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
