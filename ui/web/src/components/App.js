import React from "react";
import Inventory from "./Inventory";
import Orders from "./Orders";
import Customers from "./Customers";

class App extends React.Component {
  state = {
    tabs: ["Inventory", "Orders", "Customers"],
    components: [
      { name: "Inventory", component: <Inventory /> },
      { name: "Orders", component: <Orders /> },
      { name: "Customers", component: <Customers /> }
    ],
    selected: "Inventory"
  };

  renderComponents = () => {
    return this.state.components.map(i => {
      if (i.name === this.state.selected) {
        return (
          <div className="ui bottom active attached tab segment">
            {i.component}
          </div>
        );
      } else {
        return (
          <div className="ui bottom attached tab segment">{i.component}</div>
        );
      }
    });
  };

  renderTabs = () => {
    return this.state.tabs.map(name => {
      if (name === this.state.selected) {
        return (
          <div
            className="active item"
            onClick={() => this.setState({ selected: name })}
          >
            {name}
          </div>
        );
      } else {
        return (
          <div
            className="item"
            onClick={() => this.setState({ selected: name })}
          >
            {name}
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui top attached tabular menu">{this.renderTabs()}</div>
        {this.renderComponents()}
      </div>
    );
  }
}

export default App;
