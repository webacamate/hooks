import { useState } from "react";
const useCounter= (initialState=0)=>{
    const [count, setcount] = useState(initialState)
    const increment=()=>setcount(count+1);
    const decrement=()=>setcount(count-1);
    return {count,increment,decrement};
};
export default useCounter;