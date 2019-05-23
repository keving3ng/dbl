import React from "react";
import Table from "./Table";
import Panel from "./input/Panel";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "25px" }}>
      <Table />
      <Panel />
    </div>
  );
};

export default App;
