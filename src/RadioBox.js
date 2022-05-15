import { useState } from "react";

function RadioBox() {

  const languages =
    [
      { id: 1, name: 'C++' },
      { id: 2, name: 'Java' },
      { id: 3, name: 'JavaScript' },
    ]

  const [checked, setChecked] = useState();

  const handleChecked = () => {
    // Call API
    console.log(
      {
        id: checked
      })
  }

  return (
    <div style={{ padding: '50px' }}>

      {languages.map(lang => (
        <div key={lang.id}>
          <input type="radio"
            onChange={() => {
              setChecked(() => lang.id)
            }}
            checked={checked === lang.id}
          />
          {lang.name}
        </div>
      ))}

      <button onClick={handleChecked}>Register</button>
    </div>
  );
}

export default RadioBox
