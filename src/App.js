import Binding from "./Binding";
import ChangeName from "./ChangeName";
import CheckBox from "./CheckBox";
import FormTextBox from "./FormTextBox";
import RandomElement from "./RandomElement";
import UseState from "./UseState";

function App() {
  return (
    <div>
      <FormTextBox />
      <ChangeName />
      <UseState />
      <RandomElement />
      <Binding />
      <CheckBox />

    </div>
  );
}

export default App;
