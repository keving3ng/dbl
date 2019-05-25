import React from "react";
import Popup from "reactjs-popup";
import InputRow from "./InputRow";

class EditWindow extends React.Component {
  /* Some test data for now */
  state = { data: [], keys: ["Name", "Quantity", "Price"] };

  addNewKey = key => {
    this.setState(prevState => ({
      keys: [...prevState.keys, key]
    }));
  };

  render() {
    return (
      <div>
        <Popup
          trigger={<button className="ui button">Add New</button>}
          modal
          closeOnDocumentClick
        >
          <div className="ui container" style={{ padding: "10px" }}>
            <div className="ui header" style={{ paddingTop: "10px" }}>
              Add New Item
            </div>
            <div className="content">
              <InputRow />
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default EditWindow;
