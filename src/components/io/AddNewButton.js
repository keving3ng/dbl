import React from "react";

const AddNewButton = ({ newKey, typeName }) => {
  const PopUp = () => {
    var newVal = window.prompt("Enter a new " + typeName);

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
    <button className="ui icon button" onClick={() => newKey(PopUp())}>
      <i className="plus icon" />
    </button>
  );
};

export default AddNewButton;
