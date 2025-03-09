import React from 'react'
import { useEffect,useState } from 'react';
import Spinner from './Spinner.jsx';
import "./style/Card.css"
const Card = () => {


const [Person,setPerson] = useState([])
const aboutUs_api = "http://localhost:9001/Us"
 const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPerson = async () => {
      
      try {

        const res = await fetch(aboutUs_api);
        const data = await res.json();
        setPerson(data);

      } catch (error) {
        console.log("error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerson();
  }, []);





  return (
    <div className='main-dev'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Person.map((person) => {
            return (
              
                <div className={'aboutUs-Card'} >
                    
                  <img src={person.img} />

                  <div className="aboutUs-info">
                    <h2>{person.name}</h2>
                   
                    <p>Email: {person.email}</p>
                 
                  </div>

                 
                </div>
                
              
            );
          })}
        </>
      )}
    </div>
  )
}

export default Card