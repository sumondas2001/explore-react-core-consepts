import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'



function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Actor name={'Bappa '}></Actor>
     {/* <Todo task="Learn React" isDone={true}></Todo>
     <Todo task="Explore core consepts React" isDone={false} ></Todo>
     <Todo task="Try jsx" isDone={true}></Todo> */}


      {/* <Device name='laptop ' price='70K'></Device>
      <Device  name='mobile' price='60K'></Device>
      <Device name='watch' price= '3K'></Device>
      <Parson></Parson>
      
      <Student grade='7' score='99'></Student>
      <Student grade={12} score={85}></Student>
      <Student></Student> */}


    </>
  )
};
function Device(props){
  // console.log(props)
  return <h2>This device : {props.name} {props.price} </h2>
}
function Parson() {
  const age = 23;
  const money = 20;
  const parson = { name: "sakib", age: 23 }
  return <h2>I am {parson.name} with age: {age + money}</h2>
};
function Student({grade=1,score=0}) {
  console.log(grade,score)
 
  return (
    <div className='student'>
      <h3>I Am a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

export default App
