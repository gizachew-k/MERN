import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserCard from './UserCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <h1>WELLOCOM TO REACT TRAINING </h1>
      {/* <UserCard /> */}
      {/* passing props to the user card component? */}
       {/* <UserCard name="Gizachew " course="Full Stack Development" />
       <UserCard name="Eliyas" course="React Training" /> */} 


      <h1>Counter Example</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increase
          </button>
    </div>
  );
}

export default App
