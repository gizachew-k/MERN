import { useState } from 'react'
//  import UserCard from './UserCard.jsx'
// import Profile from './components/Profile.jsx'
import Counter from './components/Counter.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>

       <Counter />
      {/* <h1>WELLOCOM TO REACT TRAINING </h1>
  
      {/* passing props to the user card component? */}
       {/* <UserCard name="Gizachew " course="Full Stack Development" />
       <UserCard name="Eliyas" course="React Training" /> */} 
      
     {/* <h1>Counter Example</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increase
          </button>
      <h2>Profile Component</h2>
   <Profile
   name="Samuel"
   email="samuel@gmail.com"
   role="MERN Developer"
   />

    <Profile
   name="Gizachew Kassa"
   email="gizachewkassa33@gmail.com"
   role="MERN Developer"
   />
    <Profile
   name="Yohhanes"
   email="yohaness@gmail.com"
   role="NET Developer"
   /> */}
    
   <h1 id="hello">hello dear student</h1>
    <button onClick={() => {
        document.getElementById('hello').innerText = "Welcome to MERN training"}}>click me</button>    
       
        </div>   
  );
}

export default App
