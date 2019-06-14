import React from "react";
import EditWindow from "../displays/EditWindow";
import API from "../apis";

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
          getData={this.props.getData}
        />

        <button
          className="ui red icon button"
          onClick={() =>
            API.delete(`/items/${this.props.item["name"]}`).then(
              window.location.reload()
            )
          }
        >
          <i className="trash alternate outline icon" />
        </button>
      </div>
    );
  }
}

export default RowControl;
