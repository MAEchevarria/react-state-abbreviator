import { useState } from 'react'
import stateData from './statedata'
import './App.css'
import OutputLabel from './components/OutputLabel'
import DropdownSelect from './components/DropdownSelect'

function App() {
  const [stateSmall, setStateSmall] = useState("")

  const handleSelect = (event) => {
    setStateSmall(event.currentTarget.value)
  }

  return (
    <div>
      <DropdownSelect stateData={stateData} handleSelect={handleSelect}/>
      <OutputLabel stateSmall={stateSmall}/>
    </div>
  )
}

export default App
