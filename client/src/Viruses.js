import { Button } from 'semantic-ui-react'
import {useState, useEffect} from 'react';
import axios from 'axios';

const Viruses = () => {
  useEffect(()=>{
    getBugs()
  }, [])
  
  const [bugs, setBugs] = useState([])

  const getBugs = async () => {
    try {
      let res = await axios.get("/api/bugs")
    } catch (err) {
      console.log(err)
    }
  }

  const renderBugs = () => {
    return bugs.map( bug => {
      return(
        <div>
          {bug.name}
        </div>
      )
    })
  }

  return(
    <div>
      <h1>Viruses</h1>
      <Button>View</Button>
      {renderBugs()}
    </div>
  )
}

export default Viruses