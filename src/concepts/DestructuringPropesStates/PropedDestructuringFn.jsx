import React, { Component } from "react";

// export let Destructuring = ({ name, lastName }) => {
//   return (
//     <h1>
//       hello {name}
//       {lastName}
//     </h1>
//   );
// };

// or

// export let Destructuring = (propes) => {
//   const { name, lastName } = propes;
//   return (
//     <h1>
//       hello {name} {lastName}
//     </h1>
//   );
// };

// class

export class Destructuring extends Component {
  render() {
    const { name, lastName } = this.props;

    return (
      <h1>
        Hello {name} {lastName}{" "}
      </h1>
    );
  }
}
