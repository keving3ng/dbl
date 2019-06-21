import React from "react";
import Card from "../elements/Card";

class CardList extends React.Component {
  state = { data: this.props.data, term: this.props.term };

  componentWillReceiveProps({ data, term }) {
    if (term === "") {
      this.setState({ data, term: null });
    } else {
      this.setState({ data, term });
    }
  }

  clear;

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
          } else if (
            item["name"]
              .toUpperCase()
              .toLowerCase()
              .indexOf(this.state.term.toUpperCase().toLowerCase()) > -1
          ) {
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
