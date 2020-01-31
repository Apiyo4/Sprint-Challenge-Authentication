import React, {useState, useEffect} from 'react';
import axios from '../axios';

function Jokes(){
    const [jokes,setJokes] = useState([]);
    useEffect(()=>{
        axios().get('http://localhost:3300/api/jokes')
        .then(res=>{
         
            setJokes(res.data);
        })
        .catch(er=>{
            alert(er.response.data.message)
        })
    }, [])
   
    return(
        <div> <h1>Jokes</h1>
            <ul>
           {jokes.map(joke=>{
               return<li key={joke.id}>{joke.joke}</li>
           })}
           </ul>
        </div>
    )
}
export default Jokes;