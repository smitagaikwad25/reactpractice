import React, { Component } from "react";

// export const EmpProfile = (propes) => {
//   return (
//     <div>
//       <h1>Employe name is {propes.name.empname}</h1>
//     </div>
//   );
// };

export class EmpProfile extends Component {
  render() {
    return <h1>Hello {this.props.name.empname}</h1>;
  }
}
