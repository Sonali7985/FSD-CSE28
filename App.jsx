
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'
function App() {
//   const[name,SetName]=useState("")
//   const[email,SetEmail]=useState("")
//   const[password,SetPassword]=useState("")
//   function Show(){
//     if(name===""|| email===""|| password===""){
//       alert("Please fill details")
//     }
//     else{
//       alert("Registration sucessfull")
//     }
//   }
  
  //  const [count, setCount] = useState(0)
  // const increment=()=>{
  //   setCount(count+1)
  // }
  // const decrement=()=>{
  //   setCount(count-1)
  // }
  // const reset=()=>{
  //   setCount(0)
  // }

  return (
    <>
    {/* <h1>Registration Form</h1>
    <input type="text" placeholder="Enter Your Name" onChange={(e)=>SetName(e.target.value)}/><br/>
    <input type="text" placeholder="Enter Your Email-Id"onChange={(e)=>SetEmail(e.target.value)}/><br/>
    <input type="text" placeholder="Enter Your Password"onChange={(e)=>SetPassword(e.target.value)}/><br/>
   <h2>{name}</h2>
   <h2>{email}</h2>
   <h2>{password}</h2>
   <button onClick={Show}>Sumbit </button> */}
  
    {/* <h2>student information</h2>
      <Student name="Sonam" course="B.Tech" marks="100"/><br/>
            <Student name="Mahi" course="BBA" marks="95"/><br/>
                  <Student name="Supriya" course="MCA" marks="98"/><br/> */}
  <h2>Product Showcase</h2>
  <Student name="Wireless Mouse" price="₹799" Category="Electronics"/><br/>
  <Student name="Running Shoes" price="₹2499" category="Footware"/><br/>
  <student name="Smart Watch" price="₹3999" category="Gadgets"/><br/>
    {/* <iframe src="https://www.youtube.com/embed/mbOO0Z6ryO0"></iframe>
    <iframe src="https://www.youtube.com/embed/hoNb6HuNmU0?list=RDhoNb6HuNmU0&start_radio=1"></iframe>
<h1>Welcome to my wabepage of ABES</h1>
<h2>Hello </h2>
<p>Hello Sonam</p>
<img src="https://images.pexels.com/photos/31053348/pexels-photo-31053348.jpeg"></img>
<audio control>
  <source src="https://pixabay.com/music/search/sound/"></source>
</audio>
<video control>
  <source src=""></source>
</video> */}

</>
)
}

export default App