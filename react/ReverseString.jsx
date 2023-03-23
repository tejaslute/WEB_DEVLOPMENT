import { useState } from "react";
import "./styles.css";

export default function App() {
  const data = [
    {
      id: "c1",
      brand: "Toyota",
      make: "Corolla",
      model: "2007"
    },
    {
      id: "c2",
      brand: "Maruti Suzuki",
      make: "Omni",
      model: "2003"
    },
    {
      id: "c3",
      brand: "Hyundai",
      make: "Santro",
      model: "2005"
    }
  ];
  const newdata = data.filter((item) => item.model >= 2003);
  const [input, setinput] = useState();

  const mirror_it = () => {
    const reversestring = input.split("").reverse().join("");
    console.log(input.split("").reverse().join(""));
    setinput(reversestring);
  };
  return (
    <div className="App">
      {newdata.map((item) => {
        return <div>{item.brand}</div>;
      })}
      <input type="text" onChange={(a) => setinput(a.target.value)} />
      <br />
      <div>{input}</div>
      <button onClick={() => mirror_it()}>Mirror it</button>
    </div>
  );
}
