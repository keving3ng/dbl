import React from "react";

class InputBox extends React.Component {
  state = { input: "" };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="ui grid">
          <div className="eleven wide column">
            <div className="ui fluid left icon focus input">
              <i className="edit icon" />
              <input
                type="text"
                placeholder="Enter a value"
                onChange={e => this.setState({ input: e.target.value })}
                value={this.state.input}
              />
            </div>
          </div>

          <div className="five wide column">
            <button type="submit" className="ui button">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default InputBox;
