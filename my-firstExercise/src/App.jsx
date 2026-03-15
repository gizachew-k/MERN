import { useState } from 'react'
//  import UserCard from './UserCard.jsx'
// import Profile from './components/Profile.jsx'
import Counter from './components/Counter.jsx'
// import TodoList from './components/TodoList.jsx'
import './App.css'
import Header from './components/pages/Header.jsx';

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>

          <Counter />
          <Header />
    </div>   
  );
}

export default App
