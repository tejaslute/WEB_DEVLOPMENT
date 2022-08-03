import "./styles.css";
import { useState } from "react";

export default function App() {
  const [input, setinput] = useState();
  const [name, setname] = useState(false);
  const [message, setmessage] = useState(false);

  const data = [
    {
      id: 1,
      title: "Ok assignments",
      completed: false
    },
    {
      id: 2,
      title: "Blur programming session",
      completed: true
    },
    {
      id: 3,
      title: "Project submission",
      completed: false
    },
    {
      id: 4,
      title: "Coding practice",
      completed: true
    }
  ];
  const [todos, settodos] = useState(data);

  const showtodos = (value) => {
    if (value === "completed") {
      settodos(data.filter((item) => item.completed === true));
    } else if (value === "incomplete") {
      settodos(data.filter((item) => item.completed === false));
    }
  };

  return (
    <div className="App">
      {name && <h1>This is Tejas</h1>}
      <button onClick={() => setname(!name)}>SHOW ME</button>
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        placeholder="enter name"
      />
      <br />
      <button onClick={() => setmessage(true)}>Welcome</button>
      {message && input.length !== 0 && <h1>Welcome {input} </h1>} <br />
      <button onClick={() => showtodos("completed")}>Show Completed </button>
      <button onClick={() => showtodos("incomplete")}>Show Incompleted </button>
      {todos.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <div>
              completed:
              {item.completed ? "✔" : "❌"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
