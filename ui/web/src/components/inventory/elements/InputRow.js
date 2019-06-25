import React from "react";
import NewKeyButton from "./NewKeyButton";

class InputRow extends React.Component {
  state = {
    keyList: this.props.keyList,
    item: this.props.item,
    value: "",
    selectedKey: ""
  };

  capIfString = input => {
    if (typeof input === "string") {
      const cap = input.charAt(0).toUpperCase() + input.slice(1);
      return cap;
    }
    return input;
  };

  onInputChange = event => {
    this.setState({ value: event.target.value });
  };

  onDropdownChange = event => {
    this.setState({ selectedKey: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.addNewData(this.state.selectedKey, this.state.value);
    this.setState({ value: "", selectedKey: "" });
  };

  addKey = key => {
    this.setState(prevState => ({
      keyList: [...prevState.keyList, key.toLowerCase()],
      selectedKey: key
    }));
  };

  renderKeyList = () => {
    return this.state.keyList.map(key => {
      if (!Object.keys(this.state.item).includes(key)) {
        if (key === this.state.selectedKey) {
          return (
            <option selected={true} id={key} key={key} value={key}>
              {this.capIfString(key)}
            </option>
          );
        } else {
          return (
            <option id={key} key={key} value={key}>
              {this.capIfString(key)}
            </option>
          );
        }
      }
      return null;
    });
  };

  render() {
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="one wide column">
            <NewKeyButton addKey={this.addKey} />
          </div>
          <div className="fifteen wide column">
            <form className="ui equal width form" onSubmit={this.onFormSubmit}>
              <div className="fields">
                <div className="field">
                  <select
                    value={this.state.selectedKey}
                    id="custom keys dropdown"
                    onChange={this.onDropdownChange}
                    className="ui selection dropdown"
                  >
                    <option value="">{this.state.selectedKey}</option>
                    {this.renderKeyList()}
                  </select>
                </div>

                <div className="field">
                  <input
                    type="text"
                    id="custom key value textbox"
                    value={this.state.value}
                    onChange={this.onInputChange}
                    placeholder="Enter a value"
                  />
                </div>
                <button
                  className="ui button"
                  id="submit custom data button"
                  type="submit"
                  onSubmit={this.onFormSubmit}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default InputRow;
