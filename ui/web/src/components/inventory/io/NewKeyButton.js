import React from "react";

const AddNewButton = ({ addKey }) => {
  const PopUp = () => {
    var newVal = window.prompt("Enter a new key:");

    if (newVal !== "") {
      return newVal;
    } else {
      while (newVal === "") {
        newVal = window.prompt("Invalid input. Try again. ");
      }
      return newVal;
    }
  };

  return (
    <button
      className="ui icon button"
      id="add new key button"
      onClick={() => addKey(PopUp())}
    >
      <i className="plus icon" />
    </button>
  );
};

export default AddNewButton;
