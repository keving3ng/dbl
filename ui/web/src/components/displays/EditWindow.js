import React from "react";
import Popup from "reactjs-popup";
import InputRow from "../elements/InputRow";
import ScrollBox from "./ScrollBox";
import API from "../apis";

class EditWindow extends React.Component {
  state = {
    item: this.props.data,
    keyList: [],
    nameField: this.props.data["name"],
    quantityField: this.props.data["quantity"],
    priceField: this.props.data["price"]
  };

  componentWillMount() {
    if (Object.keys(this.state.item).length > 0) {
      this.setState({ keyList: Object.keys(this.state.item) });
    }
  }

  reset() {
    this.props.getData();
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
      .then(response => {
        console.log(response);
      })
      .catch(e => console.log(e))
      .then(this.props.getData)
      .then(this.reset());
  };

  submitDefaults = event => {
    event.preventDefault();
    const defaults = {};
    defaults["name"] = this.state.nameField;
    defaults["quantity"] = this.state.quantityField;
    defaults["price"] = this.state.priceField;

    this.setState({
      item: Object.assign(this.state.item, defaults)
    });
  };

  onNameChange = e => {
    this.setState({ nameField: e.target.value });
  };

  onQuantityChange = e => {
    this.setState({ quantityField: e.target.value });
  };

  onPriceChange = e => {
    this.setState({ priceField: e.target.value });
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
              <h4 className="ui dividing header">Required fields</h4>
              <div className="ui form" onSubmit={() => this.submitDefaults}>
                <div className="fields">
                  <div className="eight wide field">
                    <label>Name</label>
                    <input
                      type="text"
                      id="edit name textbox"
                      value={this.state.nameField}
                      onChange={this.onNameChange}
                    />
                  </div>
                  <div className="three wide field">
                    <label>Price</label>
                    <input
                      type="text"
                      id="edit price textbox"
                      value={this.state.priceField}
                      onChange={this.onPriceChange}
                    />
                  </div>
                  <div className="three wide field">
                    <label>Quantity</label>
                    <input
                      type="text"
                      id="edit quantity textbox"
                      value={this.state.quantityField}
                      onChange={this.onQuantityChange}
                    />
                  </div>
                  <div className="two wide field">
                    <button
                      className="ui compact button"
                      id="submit defaults button"
                      type="submit"
                      onClick={this.submitDefaults}
                      style={{ marginTop: "25px", marginLeft: "5px" }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <h4 className="ui dividing header">Add additional fields</h4>
                <InputRow
                  keyList={this.state.keyList}
                  addNewData={this.addNewData}
                  item={this.state.item}
                />
              </div>
            </div>
            <div className="ui segment">
              <ScrollBox data={this.state.item} deleteRow={this.deleteRow} />
            </div>

            <div className="ui right floated segment">
              <button
                id="save button"
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
                id="cancel button"
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
