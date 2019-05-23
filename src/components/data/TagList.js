import React from "react";

class TagList extends React.Component {
  state = { tags: ["Weight", "Colour", "Quantity"] };

  addNewTag = tag => {
    this.setState(prevState => ({
      tags: [...prevState.tags, tag]
    }));
  };

  renderList() {
    return this.state.tags.map(tag => {
      return (
        <a
          key={tag}
          className="item"
          onClick={e => {
            console.log(e.target.value);
          }}
        >
          {tag}
        </a>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="ui vertical menu">{this.renderList()}</div>
      </div>
    );
  }
}

export default TagList;
