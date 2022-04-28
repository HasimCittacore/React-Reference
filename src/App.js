import React,{ createRef } from "react";
import "./style.css";
import Counter from './CounterComp'
export default function App() {
  const providedRef = createRef();
console.log(providedRef)
  const handleIncre = () => {
    console.log(providedRef)
     providedRef.current.handleIncrement();
  };

  const handleDecre = () => {
    providedRef.current.handleDecrement();
 };
  return (
    <div>
      <h3>App Component gets data from Counter (i.e:Child to  Parent) </h3>

      <button onClick={handleIncre}>IncrementFromApp</button> &nbsp;

      <button onClick={handleDecre}>DecrementFromApp</button>
      <Counter ref={providedRef}/>
    </div>
  );
}
