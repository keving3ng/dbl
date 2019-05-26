import React from "react";
import KeyList from "../data/KeyList";
import InputBox from "../io/InputBox";

class InputRow extends React.Component {
  render() {
    return (
      <div className="ui grid row">
        <div className="eight wide column">
          <KeyList />
        </div>

        <div className="eight wide column">
          <InputBox />
        </div>
      </div>
    );
  }
}

export default InputRow;
