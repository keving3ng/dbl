import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
    this.props.searchData(event.target.value);
  };

  render() {
    return (
      <div className="ui fluid icon input">
        <input
          id="product search bar"
          type="text"
          value={this.state.term}
          onChange={e => this.onInputChange(e)}
          placeholder="Search..."
        />
        <i className="search icon" />
      </div>
    );
  }
}

export default SearchBar;
