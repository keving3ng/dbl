import React from "react";
import RowControl from "./RowControl";

const Table = () => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th className="seven wide">Key</th>
          <th className="seven wide">Value</th>
          <th className="two wide">Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Key">
            Name
            <br />
            Weight
            <br />
            Colour
            <br />
            Quantity
            <br />
            Origin
          </td>
          <td data-label="Value">
            Apple
            <br />
            1.2 lb
            <br />
            Red
            <br />
            2560
            <br />
            Guatemala
          </td>
          <td data-label="Controls">
            <RowControl />
          </td>
        </tr>
        <tr>
          <td data-label="Key">
            Name
            <br />
            Weight
            <br />
            Quantity
            <br />
            Origin
          </td>
          <td data-label="Value">
            Orange
            <br />
            1.3 lb
            <br />
            1732
            <br />
            Florida
          </td>
          <td data-label="Controls">
            <RowControl />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
