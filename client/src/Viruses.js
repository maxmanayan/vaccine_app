import { Button } from 'semantic-ui-react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Viruses = () => {
  useEffect(()=>{
    getBugs()
  }, [])
  
  const [bugs, setBugs] = useState([])

  const getBugs = async () => {
    try {
      let res = await axios.get("/api/bugs")
      setBugs(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const renderBugs = () => {
    return bugs.map( bug => {
      return(
        <Link to={`/viruses/${bug.id}`}> 
          <div>
            {bug.name}
          </div>
        </Link>
       
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