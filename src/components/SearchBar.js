import React, { Component } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

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
      <CSSTransition
        mountOnEnter
        in={this.props.isLanding}
        timeout={500}
        classNames="slide"
      >
        <div id="search-bar" className="flex-parent landing-position">
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
      </CSSTransition>
    );
  }
}

export default SearchBar;
