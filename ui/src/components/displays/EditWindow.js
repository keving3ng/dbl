import React from "react";
import Popup from "reactjs-popup";
import InputRow from "../elements/InputRow";
import ScrollBox from "./ScrollBox";

class EditWindow extends React.Component {
  state = {
    item: this.props.data,
    keyList: ["Name", "Price"]
  };

  componentWillMount() {
    if (this.state.item.length > 0) {
      this.setState({ keyList: Object.keys(this.state.item) });
    }
  }

  onWindowSubmit = () => {
    console.log("Save " + this.state.type + this.state.item);
  };

  onSave = () => {
    console.log("save");
  };

  render() {
    return (
      <Popup trigger={this.props.button} modal>
        {close => (
          <div className="modal" style={{ padding: "15px" }}>
            <h3 className="ui huge header" style={{ alignContent: "center" }}>
              {this.props.action}
            </h3>

            <div className="ui segment">
              <InputRow keyList={this.state.keyList} />
            </div>
            <div className="ui segment">
              <ScrollBox data={this.state.item} />
            </div>

            <div className="ui right floated segment">
              <button
                className="ui blue button"
                onClick={() => {
                  this.onSave();
                  close();
                }}
              >
                Save
              </button>

              <button
                className="ui red button"
                onClick={() => {
                  close();
                }}
                style={{ verticalAlign: "true" }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}

export default EditWindow;
