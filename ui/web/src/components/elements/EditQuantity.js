import React from "react";
import Popup from "reactjs-popup";
import API from "../apis";

class EditQuantity extends React.Component {
  state = { item: this.props.item, value: 0, history: [] };

  componentWillMount() {
    if (this.state.item) {
      this.setState({ value: parseInt(this.state.item["quantity"]) });
    }
  }

  undo = () => {
    if (this.state.history.length > 0) {
      this.setState({ value: this.state.history.pop() });
    }
  };

  incr = n => {
    return (
      <button
        className="ui compact button"
        style={{ margin: "4px" }}
        onClick={() =>
          this.setState(prevState => ({
            value: this.state.value + n,
            history: [...prevState.history, prevState.value]
          }))
        }
      >
        +{n}
      </button>
    );
  };

  decr = n => {
    return (
      <button
        className="compact ui button"
        style={{ margin: "4px" }}
        onClick={() =>
          this.setState(prevState => ({
            value: this.state.value - n,
            history: [...prevState.history, prevState.value]
          }))
        }
      >
        -{n}
      </button>
    );
  };

  onInputChange = event => {
    this.setState({ value: parseInt(event.target.value) });
  };

  renderUndoButton = () => {
    if (this.state.history.length > 0) {
      return (
        <button
          className="ui icon button"
          onClick={() => {
            this.undo();
          }}
        >
          <i className="undo icon" />
        </button>
      );
    } else {
      return (
        <button
          className="ui disabled icon button"
          onClick={() => {
            this.undo();
          }}
        >
          <i className="undo icon" />
        </button>
      );
    }
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
            <i className="hashtag icon" />
          </button>
        }
        modal
      >
        {close => (
          <div className="ui segment">
            <div className="modal" style={{ padding: "15px" }}>
              <div className="ui grid" style={{ alignContent: "center" }}>
                <div className="row">
                  <h2 className="ui header">Edit Quantity</h2>
                </div>

                <div className="ui container">
                  <div className="row">
                    <div className="ui segment">
                      {this.decr(100)}
                      {this.decr(10)}
                      {this.decr(1)}
                      <div className="ui input" style={{ margin: "5px" }}>
                        <input
                          value={this.state.value}
                          onChange={e => this.onInputChange(e)}
                          size="5"
                          style={{ textAlign: "center" }}
                        />
                      </div>
                      {this.incr(1)}
                      {this.incr(10)}
                      {this.incr(100)}
                    </div>
                  </div>
                  <div className="row" style={{ paddingTop: "20px" }}>
                    {this.renderUndoButton()}
                    <button
                      className="ui icon button"
                      onClick={() => {
                        this.onSave();
                        close();
                      }}
                    >
                      <i className="check icon" />
                    </button>
                  </div>
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
