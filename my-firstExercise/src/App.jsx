import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserCard from './UserCard'
import './App.css'

function App() {
  
  return (
    <div>
      <h1>WELLOCOM TO REACT TRAINING </h1>
      {/* <UserCard /> */}
      <UserCard name="Gizachew " course="Full Stack Development" />
       <UserCard name="Eliyas" course="React Training" />
    </div>
  );
}

export default App
