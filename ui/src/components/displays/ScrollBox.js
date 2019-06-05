import React from "react";

class ScrollBox extends React.Component {
  state = { data: this.props.data, keyList: ["Name"] };

  componentWillMount() {
    if (this.state.data) {
      this.setState({ keyList: Object.keys(this.state.data) });
    }
  }

  render() {
    return <div>Scrolling Box contains all the data in rows</div>;
  }
}

export default ScrollBox;
