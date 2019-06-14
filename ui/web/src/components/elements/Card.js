import React from "react";
import RowControl from "./RowControl";

class Card extends React.Component {
  state = {
    item: this.props.item
  };

  getName = () => {
    return <div>{this.capIfString(this.props.item["name"])}</div>;
  };

  capIfString = input => {
    if (typeof input === "string") {
      return input.charAt(0).toUpperCase() + input.slice(1);
    }
    return input;
  };

  renderData = () => {
    if (this.state.item !== undefined) {
      return Object.keys(this.state.item).map(key => {
        return (
          <tr key={key + this.state.item[key]}>
            <td data-label="Key">{this.capIfString(key)}</td>
            <td data-label="Value">{this.capIfString(this.state.item[key])}</td>
          </tr>
        );
      });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="content">
          <div className="header">{this.getName()}</div>
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
