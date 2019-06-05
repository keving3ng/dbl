import React from "react";

class ScrollBox extends React.Component {
  state = { item: this.props.data, keyList: ["Name"] };

  componentWillMount() {
    if (this.state.item.length > 0) {
      this.setState({ keyList: Object.keys(this.state.data) });
    }
  }

  capIfString = input => {
    if (typeof input === "string") {
      return input.charAt(0).toUpperCase() + input.slice(1);
    }
    return input;
  };

  deleteRow = item => {};

  renderData = () => {
    if (this.state.item !== undefined) {
      return Object.keys(this.state.item).map(key => {
        return (
          <tr key={key + this.state.item[key]}>
            <td data-label="Key">{this.capIfString(key)}</td>
            <td data-label="Value">{this.capIfString(this.state.item[key])}</td>
            <td data-label="Actions">
              {
                <button
                  className="ui icon button"
                  onClick={() => this.deleteRow(key)}
                >
                  <i className="trash icon" />
                </button>
              }
            </td>
          </tr>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
              <th className="one wide">Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderData()}</tbody>
        </table>
      </div>
    );
  }
}

export default ScrollBox;
