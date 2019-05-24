import React from "react";
import KeyList from "../data/KeyList";
import TagList from "../data/TagList";
import ValueHandler from "../data/ValueHandler";

class Panel extends React.Component {
  onSearchSubmit = e => {
    console.log(e);
  };

  render() {
    return (
      <div className="ui grid">
        <div className="six wide column">
          <KeyList />
          <TagList />
          <ValueHandler onSubmit={this.onSearchSubmit} />
        </div>
        <div className="ten wide column">
          <h4 style={{ textAlign: "center" }}>History</h4>
        </div>
      </div>
    );
  }
}

export default Panel;
