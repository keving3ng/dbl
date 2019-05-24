import React from "react";

class Input extends React.Component {
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
          <div className="twelve wide column" style={{ paddingRight: "0px" }}>
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

          <div className="four wide column" style={{ paddingLeft: "22px" }}>
            {" "}
            <button type="submit" className="ui button">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Input;
