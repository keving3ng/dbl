import React from "react";
import CardList from "./displays/CardList";
import EditWindow from "./displays/EditWindow";
import API from "./apis";

class App extends React.Component {
  state = { data: [] };

  componentWillMount() {
    this.getData();
  }

  getData = async () => {
    const response = await API.get("items/all");

    this.setState({ data: response.data });
  };

  render() {
    return (
      <div className="ui container">
        <h1
          className="ui center aligned icon header"
          style={{ paddingTop: "30px" }}
        >
          <i className="database icon" />
          DBL Inventory System
        </h1>
        <div className="ui segment" style={{ paddingTop: "25px" }}>
          <EditWindow
            button={<button className="ui blue button">Add item</button>}
            data={{}}
            action="Add new item"
            getData={this.getData}
          />
        </div>
        <div>
          <CardList data={this.state.data} getData={this.getData} />
        </div>
      </div>
    );
  }
}

export default App;
