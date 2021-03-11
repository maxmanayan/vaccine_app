import axios from 'axios';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';



const NewVaccineForm = () => {
  const { bug_id } = useParams()
  const history = useHistory()

  const [name, setName] = useState('')
  const [effectiveness, setEffectiveness] = useState('')
  const [maker, setMaker] = useState('')


  const handleSubmit = async () => {
    try {
      let res = await axios.post(`/api/bugs/${bug_id}/vaccines`, {name, effectiveness, maker})
      history.push(`/bugs/${bug_id}`)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <div>
      <h1>NewVaccineForm</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Effectiveness</label>
          <input value={effectiveness} onChange={(e)=>setEffectiveness(e.target.value)} placeholder='Effectiveness' />
        </Form.Field>
        <Form.Field>
          <label>Maker</label>
          <input value={maker} onChange={(e)=>setMaker(e.target.value)} placeholder='Maker' />
        </Form.Field>

        <Button type='submit'>Submit</Button>
        <Button onClick={()=>history.push(`/bugs/${bug_id}`)}>Cancel</Button>
      </Form>

    </div>
  )
}




export default NewVaccineForm;