import {useEffect} from "react";
const useMyownHook = (count) => {
    useEffect(() => {
        console.log ("I am custom hook")
       if(count >= 1){
document.title = `This is (${count}`
       }else{
           document.title = `custom hook`
       }
    }, [count]);
}

export default useMyownHook ;