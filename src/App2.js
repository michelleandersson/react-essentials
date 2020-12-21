import React, {useState, useEffect, useReducer} from "react"; 
import './App.css';

//https://api.github.com/users/michelleandersson


function App2({login}) {
    const [data, setData] = useState(null); 
    useEffect(() => {
      fetch(`https://api.github.com/users/${login}`)
      .then(Response => Response.json())
      .then(setData); 
    }, []);
  
    if(data) {
      return <div>{JSON.stringify(data)}</div>
    } else {
      return <p>No user Available</p>
    } 
  
  }

  export default App2; 