import React, { Component } from "react";

export default class EmojisResultRow extends Component {
  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div>
        <div className="row" style={{ padding: 10, borderStyle: "ridge" }}>
          <div className="col-1 " style={{ width: "10px" }}>
            <img
              style={{ marginRight:'5', width: "45px" }}
              alt={this.props.title}
              src={src}
            />
          </div>

          <div className="col col-sm-10">{this.props.title}</div>
        </div>
      </div>
    );
  }
}
