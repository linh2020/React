import { useState } from "react";

function ChangeName() {

  const [name, setName] = useState('');
  console.log(name);

  const handleName = () => {
    setName('David Huynh');
  }

  return (
    <div style={{ padding: '50px' }}>

      <input type="text" onChange={(e) => { setName(e.target.value) }} value={name}></input>
      <button onClick={handleName}>Change</button>
    </div>
  );
}

export default ChangeName
