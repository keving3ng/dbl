import React from "react";
import Card from "../elements/Card";

class CardList extends React.Component {
  state = { data: this.props.data };

  componentWillReceiveProps({ data }) {
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="ui four cards">
        {this.state.data.map(item => {
          return (
            <Card key={item["name"]} item={item} getData={this.props.getData} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
