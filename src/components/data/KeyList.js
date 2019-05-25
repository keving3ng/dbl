import React from "react";
import DropDown from "../io/DropDown";
import AddNewButton from "../io/AddNewButton";

class KeyList extends React.Component {
  state = {
    keys: ["Apples", "Oranges", "Pears"]
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
          className="three wide column"
          style={{ paddingLeft: "30px", paddingRight: "0px" }}
        >
          <AddNewButton addNewFunc={this.addNewKey} typeName="Key" />
        </div>

        <div className="thirteen wide column">
          <DropDown data={this.state.keys} typeName="Key" />
        </div>
      </div>
    );
  }
}

export default KeyList;
