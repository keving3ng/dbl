import React from "react";
import CardList from "./displays/CardList";
import EditWindow from "./displays/EditWindow";

const App = () => {
  return (
    <div className="ui container" style={{ paddingTop: "25px" }}>
      <EditWindow button="Add New" data={[]} action="Add new item" />
      <br /> <br />
      <CardList />
    </div>
  );
};

export default App;
