import { useState } from 'react'
import Planner from './Planner.jsx'
import './App.css'
import Statdisplay from './statdisplay.jsx'
import Passivedisplay from './passivedisplay.jsx'

function App() {
  const [stat, setstat] = useState(5);
  const [stat2, setstat2] = useState(5);
  function adder(val){
    setstat(stat+val);
  }
  
  function adder2(val){
    setstat2(stat2+val);
  }


  return ( <>
    
    <Statdisplay name ="teststat" value={stat} assigned={stat} adder = {adder}/>
    <Statdisplay name ="teststat" value={stat2} assigned={stat2} adder = {adder2} hasPoints={false}/>
    <Passivedisplay name="testpassive" value={stat + stat2}/>
    </>
  )
}

export default App
