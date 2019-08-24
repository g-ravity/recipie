import React, { Component } from "react";

import "../assets/css/Chip.css";
import cross from "../assets/img/cross.png";
import add from "../assets/img/add.png";

class Chip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  onChipClick = () => {
    this.setState({ isSelected: this.state.isSelected ? false : true });
  };

  render() {
    return (
      <div
        id="chip"
        className={`flex-parent ${
          this.state.isSelected ? "selected" : "not-selected"
        }`}
      >
        <p>{this.props.text}</p>
        <img
          src={this.state.isSelected ? cross : add}
          alt="icon"
          width="20"
          onClick={this.onChipClick}
          className={this.state.isSelected ? "selected" : "not-selected"}
        />
      </div>
    );
  }
}

export default Chip;
