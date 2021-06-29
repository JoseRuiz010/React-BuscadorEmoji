import React, { Component } from "react";

export default class EmojisSearch extends Component {
  hadlerChange = (e) => {
    //console.log(e.target.value);
    this.props.filtro(e.target.value);
  };
  render() {
    return (
      <div className="col" style={{ padding: 20 }}>
        <input
          className="form-control"
          onChange={this.hadlerChange}
          style={{ width: "100%", height:"45px"}}
          placeholder="Ingrese el Emoji"
        ></input>
      </div>
    );
  }
}
