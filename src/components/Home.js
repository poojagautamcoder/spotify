import React, { useState, useMemo } from "react";

const Home = () => {
  const [state, setstate] = useState(0);
  const [count, setCount] = useState(0);
  

  const noRender = useMemo (() =>{
    return <div>
         <h1>Usememo{count} -- {state}</h1>
      <h2>{count}</h2>
    </div>
  },[state])

  return (
    <div>
      {noRender}
         <h1>Usememo</h1>
      <h2>{count}</h2>
      <button onClick={() => {setCount(count+1)}}>update data</button>
   <button onClick={() => {setstate("hello")}}>update data</button>
    </div>
  );
};

export default Home;

