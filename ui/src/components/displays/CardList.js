import React from "react";
import Card from "../elements/Card";
import API from "../apis";

class CardList extends React.Component {
  state = { data: [] };

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const response = await API.get("/all");

    this.setState({ data: response.data });
  };

  render() {
    return (
      <div className="ui four cards">
        {this.state.data.map(item => {
          return <Card key={item["name"]} item={item} />;
        })}
      </div>
    );
  }
}

export default CardList;
