import React, { Component } from "react";

// export class StateExample extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "smita",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>hello {this.state.name}</h1>
//       </div>
//     );
//   }
// }

export class StateExample extends Component {
  constructor() {
    super();
    this.state = {
      name: "smita",
      count: 0,
    };
  }
  updateName() {
    this.setState({
      name: "Prashant",
      count: this.state.count+1
    });
  }

  render() {
    console.log("calling render");
    return (
      <div>
        <h1>hello {this.state.name}</h1>
        <h1>Count is {this.state.count}</h1>
        <button
          onClick={() => {
            this.updateName();
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
