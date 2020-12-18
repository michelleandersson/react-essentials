import React, {useState} from "react"; 
import './App.css';
// import frog from "./nedladdning.jpg"; 

// function Header (props) {
//   return (
//     <header>
//       <h1>{props.name}'s Kitchen</h1>
//     </header>
//   )
// }

// function Main (props) {
//   return (
//     <section>
//       <p>
//         We serve the most {props.adjective} food around!
//       </p>
//       <img src={frog} height={200} alt="Frog singing" />
//       <ul style={{textAlign: "left"}}>
//         {props.dishes.map((dish) => (
//         <li key={dish.id}>{dish.title}</li>
//         ))}
//       </ul>
//     </section>
//   )
// }

// function Footer (props) {
//   return (
//     <footer>
//       <p>Copyright: {props.year}</p>
//     </footer>
//   )
// }

// const dishes = [
//   "Mac & Cheese", 
//   "Salmon", 
//   "Chicken Nuggets"
// ]; 

// const dishObjects = dishes.map((dish, i) => ({id:i, title:dish})); 


function SecretComponent () {
  return <h1>Secret Message</h1>
}

function RegularComponent () {
  return <h1>Everyone can see this component.</h1>
}


function App() {
  // return (
  //   <div className="App">
  //     {/* <Header name="Mattias" />
  //     <Main adjective="amazing" dishes={dishObjects} />
  //     <Footer year={new Date().getFullYear()} /> */}
  //   </div>
  // );
// if (props.authorized){
//   return <SecretComponent />
// } else {
//   return <RegularComponent />

// }

// return (
//   <>
//   {props.authorized ? <SecretComponent /> : <RegularComponent /> }
//   </>
// )

const [emotion, setEmotion] = useState("happy"); 
return (
  <>
  <h1>Current mood is: {emotion}</h1>
  <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
  <button onClick={() => setEmotion("enthuziastic!")}>Enthuziastic</button>
  </>
)



}

export default App;
