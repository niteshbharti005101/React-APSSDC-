import React,{useState} from 'react';

let StatesInFunction=()=>{
    const [count,setCount]=useState();
    return(
        <div>
            <h2> States In Function Component</h2>
            <h2> {count}</h2>
            <h2> {typeof(count)}</h2>
            <h2 onMouseOver={()=>setCount("Hi")}
                onMouseLeave={()=>setCount("Bye")}> {typeof(count)}</h2>

        </div>
    )
}
export default StatesInFunction;