import React from "react";
import Input from "./Input";

class Panel extends React.Component {
  onSearchSubmit = e => {
    console.log(e);
  };
  render() {
    return (
      <div className="ui row">
        <div className="eight wide column">
          <Input onSubmit={this.onSearchSubmit} />
        </div>
        <div className="eight wide column">Two</div>
      </div>
    );
  }
}

export default Panel;
