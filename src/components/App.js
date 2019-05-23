import React from "react";
import Table from "./Table";
import Panel from "./input/Panel";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "25px" }}>
      <div className="ui grid">
        <div className="ui row">
          <Table />
        </div>
        <div className="ui row">
          <Panel />
        </div>
      </div>
    </div>
  );
};

export default App;
