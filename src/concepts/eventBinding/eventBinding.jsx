import React, { Component } from "react";

export class Event_Binding extends Component {
  constructor() {
    super();
    this.state = {
      name: "smita",
    };
    this.bindEvent = this.bindEvent.bind(this)
  }

  bindEvent() {
    this.setState({
      name: "prashant",
    });

    console.log("hello");
  }

  render() {
    return (
      <div>
        <h1> hello {this.state.name} </h1>
        {/* <button onClick={() => this.bindEvent()}>Click</button> */}
        {/* <button onClick={this.bindEvent.bind(this)}>Click</button> */}
        <button onClick={this.bindEvent}>Click</button>
      </div>
    );
  }
}
