import React from "react";

class Input extends React.Component {
  state = { input: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <div className="ui action input">
        <input
          type="text"
          placeholder="Search..."
          onChange={e => this.setState({ input: e.target.value })}
          value={this.state.input}
        />
        <button className="ui button" onClick={this.onFormSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Input;
