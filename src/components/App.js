import React from "react";
import CardList from "./displays/CardList";
import EditWindow from "./displays/EditWindow";
/* import InputRow from "./displays/InputRow"; */

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "25px" }}>
      <EditWindow />
      <br /> <br />
      <CardList />
    </div>
  );
};

export default App;
