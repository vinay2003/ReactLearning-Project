import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <>
      <h1>Counter</h1>
      <p>Current value: {count}</p>
      <button onClick={increment}>Increment</button> 
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
