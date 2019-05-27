import React from "react";
import RowControl from "./RowControl";

class Card extends React.Component {
  state = {
    data: [
      ["Quantity", "42"],
      ["Name", "Apples"],
      ["Origin", "Canada"],
      ["Price", "$1.69/lb"]
    ]
  };

  getIndex = (dict, query) => {
    for (var i in dict) {
      if (dict[i][0] === query) return i;
    }
    return -1;
  };

  getName = () => {
    if (this.getIndex(this.state.data, "Name") === -1) {
      return <div>Error: Name not found</div>;
    }
    return this.state.data[this.getIndex(this.state.data, "Name")][1];
  };

  renderData = () => {
    return this.state.data.map(entry => {
      if (entry[0] !== "Name") {
        return (
          <tr key={entry[0] + entry[1]}>
            <td>{entry[0]}</td>
            <td>{entry[1]}</td>
          </tr>
        );
      }
      return null;
    });
  };

  render() {
    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">{this.getName()}</div>
            <div className="description">
              <table className="ui celled table">
                <tbody>{this.renderData()}</tbody>
              </table>
            </div>
          </div>
          <div
            className="ui bottom attached button"
            style={{ paddingTop: "5px", paddingBottom: "5px" }}
          >
            <RowControl />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
