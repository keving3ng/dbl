import React from "react";

class OrderTable extends React.Component {
  state = {
    data: [
      {
        dateadded: "12/12/1998",
        orderid: 902347,
        customerid: 12837187,
        currentstatus: "shipped",
        details: [
          {
            name: "beach ball",
            manufacturer: "kito beach sports",
            upc: 454645663,
            quantity: 1,
            price: "$12.99"
          },
          {
            name: "beach towel",
            manufacturer: "kito beach sports",
            upc: 129837129387,
            quantity: 2,
            price: "$16.99"
          },
          {
            name: "cooler, 24L",
            manufacturer: "kito beach sports",
            upc: 1667756646,
            quantity: 1,
            price: "$29.99"
          }
        ]
      },
      {
        dateadded: "12/1/1999",
        orderid: 2345235,
        customerid: 1245523,
        currentstatus: "received",
        details: [
          {
            name: "water bottle",
            manufacturer: "hydroponics sports",
            upc: 67804654,
            quantity: 1,
            price: "$9.99"
          },
          {
            name: "electric guitar",
            manufacturer: "fender guitar",
            upc: 1346234234,
            quantity: 1,
            price: "$499.99"
          }
        ]
      }
    ]
  };

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

  printDetails = details => {
    return details.map(product => {
      return (
        <div className="ui segment">
          <p>
            Product: <b>{this.capIfString(product.name)}</b>
            <br />
            Quantity: {product.quantity}
            <br />
            Manufacturer: {this.capIfString(product.manufacturer)}
            <br />
            UPC: {product.upc}
            <br />
            Price: {product.price} <br />
          </p>
        </div>
      );
    });
  };

  renderTableData = () => {
    return this.state.data.map(order => {
      return (
        <tr>
          <td>{this.capIfString(order.dateadded)}</td>
          <td>{this.capIfString(order.orderid)}</td>
          <td>{this.capIfString(order.customerid)}</td>
          <td>{this.capIfString(order.currentstatus)}</td>
          <td>{this.printDetails(order.details)}</td>
        </tr>
      );
    });
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
