import React from "react";

class Input extends React.Component {
  state = { input: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="ui action input">
          <input
            type="text"
            placeholder="Search..."
            onChange={e => this.setState({ input: e.target.value })}
            value={this.state.input}
          />
        </div>

        <button type="submit" className="ui button">
          Submit
        </button>
      </form>
    );
  }
}

export default Input;
