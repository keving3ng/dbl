import React from "react";

class RowControl extends React.Component {
  render() {
    return (
      <div>
        <button
          className="ui teal icon button"
          onClick={() => console.log("edit")}
        >
          <i className="edit icon" />
        </button>

        <button
          className="ui yellow icon button"
          onClick={() => console.log("duplicate")}
        >
          <i className="copy outline icon" />
        </button>

        <button
          className="ui purple icon button"
          onClick={() => console.log("placeholder")}
        >
          <i className="share square icon" />
        </button>

        <button
          className="ui red icon button"
          onClick={() => console.log("delete")}
        >
          <i className="trash alternate outline icon" />
        </button>
      </div>
    );
  }
}

export default RowControl;
