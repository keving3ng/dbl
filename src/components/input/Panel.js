import React from "react";
import Input from "./InputValue";
import Tag from "./Tag";

class Panel extends React.Component {
  onSearchSubmit = e => {
    console.log(e);
  };
  render() {
    return (
      <div className="ui grid">
        <div className="ten wide column">
          <Input onSubmit={this.onSearchSubmit} />
        </div>
        <div className="six wide column">
          <h4 style={{ textAlign: "center" }}>History</h4>
        </div>
      </div>
    );
  }
}

export default Panel;
