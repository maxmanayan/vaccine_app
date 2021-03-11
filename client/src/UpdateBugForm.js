import { useParams, useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import { useEffect, useState} from 'react';
import axios from 'axios';


const UpdateBugForm = () => {
  const {id} = useParams()
  const history = useHistory()

  const [name, setName] = useState('')


  useEffect(()=>{
    getBug()
  },[])

  const getBug = async () => {
    try {
      console.log(`id: ${id}`)
      let res = await axios.get(`/api/bugs/${id}`)
      console.log('in getBug')
      console.log(res.data.bug)
      setName(res.data.bug.name)
    } catch (err) {
      console.log(err)
    }
  }



  const handleSubmit = async () => {
    try {
      let res = await axios.put(`/api/bugs/${id}`, {name})
      history.push(`/bugs/${id}`)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  if(!name) return <h1>Loading...</h1>
  return(
    <div>
      <h1>UpdateBugForm</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} defaultValue={name} placeholder='Name' />
        </Form.Field>

        <Button type='submit'>Submit</Button>
        <Button onClick={() => history.push(`/bugs/${id}`)}>Cancel</Button>
      </Form>
    </div>
  )
}




export default UpdateBugForm;