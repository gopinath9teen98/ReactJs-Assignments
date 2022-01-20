import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './person.css'

function PersonDetail({person,setPerson,cardValue,setcardValue}) {

    console.log(cardValue)
    return (
        <div className='main'>
       { 
          <> 
           <Card bg='light' style={{width:'18rem',marginLeft:'300px'}} >
           <Card.Body>
           <Card.Text>
           <p>Name:{person[cardValue-1].name}</p>
           <p>Age:{person[cardValue-1].age}</p>
           </Card.Text>
           </Card.Body>
           <Card.Img height={400} width={50} variant="bottom" src={person[cardValue-1].image} />
           </Card>
          </>
        }
        </div>
    )
}

export default PersonDetail
