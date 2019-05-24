import React from "react";
import Table from "./displays/Table";
import Panel from "./displays/Panel";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "25px" }}>
      <Table />
      <Panel />
    </div>
  );
};

export default App;
