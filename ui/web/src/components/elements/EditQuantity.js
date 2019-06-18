import React from "react";
import Popup from "reactjs-popup";
import API from "../apis";

class EditQuantity extends React.Component {
  state = { item: this.props.item, value: 0 };

  componentWillMount() {
    if (this.state.item) {
      this.setState({ value: parseInt(this.state.item["quantity"]) });
    }
  }

  incr = n => {
    this.setState({
      value: this.state.value + n
    });
  };

  decr = n => {
    this.setState({
      value: this.state.value - n
    });
  };

  onSave() {
    let pair = {};
    pair["quantity"] = this.state.value;
    this.setState({ item: Object.assign(this.state.item, pair) });
    console.log(this.state.item);

    API.put(`items/` + this.state.item["name"], this.state.item)
      .then(response => {
        console.log(response);
      })
      .catch(e => console.log(e))
      .then(this.props.getData);
  }

  render() {
    return (
      <Popup
        trigger={
          <button className="ui purple icon button">
            <i className="plus icon" />
          </button>
        }
        modal
      >
        {close => (
          <div className="ui container">
            <div className="modal" style={{ padding: "15px" }}>
              <div className="ui grid" style={{ alignContent: "center" }}>
                <div className="row">
                  <h2 className="ui header">Edit Quantity</h2>
                </div>

                <div className="row">
                  <button
                    className="ui compact button"
                    onClick={() => this.decr(10)}
                  >
                    -10
                  </button>
                  <button
                    className="ui compact button"
                    onClick={() => this.decr(1)}
                  >
                    -1
                  </button>
                  <p className="">{this.state.value}</p>
                  <button
                    className="ui compact button"
                    onClick={() => this.incr(1)}
                  >
                    +1
                  </button>
                  <button
                    className="ui compact button"
                    onClick={() => this.incr(10)}
                  >
                    +10
                  </button>
                </div>
                <div className="row">
                  <button
                    className="ui button"
                    onClick={() => {
                      this.onSave();
                      close();
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}

export default EditQuantity;
