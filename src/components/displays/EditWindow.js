import React from "react";
import Popup from "reactjs-popup";
import InputRow from "./InputRow";

class EditWindow extends React.Component {
  /* Some test data for now */
  state = { data: [], keys: [] };

  componentDidMount() {
    this.setState({ keys: ["Name", "Quantity", "Price"] });
  }

  addNewKey = key => {
    this.setState(prevState => ({
      keys: [...prevState.keys, key]
    }));
  };

  render() {
    return (
      <Popup trigger={<button className="ui button">Add New</button>} modal>
        {close => (
          <div className="modal" style={{ padding: "10px" }}>
            <div className="ui grid">
              <div className="ui row">
                <div
                  className="ui header four wide column"
                  style={{ verticalAlign: "true" }}
                >
                  Add New Item
                </div>
                <div className="twelve wide column">
                  <div className="actions">
                    <button
                      className="ui compact button"
                      onClick={() => {
                        console.log("save");
                        close();
                      }}
                      style={{ verticalAlign: "true" }}
                    >
                      Save
                    </button>

                    <button
                      className="ui compact button"
                      onClick={() => {
                        console.log("cancel");
                        close();
                      }}
                      style={{ verticalAlign: "true" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>

              <InputRow />
            </div>
          </div>
        )}
      </Popup>
    );
  }
}

export default EditWindow;
