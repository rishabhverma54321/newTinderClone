import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"
import database from '../Firebase';
function TinderCards() {

    const [people, setPeople] = useState([ ])

    useEffect(() => {
     const data = database.collection("tinder-clone").onSnapshot(e=>{
       setPeople( e.docs.map(doc=>doc.data()))
       })
      
    })

    return (
        <div>
        <div className="card__cond">
         {people.map((people)=>(
         <TinderCard
          className='swipe'
          key={people.name}
          preventSwipe={['up', 'down']}>
             <div
              style={{backgroundImage:`url(${people.url})`}}
              className='card'>
              <h3>{people.name}</h3>
             </div>
         </TinderCard>
         ))}
        </div>
            
        </div>
    )
}

export default TinderCards
