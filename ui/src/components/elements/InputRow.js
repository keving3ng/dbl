import React from "react";
import PlusButton from "../io/PlusButton";

class InputRow extends React.Component {
  state = {
    keyList: this.props.keyList,
    value: "",
    selectedKey: "key"
  };

  capIfString = input => {
    if (typeof input === "string") {
      return input.charAt(0).toUpperCase() + input.slice(1);
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
      keyList: [...prevState.keyList, key]
    }));
  };

  renderKeyList = () => {
    return this.state.keyList.map(key => {
      return (
        <option key={key} value={key}>
          {this.capIfString(key)}
        </option>
      );
    });
  };

  render() {
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="one wide column">
            <PlusButton addKey={this.addKey} />
          </div>
          <div className="fifteen wide column">
            <form className="ui equal width form" onSubmit={this.onFormSubmit}>
              <div className="fields">
                <div className="field">
                  <select
                    value={this.state.selectedKey}
                    onChange={this.onDropdownChange}
                    className="ui selection dropdown"
                  >
                    <option value="">Select a key</option>
                    {this.renderKeyList()}
                  </select>
                </div>

                <div className="field">
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.onInputChange}
                    placeholder="Enter a value"
                  />
                </div>
                <button
                  className="ui button"
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
