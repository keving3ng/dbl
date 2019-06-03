import React from "react";
import Popup from "reactjs-popup";
import RowHandler from "./RowHandler";

class EditWindow extends React.Component {
  state = {
    item: this.props.data,
    type: ""
  };

  componentDidMount() {
    if (this.state.item) {
      this.setState({ type: "edit" });
    } else {
      this.setState({ type: "new" });
    }
  }

  onSave = () => {
    console.log("Save " + this.state.type + this.state.item);
  };

  render() {
    return (
      <Popup
        trigger={
          <button className="ui blue icon button">{this.props.button}</button>
        }
        modal
      >
        {close => (
          <div
            className="modal"
            style={{ padding: "10px", paddingTop: "25px" }}
          >
            <div className="ui grid">
              <div className="row">
                <div
                  className="actions"
                  style={{ paddingLeft: "20px", paddingBottom: "20px" }}
                >
                  <button
                    className="ui blue compact button"
                    onClick={() => {
                      this.onSave();
                      close();
                    }}
                    style={{ verticalAlign: "true" }}
                  >
                    Save
                  </button>

                  <button
                    className="ui red compact button"
                    onClick={() => {
                      close();
                    }}
                    style={{ verticalAlign: "true" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <RowHandler data={this.state.item} />
            </div>
          </div>
        )}
      </Popup>
    );
  }
}

export default EditWindow;
