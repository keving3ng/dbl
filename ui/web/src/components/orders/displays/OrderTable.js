import React from "react";

class OrderTable extends React.Component {
  state = { data: [] };

  renderTableData = () => {
    return (
      <tr>
        <td>12/12/12</td>
        <td>901823</td>
        <td>1245123</td>
        <td>Shipped</td>
        <td>Beach Ball $12.99</td>
      </tr>
    );
  };

  render() {
    return (
      <table className="ui celled padded table">
        <thead>
          <tr>
            <th className="single line">Date Added</th>
            <th>Order ID No.</th>
            <th>Customer ID No.</th>
            <th>Current Status</th>
            <th>Order Details</th>
          </tr>
        </thead>
        <tbody>{this.renderTableData()}</tbody>
        {/* see the semantic docs to add pages later on */}
      </table>
    );
  }
}

export default OrderTable;
