import React from "react";
import CardList from "./displays/CardList";
import EditWindow from "./displays/EditWindow";

const App = () => {
  return (
    <div className="ui container">
      <h1
        className="ui center aligned icon header"
        style={{ paddingTop: "30px" }}
      >
        <i className="database icon" />
        DBL Inventory System
      </h1>
      <div className="ui segment" style={{ paddingTop: "25px" }}>
        <EditWindow
          button={<button className="ui blue button">Add item</button>}
          data={{}}
          action="Add new item"
        />
      </div>
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default App;
