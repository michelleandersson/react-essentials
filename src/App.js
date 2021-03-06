import React, {useState, useEffect, useReducer} from "react"; 
import './App.css';
import frog from "./nedladdning.jpg"; 

function Header (props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main (props) {
  return (
    <section>
      <p>
        We serve the most {props.adjective} food around!
      </p>
      <img src={frog} height={200} alt="Frog singing" />
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer (props) {
  return (
    <footer>
      <p>Copyright: {props.year}</p>
    </footer>
  )
}

const dishes = [
  "Mac & Cheese", 
  "Salmon", 
  "Chicken Nuggets"
]; 

const dishObjects = dishes.map((dish, i) => ({id:i, title:dish})); 


// function SecretComponent () {
//   return <h1>Secret Message</h1>
// }

// function RegularComponent () {
//   return <h1>Everyone can see this component.</h1>
// }


function App({login}) {

  const [emotion, setEmotion] = useState("happy"); 
  const [secondary, setSecondary] = useState("tired"); 

  useEffect (() => {
    console.log(`It's ${emotion} around here...`);
  }, [emotion]); 

  useEffect(() => {
    console.log(`It's ${secondary} around here...`);
  },[secondary])

  const [checked, toggle] = useReducer(
    (checked) => !checked, 
    false
    );
  

  return (
    <>
    
    <h1 style= {{color: "blue"}}>This page is just to try out different 
      techniques in React. Please ignore the poor design
      and bad content. It's just a sandbox...
    </h1>
      {/* Kitchen Part */}
      <div className="App">
        <Header name="Mattias" />
        <Main adjective="amazing" dishes={dishObjects} />
        <Footer year={new Date().getFullYear()} /> 
      </div>
      {/* {props.authorized ? <SecretComponent /> : <RegularComponent /> }   */}
      

      {/* Mood Part   */}
      <h1>Current mood is: {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("happy")}>Make Happy</button>
      <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
      <button onClick={() => setEmotion("frustrated...")}>Frustrate</button>
      <button onClick={() => setEmotion("enthusiastic!")}>Enthuse</button>  
      
      {/* Checkbox Part */}
      <input 
        type="checkbox" 
        value= {checked} 
        onChange={toggle} 
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>  
    ); 
     
             
    // if (props.authorized){
    //   return <SecretComponent />
    // } else {
    //   return <RegularComponent />
    
    // };

}; 


export default App;
