import React from "react";

class RowControl extends React.Component {
  render() {
    return (
      <div>
        <button className="ui icon button" onClick={() => console.log("edit")}>
          <i className="trash alternate outline icon" />
        </button>
        
        <button
          className="ui icon button"
          onClick={() => console.log("delete")}
        >
          <i className="delete icon" />
        </button>
      </div>
    );
  }
}

export default RowControl;
