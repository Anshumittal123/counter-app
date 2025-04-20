import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const increaseValue = () =>{
    if(counter < 20){
      setCounter(counter + 1);
    }
  }

  const DecreaseValue= () =>{
    if(counter > 0){
      setCounter(counter - 1);
    }
  }
  return (
    <> 
        <h1>Counter App</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={increaseValue}>Add value</button>
        <button onClick={DecreaseValue}>Remove Value</button>
        <p>footer: {counter}</p>
    </>
  );
}

export default App;
