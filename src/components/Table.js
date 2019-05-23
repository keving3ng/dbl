import React from "react";

const Table = () => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Key</th>
          <th>Tag</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Key">Apple</td>
          <td data-label="Tag">Weight</td>
          <td data-label="Value">1.2 lb</td>
        </tr>
        <tr>
          <td data-label="Key">Orange</td>
          <td data-label="Tag">Weight</td>
          <td data-label="Value">1.3 lb</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
