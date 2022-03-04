import React,{useState, useEffect} from "react";

const Functionalcomponent = () => {
const [state, setstate] = useState(0);

// useEffect(() => {
//     setInterval(()=>{
//         setstate (state+1);
//     },1000)
 
// }, [state]);
//   return <div>{state}</div>;
// };
useEffect(()=>{
    let count = state
    setInterval(() => {
        setstate(count + 1)
      count = count + 1
    }, 1000);
  }, [])
  return <div>{state}</div>;

}

export default Functionalcomponent;
