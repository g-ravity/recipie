import React from "react";

import "../assets/css/Chip.css";
import cross from "../assets/img/cross.png";
import add from "../assets/img/add.png";

const Chip = ({ text, isSelected, onAdd, onDelete }) => {
  return (
    <div
      id="chip"
      className={`flex-parent ${isSelected ? "selected" : "not-selected"}`}
    >
      <p>{text}</p>
      <img
        src={isSelected ? cross : add}
        alt="icon"
        width="20"
        onClick={() => {
          isSelected ? onDelete(text) : onAdd(text);
        }}
        className={isSelected ? "selected" : "not-selected"}
      />
    </div>
  );
};

Chip.defaultProps = {
  isSelected: true,
  onAdd: null,
  onDelete: null
};

export default Chip;
