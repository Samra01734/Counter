import React, { useState,useEffect} from 'react';
import'./App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };


  return (
    <div>
      <h1>Welcome to React</h1>
      <h2>Counter Value: {counter}</h2>
      <button  onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button
       onClick={removeValue}>Remove Value</button>
    </div>
  );
}

export default App;
