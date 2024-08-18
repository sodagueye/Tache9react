import React from 'react'
import { useState } from 'react';


function Home () {
    const [name , setName]= useState('mario');
    const [age ,setAge]=useState(25)
    const handleClick=() => {
        setName('hello');
        setAge("30")
    }
    return(
        <div className='home'>
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>click me</button>
            {/* <button onClick = {() => {handleClickAgain("bonjour")}}>Click me again</button> */}
          
        </div>
    )
}
export default Home