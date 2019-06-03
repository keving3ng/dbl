import React from "react";

class InputRow extends React.Component {
  state = { keyList: [], key: this.props.currKey, value: this.props.currValue };

  onInputChange = event => {
    this.setState({ value: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.key + this.state.value);
  };

  render() {
    return (
      <form className="ui equal width form" onSubmit={this.onFormSubmit}>
        <div className="fields">
          <div className="field">
            <select className="ui selection dropdown">
              <option value="">Choose a key</option>
              {this.state.keyList.map(key => {
                return (
                  <option key={key} value={key}>
                    {key}
                  </option>
                );
              })}
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
