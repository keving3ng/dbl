import React from "react";
import Popup from "reactjs-popup";
import InputRow from "./elements/InputRow";

class EditWindow extends React.Component {
  state = { data: [], keys: [] };

  componentDidMount() {
    if (this.state.data === []) {
      this.setState({ keys: ["Name", "Quantity", "Price"] });
    }
    if (this.props.data) {
      this.setState({
        keys: Object.keys(this.props.data)
      });
    }
  }

  addNewKey = key => {
    this.setState(prevState => ({
      keys: [...prevState.keys, key]
    }));
  };

  renderData() {}

  render() {
    return (
      <Popup
        trigger={
          <button className="ui blue icon button">{this.props.button}</button>
        }
        modal
      >
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
                      className="ui blue compact button"
                      onClick={() => {
                        console.log("save");
                        close();
                      }}
                      style={{ verticalAlign: "true" }}
                    >
                      Save
                    </button>

                    <button
                      className="ui red compact button"
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
