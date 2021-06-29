import React, { Component } from "react";
import EmojisResultRow from "./EmojisResultRow";

export default class EmojisResult extends Component {
  render() {
    return (
      <div className="container">
        {this.props.data.map((e) => (
          <EmojisResultRow
            key={e.title}
            title={e.title}
            symbol={e.symbol}
          ></EmojisResultRow>
        ))}
      </div>
    );
  }
}
