// import React from 'react'

// const Students = (props) => {
//   return (
//     <div>
//       <div style={{backgroundColor:'pink',border:'5px solid brown',height:'400px', width:'400px', margin:'auto', textAlign:'center',color:'brown'}}>
//         <h2 style={{color:'brown'}}> {props.name} </h2>
//         <img src= {props.image} alt="image" height={'200px'} width={'200px'} border={'4px solid white'} />
//         <h3>Roll No. : {props.roll}</h3>
//         <h3>Class - BTECH CSE</h3>
//       </div>
//     </div>
//   )
// }

// export default Students

import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'

function Home(){
  return <h1>This is the Home page</h1>
}
function About() {
  return <h1>This is the About page</h1>  
}
function Contact() {
  return <h1>This is the Contact page</h1>
}
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link>| {" "}</li>
          <li><Link to="/about">About</Link>| {" "}</li>
          <li><Link to="/contact">Contact</Link>| {" "}</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}
