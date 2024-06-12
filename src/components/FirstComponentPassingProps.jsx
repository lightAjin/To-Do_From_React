import React from 'react'

// 1.Normal Passing
// const FirstComponent = (props) => {

// 2.Destructure Passing 
const FirstComponent = ({data,fn}) => {
  return (
    <div>
    {/* 1.Normal Passing */}
      {/* {props.data} */}

    {/* 2.Destructure Pass  */}
    <button onClick={()=>{fn(10)}}>set 10</button>
    {data}

    </div>
  )
}

export default FirstComponent
