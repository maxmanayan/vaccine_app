import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';



const NewBugForm = () => {
  const [name, setName] = useState('')
  const history = useHistory()

  const handleSubmit = async () => {
    try {
      let res = await axios.post('/api/bugs', {name})
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <div>
      <h1>NewBugForm</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} defaultValue={name} placeholder='Name' />
        </Form.Field>

        <Button type='submit'>Submit</Button>
        <Button onClick={() => history.push("/")}>Cancel</Button>
      </Form>
    </div>
  )
}




export default NewBugForm;