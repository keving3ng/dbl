import React from "react";

class InputRow extends React.Component {
  state = {
    keyList: this.props.keyList,
    key: this.props.currKey,
    value: this.props.currValue
  };

  componentDidMount() {
    console.log(this.state.key);
  }

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
    console.log(this.state.key + this.state.value);
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
            <select selected={this.state.key} className="ui selection dropdown">
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
        </div>
      </form>
    );
  }
}

export default InputRow;
