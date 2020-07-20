import React,{useState} from 'react';

let StatesInFunction=(props)=>{
    let initialValue=0;
    let [count,setCount]=useState(initialValue);
    return(
        <div><br></br>
            <hr></hr>
            <h1><u>States In Function</u></h1>
            <h2> {props.name} is {typeof(Number(props.age))} old</h2>
            <h2> {props.name} is {(props.age)} old</h2>
            <h2> {count}</h2>
            <button onClick={()=>{setCount(count+=1)}}>Increment</button>
            <button onClick={()=>{setCount(count-=1)}}>Decrement</button>
            <button onClick={()=>{setCount(count=initialValue)}}>Initial</button>
            <br></br><hr></hr><br></br>
        </div>
    )
}
export default StatesInFunction;