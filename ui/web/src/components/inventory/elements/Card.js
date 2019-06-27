import React from "react";
import RowControl from "./RowControl";

class Card extends React.Component {
  state = {
    item: this.props.item
  };

  componentWillReceiveProps({ item }) {
    this.setState({ item });
  }

  capIfString = str => {
    if (typeof str === "string") {
      var splitStr = str.toLowerCase().split(" ");
      for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      return splitStr.join(" ");
    }
    return str;
  };

  renderData = () => {
    if (this.state.item !== undefined) {
      return Object.keys(this.state.item).map(key => {
        if (key === "rating") {
          return (
            <tr key={key + this.state.item[key]}>
              <td data-label="Key">{this.capIfString(key)}</td>
              <td
                data-label="Value"
                id={this.state.item.name + " rating value"}
              >
                <div style={{ whiteSpace: "nowrap" }}>
                  {this.state.item.rating} <i className="star icon" />
                </div>
              </td>
            </tr>
          );
        }
        return (
          <tr key={key + this.state.item[key]}>
            <td data-label="Key">{this.capIfString(key)}</td>
            <td
              data-label="Value"
              id={this.state.item.name + " " + key + " value"}
            >
              {this.capIfString(this.state.item[key])}
            </td>
          </tr>
        );
      });
    }
  };

  render() {
    return (
      <div className="card" id={this.state.item.name}>
        <div className="content">
          <div id="product card name" className="header">
            {this.capIfString(this.state.item.name)}
          </div>
          <div className="description">
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>{this.renderData()}</tbody>
            </table>
          </div>
        </div>
        <div
          className="ui bottom attached button"
          style={{ paddingTop: "5px", paddingBottom: "5px" }}
        >
          <RowControl item={this.state.item} getData={this.props.getData} />
        </div>
      </div>
    );
  }
}

export default Card;
