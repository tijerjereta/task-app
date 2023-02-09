import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setcounter] = useState(initialValue);

  const increment = (value) => {
    console.log("llama");
    setcounter(counter + value);
  };
  const decrement = (value) => {
    if (counter === 0) return;

    setcounter(counter - value);
  };
  const reset = () => {
    setcounter(initialValue);
  };
  return {
    counter: counter,
    increment,
    decrement,
    reset,
  };
};
