import React from "react";
import Popup from "reactjs-popup";
import InputRow from "./elements/InputRow";
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

  render() {
    return (
      <Popup
        trigger={
          <button className="ui blue icon button">{this.props.button}</button>
        }
        modal
      >
        {close => (
          <div className="modal">
            <div className="ui segment">
              <InputRow keyList={this.state.keyList} />
            </div>
            <div className="ui segment">
              <ScrollBox data={this.state.item} />
            </div>

            <div style={{ float: "right" }}>
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
