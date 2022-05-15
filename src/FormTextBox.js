import { useState } from "react";

function FormTextBox() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleForm = () => {
    // Call API
    console.log({
      name,
      email
    })
  }

  return (
    <div style={{ padding: '50px' }}>

      <input
        value={name} type="text"
        onChange={e => setName(e.target.value)}
      />

      <input
        value={email} type="text"
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={handleForm}>Register</button>


    </div>
  );
}

export default FormTextBox
