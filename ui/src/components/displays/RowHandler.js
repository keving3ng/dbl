import React from "react";
import InputRow from "./elements/InputRow";

class RowHandler extends React.Component {
  state = { data: this.props.data, keyList: ["Name"] };

  componentWillMount() {
    if (this.state.data) {
      this.setState({ keyList: Object.keys(this.state.data) });
    }
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.data).map(item => {
          return (
            <InputRow
              key={item}
              keyList={this.state.keyList}
              currKey={item}
              currValue={this.state.data[item]}
            />
          );
        })}
        <InputRow keyList={this.state.keyList} currKey="" currValue="" />
      </div>
    );
  }
}

export default RowHandler;
