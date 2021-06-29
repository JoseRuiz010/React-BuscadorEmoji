import "./App.css";
import React, { Component } from "react";
import EmojisResult from "../src/Components/EmojisResult";
import EmojisFilter from "../src/Components/EmojisFilter";
import Header from "../src/Components/Header";
import EmojisSearch from "../src/Components/EmojisSearch";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtro: "",
      filter: [],
    };
  }

  componentDidMount() {
    this.setState({ filter: EmojisFilter(this.state.filtro) });
  }

  handlerFilter = (e) => {
    console.log(e);
    this.setState({ filtro: e });
    this.setState({ filter: EmojisFilter(this.state.filtro) });
  };
  render() {
    return (
      <div className="App container">
        <Header></Header>
        <EmojisSearch filtro={this.handlerFilter}></EmojisSearch>
        <EmojisResult filtro={"g"} data={this.state.filter}></EmojisResult>
      </div>
    );
  }
}
