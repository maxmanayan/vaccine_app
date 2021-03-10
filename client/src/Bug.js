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


  const deleteVirus = async () => {
    let res = await axios.delete(`/api/bugs/${id}`)
    history.push('/')
  }


  return(
    <>
      <Card fluid color='red'/>
        <Card.Content>
          <Card.Header style={{border: '1px solid black', display: 'flex', justifyContent: 'space-between', margin: '2em'}}>
            {bug.name}
            <div>
              <Button onClick={deleteVirus} color='red'>Delete</Button>
              <Link to={`/bugs/${id}/update`}>
                <Button>Update</Button>
              </Link>
              <Button onClick={() => history.goBack()}>Go Back</Button>
            </div>
          </Card.Header>
          <Button>New Vaccine</Button>
          <Card.Group>
            {renderVaccines()}
            <Vaccine />
          </Card.Group>

        </Card.Content>
    </>
  )
}

export default Bug;