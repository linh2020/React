import { useState } from "react";

function CheckBox() {

  const langs = [
    { id: 1, name: 'C++' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'JavaScript' }
  ]

  const [checked, setChecked] = useState();

  const handleChecked = () => {
    setChecked(() => {
      return (
        1
      )
    })
    console.log(checked);
  }


  return (
    <div style={{ padding: '20px' }}>

      <ul>
        {langs.map((lang) => {
          return (
            <li key={lang.id}><input type="checkbox" onChange={handleChecked}></input>{lang.name}</li>
          )

        })}


      </ul>

    </div>
  );
}

export default CheckBox

// import { useState } from "react";

// function App() {

//   const gifts = ['CPU', 'VGA', 'Memory'];

//   const [gift, setGift] = useState("Waiting")

//   const randomNumber = () => Math.floor(Math.random() * 3);

//   const handleGift = () => {
//     setGift(() => {
//       return gifts[randomNumber()];
//     });
//   }


//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>{gift}</h2>
//       <button onClick={handleGift}> Get a gift</button>
//     </div>
//   );
// }

// export default App
