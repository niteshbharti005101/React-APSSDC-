import React,{useState} from 'react';

let StatesInFunction=(props)=>{
    let initialValue=0;
    let [count,setCount]=useState(initialValue);
    return(
        <div>
            <h2> {props.name} is {typeof(Number(props.age))} old</h2>
            <h2> {count}</h2>
            <button onClick={()=>{setCount(count+=1)}}>Increment</button>
            <button onClick={()=>{setCount(count-=1)}}>Decrement</button>
            <button onClick={()=>{setCount(count=initialValue)}}>Initial</button>
        </div>
    )
}
export default StatesInFunction;