import React from "react";
import EditWindow from "../displays/EditWindow";

class RowControl extends React.Component {
  render() {
    return (
      <div>
        <EditWindow
          data={this.props.item}
          button={
            <button className="ui teal icon button">
              <i className="edit icon" />
            </button>
          }
          action="Edit item"
        />

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
