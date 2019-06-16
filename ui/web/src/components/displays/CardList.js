import React from "react";
import Card from "../elements/Card";

class CardList extends React.Component {
  state = { data: this.props.data, term: this.props.term };

  componentWillReceiveProps({ data, term }) {
    this.setState({ data, term });
  }

  render() {
    return (
      <div className="ui four cards">
        {this.state.data.map(item => {
          if (this.state.term === null) {
            return (
              <Card
                key={item["name"]}
                item={item}
                getData={this.props.getData}
              />
            );
          } else if (item["name"] === this.state.term) {
            return (
              <Card
                key={item["name"]}
                item={item}
                getData={this.props.getData}
              />
            );
          }
          return null;
        })}
      </div>
    );
  }
}

export default CardList;
