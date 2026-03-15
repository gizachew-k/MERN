import { useState } from 'react'
//  import UserCard from './UserCard.jsx'
// import Profile from './components/Profile.jsx'
import Counter from './components/Counter.jsx'
// import TodoList from './components/TodoList.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>

       <Counter />
           <h1 id="hello">hello dear student</h1>
          <button onClick={() => {
          document.getElementById('hello').innerText = "Welcome to MERN training"}}>click me</button>    
       
    </div>   
  );
}

export default App
