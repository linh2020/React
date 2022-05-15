import Binding from "./Binding";
import ChangeName from "./ChangeName";
import CheckBox from "./CheckBox";
import FormTextBox from "./FormTextBox";
import RadioBox from "./RadioBox";
import RandomElement from "./RandomElement";
import UseState from "./UseState";

function App() {
  return (
    <div>
      <RadioBox />
      <CheckBox />
      <FormTextBox />
      <ChangeName />
      <UseState />
      <RandomElement />
      <Binding />
    </div >
  );
}

export default App;
