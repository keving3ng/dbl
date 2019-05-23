import React from "react";

class Tag extends React.Component {
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <div className="ui selection dropdown">
            <input type="hidden" name="gender" />
            <i className="dropdown icon" />
            <div className="default text">Gender</div>
            <div className="menu">
              <div className="item" data-value="1">
                Male
              </div>
              <div className="item" data-value="0">
                Female
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tag;
