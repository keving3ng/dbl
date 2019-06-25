import React from "react";
import SearchBar from "../elements/SearchBar";
import OrderTable from "./displays/OrderTable";

class Orders extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1
          className="ui center aligned icon header"
          style={{ paddingTop: "30px" }}
        >
          <i className="list alternate outline icon" />
          DBL Orders Interface
        </h1>
        <div className="ui segment" style={{ paddingTop: "25px" }}>
          <div className="ui grid">
            <div className="eleven wide column">
              <button className="ui blue button">Add New Order</button>
            </div>
            <div className="five wide column">
              <SearchBar />
            </div>
          </div>
        </div>

        <div className="ui segment">
          <OrderTable />
        </div>
      </div>
    );
  }
}

export default Orders;
