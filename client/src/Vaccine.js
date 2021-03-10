import { Link } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";


const Vaccine = (props) => {
  const {bugId, id, name, effectiveness, maker} = props
  
  
  return(
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{effectiveness}</Card.Meta>
        <Card.Description>{maker}</Card.Description>
        <Card.Content>
          <Button>Delete</Button>
          <Link to={`/bugs/${bugId}/vaccines/${id}/edit`}>
           <Button>Update</Button>
          
          </Link>
        </Card.Content>
      </Card.Content>
    </Card>
  )
}


export default Vaccine;