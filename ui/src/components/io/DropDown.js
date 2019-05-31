import React from "react";

class DropDown extends React.Component {
  // Hashcode function to give unique keys for list items
  hashCode = function(s) {
    var h = 0,
      l = s.length,
      i = 0;
    if (l > 0) while (i < l) h = ((h << 5) - h + s.charCodeAt(i++)) | 0;

    return h;
  };

  renderList = () => {
    return this.props.data.map(val => {
      return (
        <option key={this.hashCode(val)} value={val}>
          {val}
        </option>
      );
    });
  };

  render() {
    return (
      <select className="ui fluid search dropdown">
        <option value="">Choose a {this.props.typeName}</option>
        {this.renderList()}
      </select>
    );
  }
}

export default DropDown;
