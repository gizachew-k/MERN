import { useState } from 'react'
//  import UserCard from './UserCard.jsx'
import Profile from './components/Profile.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <h1>WELLOCOM TO REACT TRAINING </h1>
  
      {/* passing props to the user card component? */}
       {/* <UserCard name="Gizachew " course="Full Stack Development" />
       <UserCard name="Eliyas" course="React Training" /> */} 
      
     <h1>Counter Example</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increase
          </button>
      <h2>Profile Component</h2>
   <Profile
   name="Gizachew Kassa"
   email="gizachewkassa33@example.com"
   role="MERN Developer"
   />
    </div>
  );
}

export default App
