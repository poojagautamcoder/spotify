import React, {useState} from "react";
import useMyownHook from "./useMyownHook";
const Test = () => {
const [count, setCount] = useState(0);
useMyownHook(count)

console.log ("hello")
  return (
<div>
    <h1>{count}</h1>
    <button onClick={()=> setCount(count + 1) }>My count</button>
</div>
  )
};

export default Test;
