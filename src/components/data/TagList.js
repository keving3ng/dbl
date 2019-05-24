import React from "react";
import DropDown from "../io/DropDown";
import AddNewButton from "../io/AddNewButton";

class TagList extends React.Component {
  state = {
    tags: ["Weight", "Colour", "Quantity"]
  };

  addNewTag = tag => {
    this.setState(prevState => ({
      tags: [...prevState.tags, tag]
    }));
  };

  render() {
    return (
      <div className="ui grid">
        <div className="fourteen wide column">
          <DropDown data={this.state.tags} typeName="Tag" />
        </div>

        <div className="two wide column">
          <AddNewButton addNewFunc={this.addNewTag} typeName="Tag" />
        </div>
      </div>
    );
  }
}

export default TagList;
