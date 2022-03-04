import React, {useState , useEffect, useLayoutEffect} from "react";

const Uselayouteffect = () => {
  const [count, setCount] = useState(0);
  const [increment, setincrement] = useState(0);
  useLayoutEffect(() => {

    console.log("uselayout")

  }, [])
  useEffect(() => {

    console.log("useeffect")

  }, [])
  return (
    <div>
      <h1> {`USE EFFECT${count}`} </h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Update Count
      </button>
      <div>
      <h1> {`Use layout effect ${increment}`} </h1>
      <button onClick={() => setincrement((count) => count + 1)}>
        Update Count
      </button>  
      </div>
    </div>
  );
};

export default Uselayouteffect;
