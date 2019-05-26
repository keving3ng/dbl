import React from "react";
import DropDown from "../io/DropDown";
import AddNewButton from "../io/AddNewButton";

class KeyList extends React.Component {
  state = {
    keys: ["Name", "Quantity", "Price"]
  };

  addNewKey = key => {
    this.setState(prevState => ({
      keys: [...prevState.keys, key]
    }));
  };

  render() {
    return (
      <div className="ui grid">
        <div
          className="four wide column"
          style={{ paddingLeft: "40px", paddingRight: "0px" }}
        >
          <AddNewButton addNewFunc={this.addNewKey} typeName="Key" />
        </div>

        <div className="twelve wide column">
          <DropDown data={this.state.keys} typeName="Key" />
        </div>
      </div>
    );
  }
}

export default KeyList;
