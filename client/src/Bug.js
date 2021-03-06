import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Card, Button} from 'semantic-ui-react';
import Bugs from './Bugs';
import Vaccine from "./Vaccine";

const Bug = () => {
  const {id} = useParams()

  let history = useHistory()

  const [bug, setBug] = useState({})
  const [vaccines,setVaccines] = useState([])


  useEffect(()=>{
    getBug()
  }, [])


  const getBug = async () => {
    try {
      let res = await axios.get(`/api/bugs/${id}`)
      setBug(res.data.bug)
      setVaccines(res.data.vaccines)
    } catch (err) {
      alert('error - check console')
      console.log(err)
    }
  }

  const renderVaccines = () => {
    return vaccines.map(vaccine => <Vaccine key={vaccine.id} {...vaccine} bugId={id}/>)
  }


  const deleteBug = async () => {
    let res = await axios.delete(`/api/bugs/${id}`)
    history.push('/')
  }


  return(
    <Card.Group>
      <Card fluid color='red'>
        <Card.Content>
            <Card.Header style={{display: 'flex', justifyContent: 'space-between', margin: '2em'}}>
              {bug.name}
              <div>
                <Button onClick={deleteBug} color='red'>Delete</Button>
                <Link to={`/bugs/${id}/update`}>
                  <Button>Update</Button>
                </Link>
                <Button onClick={() => history.push('/')}>Go Back</Button>
              </div>
            </Card.Header>
          <Link to={`/bugs/${id}/vaccines`}>
            <Button>New Vaccine</Button>
          </Link>
          <Card.Group>
            {renderVaccines()}
          </Card.Group>

        </Card.Content>
      </Card>
    </Card.Group>
  
  )
}

export default Bug;