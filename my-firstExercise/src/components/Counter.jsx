import { useState } from 'react';

function Counter() {
  // TODO: Create a count state with initial value 0
  const [count, setCount] = useState(0);
  // TODO: Create functions to:
  // - increment count
  const incrementCount = () => {
    setCount(count + 1);
  };
 const Decrement = ()=> {
    setCount(count-1);}
  // - reset count to 0
  const resetCount = () => 
  {
    setCount(0);
  }

  // - add custom amount (prompt user)
    const setCustomCount = () => {
      const customAmount = prompt("Enter a custom amount:");
      if (customAmount !== null) {
        setCount(count + parseInt(customAmount));
      }
    };


  return (
    <div className="counter">
     <h2 style={{ color: count > 10 ? 'red' : 'green' }}>Counter: {count}</h2>
      
      <button onClick={incrementCount}> Increment</button>
      <button onClick={Decrement}> Decrement</button>
      <button onClick={resetCount}> Reset</button>
      <button onClick={setCustomCount}> Set Custom</button>
      
      {/* BONUS: Change color based on value (red if >10, green if <10) */}
     
    </div>
  );
}

export default Counter;