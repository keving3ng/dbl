import React from "react";
import Table from "./displays/Table";
import EditWindow from "./displays/EditWindow";
/* import InputRow from "./displays/InputRow"; */

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "25px" }}>
      <EditWindow />
      <Table />
    </div>
  );
};

export default App;
