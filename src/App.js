import React from "react";
import "./App.css";
import { useState } from "react";
import AdditionGenerator from "./components/additionGenerator";

function App() {
  const items = {
    id: 1,
    // number1: 1,
    // number2: 20,
    number1: Math.ceil(Math.random() * 10),
    number2: Math.ceil(Math.random() * 10),
    correctAnswer: 0,
  };

  function correctAnswer(a, b) {
    return a + b;
  }

  items.correctAnswer = correctAnswer(
    // additionNumbers.number1,
    // additionNumbers.number2
    items.number1,
    items.number2
  );

  const [data, setData] = useState(undefined);

  function getData(val) {
    val.preventDefault();
    setData(val.target[0].value);
    console.log(val.target[0].value);

    if (parseInt(val.target[0].value) === items.correctAnswer) {
      console.log("svaret är rätt!");
    }
  }
  return (
    <div className="App">
      <h1>Math for Kids</h1>
      <div className="math">
        <div className="addition">
          {" "}
          {items.number1}+{items.number2} ={/* <AdditionGenerator /> */}
        </div>
        <form onSubmit={getData}>
          <input
            className="answer"
            type="number"
            step="none"
            value={data}
            // onChange={(potatis) => {
            //   // setData(potatis.target.value)
            //   console.log(potatis.target.value);
            // }}
          ></input>
        </form>
      </div>
      <div>
        <h1>Your answer was {data}</h1>
      </div>
    </div>
  );
}

export default App;
