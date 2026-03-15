import { useState } from 'react'
//  import UserCard from './UserCard.jsx'
// import Profile from './components/Profile.jsx'
import Counter from './components/Counter.jsx'
// import TodoList from './components/TodoList.jsx'
import './App.css'
import Header from './components/pages/Header.jsx';
import NavBar from './components/pages/NavBar.jsx';

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>

          <Counter />
          <Header />
          <NavBar title=" mern" />
    </div>   
  );
}

export default App
