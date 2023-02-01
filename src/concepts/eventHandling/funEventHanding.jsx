import React, { Component } from "react";

export const Event_handle = () => {
  const handleEvent = () => {
    alert("event triggered");
  };
  return (
    <div>
      <button onClick={handleEvent}>Click</button>
    </div>
  );
};

// export class Event_handle extends Component {
//   handleEvent = () => {
//     alert("event triggered!!!!!");
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleEvent}>Click</button>
//       </div>
//     );
//   }
// }
