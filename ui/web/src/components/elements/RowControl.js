import React from "react";
import EditWindow from "../displays/EditWindow";
import API from "../apis";

class RowControl extends React.Component {
  state = { item: this.props.item };

  componentWillReceiveProps({ item }) {
    this.setState({ item });
  }

  render() {
    return (
      <div>
        <EditWindow
          data={this.state.item}
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
            API.delete(`/items/${this.state.item["name"]}`).then(
              this.props.getData
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
