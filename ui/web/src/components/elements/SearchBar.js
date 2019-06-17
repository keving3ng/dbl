import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui search bar" align="right">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="six wide field">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              style={{ align: "right" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
