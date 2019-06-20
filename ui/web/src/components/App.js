import React from "react";
import CardList from "./displays/CardList";
import EditWindow from "./displays/EditWindow";
import API from "./apis";
import SearchBar from "./elements/SearchBar";

class App extends React.Component {
  state = { data: [], term: null };

  componentWillMount() {
    this.getData();
  }

  getData = async () => {
    const response = await API.get("items/all");

    this.setState({ data: response.data });
  };

  searchData = term => {
    this.setState({ term });
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
          <div className="ui grid">
            <div className="two wide column">
              <EditWindow
                button={
                  <button id="add new item button" className="ui blue button">
                    Add item
                  </button>
                }
                data={{}}
                action="Add new item"
                getData={this.getData}
              />
            </div>
            <div className="twelve wide column">
              <SearchBar onFormSubmit={this.searchData} />
            </div>
            <div className="two wide column">
              <button
                className="ui grey button"
                onClick={() => this.setState({ term: null })}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div>
          <CardList
            data={this.state.data}
            getData={this.getData}
            term={this.state.term}
          />
        </div>
      </div>
    );
  }
}

export default App;
