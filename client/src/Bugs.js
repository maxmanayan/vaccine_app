import { Button } from 'semantic-ui-react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Bugs = () => {
  useEffect(()=>{
    getBugs()
  }, [])
  
  const [bugs, setBugs] = useState([])

  const getBugs = async () => {
    try {
      let res = await axios.get("/api/bugs")
      console.log(res.data)
      setBugs(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const renderBugs = () => {
    return bugs.map( bug => {
      return(
        <Link to={`/bugs/${bug.id}`}> 
          <div>
            {bug.name}
          </div>
        </Link>
       
      )
    })
  }

  return(
    <div>
      <h1>Bugs</h1>
      <Button>View</Button>
      <Link to='/bugs/new'>
        <Button>New Bug</Button>
      </Link>
      {renderBugs()}
    </div>
  )
}

export default Bugs