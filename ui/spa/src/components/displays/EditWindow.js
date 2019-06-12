import React from "react";
import Popup from "reactjs-popup";
import InputRow from "../elements/InputRow";
import ScrollBox from "./ScrollBox";
import API from "../apis";

class EditWindow extends React.Component {
  state = {
    item: this.props.data,
    keyList: ["name", "price", "quantity"]
  };

  componentWillMount() {
    if (Object.keys(this.state.item).length > 0) {
      this.setState({ keyList: Object.keys(this.state.item) });
    }
  }

  reset() {
    this.setState({
      item: this.props.data,
      keyList: ["name", "price", "quantity"]
    });
  }

  addNewData = (key, value) => {
    const newPair = {};
    newPair[key] = value;
    this.setState({ item: Object.assign(this.state.item, newPair) });
  };

  deleteRow = key => {
    let newState = Object.assign({}, this.state);
    delete newState.item[key];
    this.setState(newState);
  };

  onSave = () => {
    API.put(`items/` + this.state.item["name"], this.state.item)
      .then(r => console.log(r.status))
      .catch(e => console.log(e))
      .then(window.location.reload());
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
              <InputRow
                keyList={this.state.keyList}
                addNewData={this.addNewData}
                item={this.state.item}
              />
            </div>
            <div className="ui segment">
              <ScrollBox data={this.state.item} deleteRow={this.deleteRow} />
            </div>

            <div className="ui right floated segment">
              <button
                className="ui blue button"
                onClick={() => {
                  this.onSave();
                  this.reset();
                  close();
                }}
              >
                Save
              </button>

              <button
                className="ui red button"
                onClick={() => {
                  this.reset();
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
