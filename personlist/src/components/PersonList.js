
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './person.css'


function PersonList({person,setPerson,cardValue,setcardValue}) {
 
  const value=(ind)=>{
          
         setcardValue(ind);
  }
    return (
        <div className='row'>

            {person.length>0 ?person.map((val,index)=>{
              
              return  < >
                <div className='col-3' key={index+1} onClick={()=>{value(index+1)}}>
               
                <Card border="primary" style={{ width: '18rem' }}  >
                <Card.Header>PersonList</Card.Header>
                <Card.Body>
                  <Card.Title >Name:{val.name}</Card.Title>
                  <Card.Text >
                   
                    Age-{val.age}
                  </Card.Text>
                </Card.Body>
              </Card>
             
            </div>
          </>

            }):'No details'
            }
            
        </div>
         
    )
}

export default PersonList
