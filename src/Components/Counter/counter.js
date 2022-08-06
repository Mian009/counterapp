// var developer;
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // console.log(developer());

  // const developer = function () {
  //     console.log("Mian Mubashir");
  // }
  // console.log(developer)

  // function developer(){
  //     console.log("Mian Mubashir");
  // }

  // const obj = {
  //     boy: "Mubashir",
  //     job: "developer",
  // }

  // console.log(obj.boy, obj.job);

  // const { boy, job } = obj;

  // console.log(boy, job);

  // const increment = () => {
  //     setCount(count + 1);
  // }

  // const decrement = () => {
  //     setCount(count - 1);
  // }

  return (
    <>
      <div style={{ backgroundColor: "pink", color: "white" }}>{count}</div>
      <button
        style={{ backgroundColor: "black", color: "white", border: "10px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ backgroundColor: "black", color: "white", border: "10px" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
