import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';


const Virus = () => {
  const {id} = useParams()

  let history = useHistory()

  const deleteVirus = async () => {
    let res = await axios.delete(`/api/bugs/${id}`)
    history.push('/')
  }
  return(
    <div>
      <h1>Virus has id: {id}</h1>
      <p onClick={deleteVirus}>Delete</p>
      <p onClick={() => history.goBack()}>Go Back</p>
    </div>
  )
}

export default Virus