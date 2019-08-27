import React, { Component } from "react";

import "../assets/css/Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTerm: ""
    };
  }

  onInputChange = event => {
    this.setState({ inputTerm: event.target.value });
  };

  onInputSubmit = event => {
    event.preventDefault();
    this.props.onInputSubmit(this.state.inputTerm);
    this.setState({ inputTerm: "" });
  };

  render() {
    return (
      <form onSubmit={this.onInputSubmit}>
        <input
          type="text"
          onChange={this.onInputChange}
          value={this.state.inputTerm}
        />
      </form>
    );
  }
}

export default Input;
