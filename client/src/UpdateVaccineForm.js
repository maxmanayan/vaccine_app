import { useParams } from 'react-router-dom';


const UpdateVaccineForm = () => {
  const { virus_id, id} = useParams()
  return(
    <div>
      <h1>UpdateVaccineForm</h1>
      <p>Bug ID: {virus_id}</p>
      <p>ID: {id}</p>
    </div>
  )
}




export default UpdateVaccineForm;