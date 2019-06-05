import React from "react";

class InputRow extends React.Component {
  state = {
    keyList: this.props.keyList
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

  onFormSubmit = event => {
    event.preventDefault();
    console.log("save" + this.state.key + this.state.value);
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
      <form className="ui equal width form" onSubmit={this.onFormSubmit}>
        <div className="fields">
          <div className="field">
            <select selected="Name" className="ui selection dropdown">
              <option value="">Select</option>
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
          <button className="ui button" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default InputRow;
