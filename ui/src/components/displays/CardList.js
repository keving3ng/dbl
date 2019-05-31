import React from "react";
import Card from "./elements/Card";

class CardList extends React.Component {
  state = { data: [] };

  componentDidMount() {
    fetch("http://127.0.0.1:5000/item/apple")
      .then(res => res.json())
      .then(items => {
        this.setState({ data: items });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="ui cards">
        {this.state.data.map(item => {
          return <Card key={item["name"]} item={item} />;
        })}
      </div>
    );
  }
}

export default CardList;
