import React from "react";
import InputRow from "./elements/InputRow";

class RowHandler extends React.Component {
  state = { data: this.props.data, keyList: [] };

  componentDidMount() {
    if (this.state.data === undefined || this.state.data.length === 0) {
      this.setState({ keyList: ["Name"] });
    } else {
      this.setState({ keyList: Object.keys(this.props.data) });
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
