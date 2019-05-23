import React from "react";
import Input from "./Input";
import Tag from "./Tag";

class Panel extends React.Component {
  onSearchSubmit = e => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <div className="ui form">
          <div className="field">
            <label>Key</label>
            <Input onSubmit={this.onSearchSubmit} />
          </div>
        </div>

        <div className="ui form">
          <div className="three fields">
            <div className="six wide field">
              <label>Key</label>
              <Input onSubmit={this.onSearchSubmit} />
            </div>

            <div className="five wide field">
              <label>Tag</label>
              <Tag />
            </div>

            <div className="five wide field">
              <label>History</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
