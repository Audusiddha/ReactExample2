import React, {useState} from "react";

function CounterTwo(){
    //hook wala
    
    const[count,setCount]= useState(0)   

    const increment=() =>{
      //  round brackets fpr updating the state variable 
        //this.setState((prevState)=>({count:prevState.count+1}))
        setCount(count+1)
    }
    const decrement=() =>{
        //  round brackets fpr updating the state variable 
         // this.setState((prevState)=>({count:prevState.count-1}))
         setCount(count-1)

      }
      return(
        <>
        <h1> This is the number products ={count} </h1>
        <button onClick={increment}>Increment+</button>
        <button onClick={decrement}>Decrement-</button>


        </>
    )

}

    
export default CounterTwo;