import { useState } from 'react'
import './App.css'
import Card from './card';
function App() {
  const [count, setCount] = useState(0);

  
  return (
    <>
     
      <h1 className='bg-yellow-300 text-blue-500'>Tailwind Test</h1>
      <div className='flex flex-wrap'>

      <Card  userName="Rahim" btnText="CLICK"/>
      <Card  userName="Neeraj" btnText="VISIT"/>
      <Card  userName="Striver" btnText="VISIT"/>
      <Card  userName="Aryan" btnText="VISIT"/>
      
      </div>

    </>
  )
}

export default App
