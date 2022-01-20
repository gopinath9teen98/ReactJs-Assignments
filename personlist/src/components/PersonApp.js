import React, { useState } from 'react'
import PersonDetail from './PersonDetail'
import PersonList from './PersonList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function PersonApp() {
    
   const[person,setPerson]= useState([
       {
           id:1,
           name:'Albert Einstein',
           age: 'expired',
           image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/1200px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg'
           
       },
       {
           id:2,
        name:'Elon Musk',
        age:50,
        image:'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
        
    },
    {
        id:3,
        name:'Mukesh Ambani ',
        age:64,
        image:'https://www.businessinsider.in/photo/photo/86453508/86453508.jpg'
        
    }
   ])
   const[cardValue,setcardValue]=useState(null)
    return (
        <Router>
            <div>
            <div>
                {/* <Link to='/personlist'>PersonList</Link> */}
                {/* {cardValue?<Link to='/persondetail'>persondetail</Link>:''} */}
            </div>
            
            {/* <Route exact path='/personlist' component={PersonList}> */}
            <PersonList person={person} setPerson={setPerson} cardValue={cardValue} setcardValue={setcardValue}/>
            {/* </Route> */}
            <br></br><br></br><br></br>
           {cardValue?
            <PersonDetail person={person} setPerson={setPerson} cardValue={cardValue} setcardValue={setcardValue}/>
           :''}
            
        </div>
        </Router>
    )
}

export default PersonApp
