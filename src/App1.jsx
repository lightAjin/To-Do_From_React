import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
// import FirstComponent from './components/FirstComponentPassingProps'
// import Navbar from './components/Navbar'
const App1 = () => {
  //1. JSX rwritten above return
  // let x=10;
  // let arr=["user1","user2","user3","user4","user5"];

  //2. Conditional Rendering
  // let data="boy"

  //3. Hnadling Event
    // const btnClcik = () =>{
    //   console.log("Clicked");
    // }

  //4.React useState Hook
  // const [value,setValue]=useState(0);
 
  // 5.Passing Props
  // const [value,setValue]=useState(0);
   
  // 6.useRef 
  const [data,setData]=useState([]); //Empty array  
  const inputRef = useRef(null);
    
  return (
    <div>
      {/* 0. Passing and Mounting Component  */}
      {/* <Navbar />  */}

      {/* JSX Written  */}
      {/* {x}
      {arr.map((user)=>{return <h2>{user}</h2>})} */}

      {/* Conditional Rendering    */}
      {/* {data==="boy"?<h1>Boy</h1>:<h1>Girl</h1>} */}

       {/* Handling Event   */}
       {/* <button onClick={()=>{btnClcik()}}>Click Me</button>  */}

       {/* React UseState Hook  */}
       {/* {value}
       <button onClick={()=>{setValue(value+1)}}>Click</button> */}

       {/* Props(Args and function passed inside the components)*/}
       {/* <button onClick={()=>{setValue(value+1)}}>Click</button>
        <FirstComponentPassingProps data={value} fn={setValue}/> */}
        
        {/* useref  */}
        {/* <input ref={inputRef} type="text" /> */}
        {/* <button onClick={()=>{console.log(inputRef.current.value);}}>Submit</button> */}

        {/* <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
        {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})} */}

        
    </div>
  )
}

export default App1


