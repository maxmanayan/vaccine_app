import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { Form, Checkbox, Button } from 'semantic-ui-react';


const UpdateVaccineForm = () => {
  const { bug_id, id} = useParams()
  const history = useHistory()
  const [vaccine, setVaccine] = useState(null)
  const [name, setName] = useState("")
  const [effectiveness, setEffectiveness] = useState("")
  const [maker, setMaker] = useState("")

  // onMount, get vaccine data

  useEffect(()=>{
    getVaccine()
  },[])


  const getVaccine = async () => {
    try {
      // console.log('in getVaccine')
      // console.log(bug_id)
      // console.log(id)
      let res = await axios.get(`/api/bugs/${bug_id}/vaccines/${id}`)
      // console.log(res.data)
      setVaccine(res.data)
      setName(res.data.name)
      setEffectiveness(res.data.effectiveness)
      setMaker(res.data.maker)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let res = await axios.put(`/api/bugs/${bug_id}/vaccines/${id}`, {name, effectiveness, maker})
      history.push(`/bugs/${bug_id}`)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  return(
    <div>
      <h1>UpdateVaccineForm</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} defaultValue={name} placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Effectiveness</label>
          <input value={effectiveness} onChange={(e)=>setEffectiveness(e.target.value)} defaultValue={effectiveness} placeholder='Effectiveness' />
        </Form.Field>
        <Form.Field>
          <label>Maker</label>
          <input value={maker} onChange={(e)=>setMaker(e.target.value)} defaultValue={maker} placeholder='Maker' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        <Button onClick={()=>history.push(`/bugs/${bug_id}`)}>Cancel</Button>
      </Form>
      <p>Bug ID: {bug_id}</p>
      <p>ID: {id}</p>
    </div>
  )
}




export default UpdateVaccineForm;