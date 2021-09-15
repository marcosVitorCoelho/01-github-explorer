import { useState } from "react";

//HOOK REACT

export function Counter() {

  const [counter, setCounter] = useState(0); //imutabilidade

  function increment() {
    console.log('Incrementing')
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}> {/*onClick ao clicar no botao, a funcao increment e executada*/}
        Increment
      </button>
    </div>
  );
}