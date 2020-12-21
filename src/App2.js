import React, {useState, useEffect, useReducer} from "react"; 
import './App.css';

//https://api.github.com/users/michelleandersson


function App2({login}) {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        if(!login) return; 
        setLoading(true); 
      fetch(`https://api.github.com/users/${login}`)
      .then(Response => Response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);  
    }, [login]);

    if(loading) return <h1>Loading...</h1>; 
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>; 
    if(!data) return null; 
  
    return (<div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img height={200} alt={data.login} src={data.avatar_url} />
    </div>
    ); 
  }

  export default App2; 