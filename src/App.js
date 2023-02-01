import logo from "./logo.svg";
import "./App.css";
import { Greet } from "../src/concepts/functionComponent/functionalComponent";
import WellCome from "./concepts/classComponent/classComponet";
import { Profile } from "./concepts/propes/propes";
import { EmpProfile } from "./concepts/propes/propstwo";
import { StateExample } from "./concepts/state/state";
import { Destructuring } from "./concepts/DestructuringPropesStates/PropedDestructuringFn";
import { Event_handle } from "./concepts/eventHandling/funEventHanding";
import { Event_Binding } from "./concepts/eventBinding/eventBinding";
import { Usehook } from "./concepts/useState/useState";
import { UsehookWithPreviousValue } from "./concepts/useState/useSatewithPrevious";
import { UseStateWithObj } from "./concepts/useState/useStateWithObj";
import { UseEffectExam } from "./concepts/useEffect/useEFFect";

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <WellCome/> */}
      {/* <Profile name="smita" /> */}
      {/* <EmpProfile name={{ empname: "smita" }} /> */}
      {/* <StateExample/> */}
      {/* <Destructuring name="smita" lastName="shinde" /> */}
      {/* <Event_handle /> */}
      {/* <Event_Binding /> */}
      {/* <Usehook /> */}
      {/* <UsehookWithPreviousValue /> */}
      {/* <UseStateWithObj /> */}
      <UseEffectExam/>
    </div>
  );
}

export default App;
